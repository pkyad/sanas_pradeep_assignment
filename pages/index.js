import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { useEffect , useState } from 'react';
import { useCookies }  from 'react-cookie'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import styles from '../styles/Home.module.css'

import Header from '../components/Header';
import FieldError from '../components/FieldError';


import useTranscriber from '../shared/hooks/useTranscriber';
import useUser from '../shared/hooks/useUser';

import validateUser from '../shared/validators/user'

import {get , post} from '../shared/HTTP';

import API_ENDPOINTS , {ENDPOINTS_KEYS} from '../shared/constants/api_endpoints';
import ROUTES , {ROUTE_KEYS} from '../shared/constants/routes';

export default function Home() {

  const [firstName , setFirstName] = useState("")
  const [lastName , setLastName] = useState("")
  const [nickName , setNickName] = useState("")

  const {setUser} = useUser();
  const {setErrors} = useTranscriber();

  const submit = async() => {
    const isFormValid = validateUser({firstName , lastName , nickName})
    setErrors(validateUser.errors)
    
    if(isFormValid){
      const res = await post( API_ENDPOINTS[ENDPOINTS_KEYS.LOGIN] , {firstName , lastName })
      const jsonRes = await res.json();
      setUser({id : jsonRes.id , firstName , lastName , nickName})
      Router.push(ROUTES[ROUTE_KEYS.TRANSCRIPTION])
    }
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>SANAS Assignment</title>
        <meta name="description" content="by pradeep" />
      </Head>
      <Header/>
      <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className='flex space-x-5 '>
        <div className='flex flex-col space-y-5'>
          <TextField
            onChange={(e) => setFirstName(e.target.value)}
            required
            value={firstName}
            id="outlined-required"
            label="First Name"
          />
          <FieldError fieldKey="/firstName" />
          <TextField
            onChange={(e) => setLastName(e.target.value)}
            required
            value={lastName}
            id="outlined-required"
            label="Last Name"
          />
          <FieldError fieldKey="/lastName" />
        </div>
        <div>
          <TextField
            onChange={(e) => setNickName(e.target.value)}
            value={nickName}
            id="outlined-required"
            label="Nick Name"
          />
        </div>
      </div>
      <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className='flex flex-col items-center'>
        <Button onClick={submit} variant="outlined">Submit</Button>
      </div>
    </div>
  )
}
