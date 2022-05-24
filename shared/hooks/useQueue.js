
import {useState} from 'react';

const useQueue = () => {


    const [items , setItems] = useState([]);
    const [index , setIndex] = useState(0);
    const [currentItem , setCurrentItem] = useState();
    const [complete , setComplete] = useState(false);
    
    const markAsComplete = () => {
        setIndex(i =>{
            const newIndex =  i + 1
            setIndex(newIndex)
            if(newIndex >= items.length){
                setCurrentItem(null)
                setComplete(true)
            }else{
                setCurrentItem(items[newIndex])
            }
        });
    }

    const setQueueItems = (items) =>{
        setItems(items)
        setCurrentItem(items[index])
    } 
    
    return {currentItem , markAsComplete , setQueueItems , complete}
}

export default useQueue;