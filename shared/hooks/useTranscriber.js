import {useContext} from 'react';
import Context from '../Context';

const useTranscriber = () => {
    return useContext(Context)
}

export default useTranscriber;