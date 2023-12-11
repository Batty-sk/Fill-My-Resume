import React from 'react'
import { useState } from 'react'
import { Switch } from '@mui/material';
const ToggleBar:React.FC = () => {

    const[isOn,setisOn]=useState<boolean>(true)


    const handleOnChange=()=>{

        setisOn(prevstate=>!prevstate)
        if(isOn){
            console.log('is ON',isOn    )
            chrome.runtime.sendMessage('turnOFF')
        }
        else{
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