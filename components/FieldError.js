import { useEffect, useState } from "react";
import useTranscriber from "../shared/hooks/useTranscriber";


const FieldError = ({fieldKey}) => {

    const {errors} = useTranscriber();
    const [hasError , setHasError] = useState(false)
    const [errorMessage , setErrorMessage] = useState(false)
    

    useEffect(() => {
        if(!errors){
            setHasError(false)
        }else{
            const fieldErrors = errors.filter((error) => error.instancePath === fieldKey)
            setHasError(fieldErrors.length > 0)
            if(fieldErrors.length > 0){
                setErrorMessage(fieldErrors[0].message)
            }
        }
    } , [errors])
    
    if(!hasError){
        return null
    }
    
    return <>
        <span className="text-red-600">{errorMessage}</span>
    </>
}


export default FieldError;