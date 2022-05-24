
import { useCookies }  from 'react-cookie'
import { useState , useEffect } from 'react';
import useTranscriber from './useTranscriber';

const useUser = () => {
    const [cookies , setCookies , removeCookie] = useCookies(['id', 'firstName' , 'lastName' , 'nickName'])
    
    const [user , setUserObj] = useState({})
    const {login , logout} = useTranscriber()


    useEffect(() => {
        if(cookies.id) {
            setUserObj(cookies)
            login(cookies)
        }
    }, [cookies])

    const clearSession = () => {
        removeCookie('id');
        removeCookie('firstName');
        removeCookie('lastName');
        removeCookie('nickName');
        setUserObj({});
        logout();
    }
    
    const setUser = (user) => {
        setUserObj(user);
        login(user);
        setCookies('id' , user.id);
        setCookies('firstName' , user.firstName);
        setCookies('lastName' , user.lastName);
        setCookies('nickName' , user.nickName);
    }

    return {user , setUser , clearSession}

}

export default useUser;