import React from 'react'
import { useState,useEffect } from 'react'
import { Switch } from '@mui/material';
const ToggleBar:React.FC = () => {

    const[isOn,setisOn]=useState<boolean>(true)

    useEffect(() => {
      const state = localStorage.getItem('fmf') // returns the state of the extension
      if(state){
        setisOn(JSON.parse(state))
      }
      else{
        localStorage.setItem('fmf','true')
      }
    },[])
    

    const handleOnChange=()=>{

        setisOn(prevstate=>!prevstate)
        if(isOn){
            localStorage.setItem('fmf','false')
            chrome.runtime.sendMessage('turnOFF')
        }
        else{
            localStorage.setItem('fmf','true')
            chrome.runtime.sendMessage('turnON')
        }
    }
  return (
    <>
    <div className='flex flex-col justify-center '>
    <Switch  color='warning' checked={isOn } className='z-50' onChange={handleOnChange} />

</div>
    </>
    )
}

export default ToggleBar