import React, { useState } from 'react';
import "../App.css";

const LinkShortener = ({setInputValue}) => {
    const [value, setValue] = useState("");

    const handleClick = ()=>{
        setInputValue(value);
        setValue("");
    }

  return (
    <>
        <div  className='link-shortener'>
          <h1>Link <span>Shortener</span></h1>
          <div>
           <input 
              type='text' 
              placeholder='Paste a link'
              value={value} 
              onChange={(e)=>{
                setValue(e.target.value)
              }}
              />
           <button onClick={handleClick}>Shorten</button>
          </div>
       </div>
    </>
    
  )
}

export default LinkShortener