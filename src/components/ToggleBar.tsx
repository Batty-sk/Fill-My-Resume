import React from 'react'
import { useState } from 'react'

const ToggleBar:React.FC = () => {

    const[isOn,setisOn]=useState<boolean>(false)

 const handleOnToggle=()=>{
        //remove all the event listeners of the extension.

    }

  return (
    <div className='w-36 h-36 rounded-full border hover:scale-95 bg-slate-100  flex flex-col justify-center items-center cursor-pointer' style={{boxShadow:`1px 5px 5px ${isOn?'blue':'red'}`}}  onClick={()=>{
        console.log('yes sir')
        setisOn(prevstate=>!prevstate)
    }}>
    <span >Toggle</span>
</div>
    )
}

export default ToggleBar