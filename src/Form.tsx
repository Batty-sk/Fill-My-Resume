import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import {Divider} from '@mui/material'


interface userData{
  Name:string|null,
  firstName:string|null,
  lastName:string|null,
  gender:string|null,
  ethnicity:string|null,
  email:string[]|string |null,
  phoneNo:number[]|string| null,
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
    "Name":localStorage.getItem('Name'),
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
  if (event.key === 'Enter' && inputValue.trim() !== '') {
    setChips([...chips, inputValue.trim()]);
    setInputValue('');
  }
};

const handleChipDelete = (chipToDelete:string) => () => {
  setChips((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
};



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
  if(next){

  }
  else{
    return<div>
      <h3>Text-field</h3>
        <TextField
                label="Skills"
                value={}
                placeholder="Eg-Programming"
                color='warning'>

            </TextField>
        </div>
  
  }
})}



<div>
    <TextField
      label="Skills"
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
        <div className=''> 
        Yes sir
          <Button variant="contained" color="inherit" onClick={handleSubmit}>
              Submit
          </Button>
        </div>
        </div>
        </div>
  )
  }

export default Form