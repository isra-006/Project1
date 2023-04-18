import React, { useEffect, useState } from 'react';
import CopyToClipboard from "react-copy-to-clipboard";
import copied from "../icons/copy.png";
import done from "../icons/done.png";
import axios from "axios";
import "../App.css";


const LinkResult = ({inputValue}) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copy, setCopy] = useState(false);
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(false);

 
  const fetchData = async () =>{
    try{
        setLoading(true);
        const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
        setShortenLink(res.data.result.full_short_link);
    }catch(err){
        setError(err);
    }finally{
        setLoading(false);
    }
  }

  useEffect(()=>{
    if(inputValue.length){
        fetchData();
    }
  }, [inputValue])

  useEffect(()=>{
   
    const timer = setTimeout(()=>{
        setCopy(false);
    }, 1000);
    return ()=> clearTimeout(timer);
  }, [copy]);

  if(loading){
    return <p className='nodata'>Loading...</p>
  }
  if(error){
    return <p className='nodata'>Something went wrong</p>
  }

  return (
    <>
        {shortenLink && (
          <div className="result">
            <p>{shortenLink}</p>

            <CopyToClipboard 
              text={shortenLink}
              onCopy={()=>{
                setCopy(true);
              }}>
              { !copy ? <button><img src={copied} alt="copy icon" width="23px" height="23px" /></button> : <button><img src={done} alt="done icon" width="23px" height="23px" /></button>  }    
            </CopyToClipboard>
           </div>
        )}
    </>
  )
}

export default LinkResult;

