import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import {Divider} from '@mui/material'


interface userData{
  [key: string]: string[] | string | null;

  name:string|null,
  firstName:string|null,
  lastName:string|null,
  gender:string|null,
  ethnicity:string|null,
  email:string[]|string |null,
  phoneNo:string[]|string| null,
  jobTitle:string[]|string|null,
  aboutMe:string[]|string |null,
  skills:string[]|string |null,
  languages:string[]|string|null,
  interPersonalSkills:string[]|string|null,
  achievements:string[]|string|null,
  hobbies:string[]|string|null,
  address:string[]|string|null,
  workexperience:string[]|string|null,
  education:string[]|string|null,
  projects:string[]|string|null,
  socialMediaLinks:string[]|string|null,
  whyDoWeHireYou:string[]|string|null,

}

const Form:React.FC= () => {
  const [userData,setUserdata]=useState<userData>({
    "name":localStorage.getItem('name'),
    "firstName":localStorage.getItem('firstName'),
    "lastName":localStorage.getItem('lastName'),
    "gender":localStorage.getItem('gender'),
    "ethnicity":localStorage.getItem('ethnicity'),
    "email":localStorage.getItem('email'),
    "phoneNo":localStorage.getItem('phoneNo'),
    "jobTitle":localStorage.getItem('jobTitle'),
    "aboutMe":localStorage.getItem('aboutMe'),

    "skills":localStorage.getItem('skills'),
    "languages":localStorage.getItem('languages'),
    "interPersonalSkills":localStorage.getItem('interPersonalSkills'),
    "achievements":localStorage.getItem('achivements'),
    "hobbies":localStorage.getItem('hobbies'),
    "address":localStorage.getItem('address'),
    "workexperience":localStorage.getItem('workexperience'),
    "education":localStorage.getItem('education'),
    "projects":localStorage.getItem('projects'),
    "socialMediaLinks":localStorage.getItem('socialMediaLinks'),
    "whyDoWeHireYou":localStorage.getItem('whyDoWeHireYou'),
  })   // we need to parse it

  let next=0

  const handleSubmit=()=>{
    console.log('subbmitting your data....')
    //localStorage.setItem() // loop through all the items and set it one by one.
  } 
/*   <TextField
  id="outlined-textarea"
  label="Multiline Placeholder"
  placeholder="Placeholder"
  multiline
/> */

const [inputValue, setInputValue] = useState <string>('');
const [chips, setChips] = useState<string[]>([]);

const handleInputChange = (event:any) => {
  setInputValue(event.target.value);
};

const handleKeyPress = (event:any) => {
  if (event.key === 'Enter' && event.target.value.trim() !== '') {
    setChips([...chips, event.target.value.trim()]);
    setInputValue('');
  }
};

const handleChipDelete = (chipToDelete:string) => () => {
  setChips((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
};


const handleOnchange=(value:string,field:string)=>{
    console.log('running....')
    setUserdata({...userData,[field]:value} )
}

  useEffect(()=>{

  },[])
  return (
    <div className=''>
        <div className='flex justify-around flex-wrap' > {/* dyanamically generated would be better option */}
{/*         {Object.keys(userData).map((key) => {
        return  <div className='bg-white' key={key}>
          <p>
            tell me bro
          </p>
            Yes sir
          </div>
        }

       )} */}
{Object.keys(userData).map((field,index)=>{
  if(field === 'skills')
    next=1

  if(next){
    <div key={index}>
<TextField
      label={field}
      placeholder="Eg-Programming"
      value={inputValue}
      color='success'
      multiline
      className='w-[100%]'
      onChange={handleInputChange}
      onKeyPress={handleKeyPress}
    />
    <div style={{ marginTop: 10 }}>
      {chips.map((chip, index) => (
        <Chip
          key={index}
          label={chip}
          onDelete={handleChipDelete(chip)}
          style={{ marginRight: 5 }}
        />

      ))}
    </div>
    <Divider/>

    </div>
  }
  else{

    return<div key={index}>
        <TextField
                label={field}
                placeholder={`Enter Your ${field}`}
                value={userData[field]||''}
                color='warning' 
                onChange={(event)=>handleOnchange(event.currentTarget.value,field)}
                >
                 

            </TextField>
        </div>
  
  }
})}



  </div>
        <div className=''> 
        Yes sir
          <Button variant="contained" color="inherit" onClick={handleSubmit}>
              Submit
          </Button>
        </div>
        </div>
  )
  }

export default Form