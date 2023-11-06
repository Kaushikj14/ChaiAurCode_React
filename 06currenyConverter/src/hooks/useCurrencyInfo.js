// import { useEffect,useState } from "react";

// // custom hooks(it is a normal function which returns array and contains two things in array(we can use react hooks to build our custom hooks))

// function useCurrencyInfo(currency){

//     const [data , setData] = useState({});

//     useEffect(()=>{
//         // let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
//         // fetch(url) or

//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res) =>  res.json())
//         .then((res)=> setData(res[currency]))
//     },[currency])

//     console.log(data);
//     return data;
// }

// export default useCurrencyInfo; 

import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;