import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData]= useState([])

    useEffect(()=>{
        fetch(url,)
        .then((res)=> res.json())
        .then((fetchedData)=>{
            setData(fetchedData)
        })
    }, [url])

    return ( {data} );
}
 
export default useFetch;