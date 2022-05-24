
import React, { useEffect , useState } from 'react';
import Router from 'next/router'
import ReactAudioPlayer from 'react-audio-player';

import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

import styles from '../styles/Home.module.css'

import Header from '../components/Header';
import FieldError from '../components/FieldError';

import {get , post} from '../shared/HTTP';

import useQueue from '../shared/hooks/useQueue';
import useTranscriber from '../shared/hooks/useTranscriber';

import validateTranscription from '../shared/validators/transcription'

import API_ENDPOINTS , {ENDPOINTS_KEYS} from '../shared/constants/api_endpoints';
import ROUTES , {ROUTE_KEYS} from '../shared/constants/routes';
import {AUDIO_PATH_PREFIX} from '../shared/constants/http';

const Transcription = () => {

    const {currentItem , markAsComplete , setQueueItems , complete} = useQueue();
    const [transcription , setTranscription] = useState("")
    const {setErrors} = useTranscriber();
    
    const fetchTransmissions = async() => {
        const res = await get(API_ENDPOINTS[ENDPOINTS_KEYS.GET_QUEUE])
        const items = await res.json()
        setQueueItems(items);
        if(items.length === 0){
            markAsComplete()
        }
    }

    useEffect(() => {
        fetchTransmissions();
    } , [])


    const renderAudioPlayer = () => {
        if(!currentItem) return
        return (
        <>
            <h3> <strong>File Name : </strong>  {`${currentItem.fileName}.wav`}</h3>
            <ReactAudioPlayer
                src={`${AUDIO_PATH_PREFIX}${currentItem.fileName}.wav`}
                controls
                className='w-full'
            />
        </>
        )
    }
    
    const submitTranscription = async () => {

        const isFormValid = validateTranscription({transcription})
        setErrors(validateTranscription.errors)
        
        if(isFormValid){
            try{
                const res = await post(API_ENDPOINTS[ENDPOINTS_KEYS.SUMIT_TRANSCRIPTION] , {id : currentItem.id , transcription})
                setTranscription("");
                markAsComplete();
            }catch(err){

            }
        }
    }

    useEffect(() => {
        if(complete){
            Router.push(ROUTES[ROUTE_KEYS.THANK_YOU])
        }
    } , [complete])

    return (
        <div className={styles.container}>
            <Header/>
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className='flex flex-col px-20 mt-20'>
                {renderAudioPlayer()}
                <TextareaAutosize
                    onChange ={(e) => setTranscription(e.target.value)}
                    value={transcription}
                    aria-label="minimum height"
                    minRows={3}
                    placeholder="Minimum 3 rows"
                    className='border border-gray-400 mt-5 p-4'

                />
                <FieldError fieldKey="/transcription" />
            </div>
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <div className='flex flex-col items-center'>
                <Button onClick={submitTranscription} variant="outlined">Next</Button>
            </div>
        </div>
    )

}



export default Transcription;