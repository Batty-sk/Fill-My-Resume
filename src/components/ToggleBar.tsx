import React from 'react'
import { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const ToggleBar:React.FC = () => {

    const[isOn,setisOn]=useState<boolean>(false)


  return (
    <div className='w-36 h-36 rounded-full  hover:scale-95 bg-slate-100  flex flex-col justify-center items-center cursor-pointer transition-transform' style={{boxShadow:`1px 1px 5px ${isOn?'#357FDD':'red'}`,background:'#357FDD'}}  onClick={()=>{
        console.log('yes sir')
        setisOn(prevstate=>!prevstate)
    }}>
    <span ><PowerSettingsNewIcon fontSize='large' className='text-white' /></span>
</div>
    )
}

export default ToggleBar