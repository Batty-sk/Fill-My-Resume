import React, {useState ,useEffect} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Chip from "@mui/material/Chip";
import { Divider } from "@mui/material";

type multivaluesObject = {
  value: string;
  chips:any[];
};
type multivalues = multivaluesObject;
type singlevalues = string ;


const Form: React.FC = () => {

  
  const [name, setName] = useState<singlevalues>(localStorage.getItem('name')|| '');
  const [firstName, setFirstName] = useState<singlevalues>(localStorage.getItem('firstName')|| '');
  const [lastName, setLastName] = useState<singlevalues>(localStorage.getItem('lastName')|| '');
  const [gender, setGender] = useState<singlevalues>(localStorage.getItem('gender')|| '');
  const [ethnicity, setEthnicity] = useState<singlevalues>(localStorage.getItem('ethnicity')|| '');
  const [email, setEmail] = useState<singlevalues>(localStorage.getItem('email')|| '');
  const [phoneNo, setPhoneNo] = useState<singlevalues>(localStorage.getItem('phoneNo')|| '');
  const [jobTitle, setJobTitle] = useState<singlevalues>(localStorage.getItem('jobTitle')|| '');
  const [aboutMe, setAboutMe] = useState<singlevalues>(localStorage.getItem('aboutMe')|| '');
  const singleArray=[{label:'name',stateName:name,dispatcher:setName},{label:'firstName',stateName:firstName,dispatcher:setFirstName},
  {label:'lastName',stateName:lastName,dispatcher:setLastName},{label:'gender',stateName:gender,dispatcher:setGender},{label:'ethnicity',stateName:ethnicity,dispatcher:setEthnicity}
  ,{label:'email',stateName:email,dispatcher:setEmail},{label:'phoneNo',stateName:phoneNo,dispatcher:setPhoneNo},
  {label:'jobTitle',stateName:jobTitle,dispatcher:setJobTitle},{label:'aboutMe',stateName:aboutMe,dispatcher:setAboutMe}]

  const [skills, setSkills] = useState<multivalues>({ value: "", chips: []})
   const [languages, setLanguages] = useState<multivalues>({ value: "", chips:[]  });
  const [interPersonalSkills, setInterPersonalSkills] = useState<multivalues>({ value: "", chips:[] });
  const [achivements,setAchivements]=useState<multivalues>({value:"",chips:[]})
  const [hobbies, setHobbies] = useState<multivalues>({ value: "", chips:[]});
  const [address, setAddress] = useState<multivalues>({ value: "", chips: []});
  const [workexperience, setWorkexperience] = useState<multivalues>({ value: "", chips:[]});
  const [education, setEducation] = useState<multivalues>({ value: "", chips:[]});
  const [projects, setProjects] = useState<multivalues>({ value: "", chips: [] });
  const [socialMediaLinks, setSocialMediaLinks] = useState<multivalues>({ value: "", chips: []});
  const [whyDoWeHireYou, setWhyDoWeHireYou] = useState<multivalues>({ value: "", chips: []});
  const multiValuesArray = [

    { label: 'skills', state: skills, dispatcher: setSkills },
    { label: 'languages', state: languages, dispatcher: setLanguages },
    { label: 'interPersonalSkills', state: interPersonalSkills, dispatcher: setInterPersonalSkills },
    { label: 'achievements', state: achivements, dispatcher: setAchivements },
    { label: 'hobbies', state: hobbies, dispatcher: setHobbies },
    { label: 'address', state: address, dispatcher: setAddress },
    { label: 'workexperience', state: workexperience, dispatcher: setWorkexperience },
    { label: 'education', state: education, dispatcher: setEducation },
    { label: 'projects', state: projects, dispatcher: setProjects },
    { label: 'socialMediaLinks', state: socialMediaLinks, dispatcher: setSocialMediaLinks },
    { label: 'whyDoWeHireYou', state: whyDoWeHireYou, dispatcher: setWhyDoWeHireYou }
  ]; 

  useEffect(() => {

    
                multiValuesArray.map((item)=>{

                const skillsString = localStorage.getItem(item.label);

                  try {
                    const skillsData = skillsString ? JSON.parse(skillsString) : [];
                    item.dispatcher({value:'',chips:skillsData})
                  } catch (error) {

                          item.dispatcher({value:'',chips:[]})
                  }
                }
                )
    
  }, [])
  
  // we need to parse it
  //let next = 0;


  /*   <TextField
  id="outlined-textarea"
  label="Multiline Placeholder"
  placeholder="Placeholder"
  multiline
/> */

 /*  const [inputValue, setInputValue] = useState<string>("");
  const [chips, setChips] = useState<string[]>([]); */




  const handleKeyPress = (event: any,index:number) => {
    
    if (event.key === "Enter" && event.target.value.trim() !== "") {
       multiValuesArray[index].dispatcher({value:'',chips:[ ...multiValuesArray[index].state.chips,event.target.value.trim()]})
    }
  };


  const handleOnchange = (value: string,index:number,) => {
    singleArray[index].dispatcher(value)

  };
   const handleOnMultiChange=(value:string,index:number)=>{

    const chips = multiValuesArray[index].state.chips
    multiValuesArray[index].dispatcher({value:value,chips:[...chips]})
 
  } 

  const handleChipDelete=(chipTodelete:string,index:number)=>{
    const filteredChips=multiValuesArray[index].state.chips?.filter(x=>x!==chipTodelete)

    multiValuesArray[index].dispatcher({value:'',chips:filteredChips})

  }


  const handleSubmit=()=>{

    singleArray.map(x=>{
      localStorage.setItem(x.label,x.stateName)
    })
    multiValuesArray.map(x=>{
      localStorage.setItem(x.label,JSON.stringify(x.state.chips))
    })

    console.log('saved to the local storage...')

  }

  const handleReset=()=>{
    singleArray.map(x=>{
      x.dispatcher('')
    })
    multiValuesArray.map(x=>{
      x.dispatcher({value:'',chips:[]})
    })

    console.log('reset completed!')
  } 
  return (
    <div className="p-8">
      <div className="flex justify-around flex-wrap">
        {" "}
        {/* dyanamically generated would be better option */}
        {/*         {Object.keys(userData).map((key) => {
        return  <div className='bg-white' key={key}>
          <p>
            tell me bro
          </p>
            Yes sir
          </div>
        }

       )} */}
        
        <div className="w-[100%] flex flex-wrap justify-center mb-8">
          {singleArray.map((stateInfo,index)=>{
         
                    return <div key={stateInfo.label} className="mt-3 w-40 me-2" >
                <TextField
                  label={stateInfo.label}
                  placeholder={`Enter Your ${stateInfo.label}`}
                  value={stateInfo.stateName}
                  color="info"
                  sx={{background:'#859ca7',width:'100%',borderTopLeftRadius:'12px',borderTopRightRadius:'12px'}}
                  onChange={(event) =>
                    handleOnchange(event.currentTarget.value,index)
                  } />
        
                  </div>
          }    )}
          </div>

          <div className="w-[100%] flex flex-wrap justify-center mb-8">
          {multiValuesArray.map((stateInfo,index)=>{

            return<div key={stateInfo.label} className="mt-3 w-40 me-2">
               <TextField
                    label={stateInfo.label}
                    placeholder={`Enter ${stateInfo.label}`}
                    value={stateInfo.state.value}
                    color="success"
                    multiline={true}
                    rows={5}
                    className="w-[100%]"
                    sx={{background:'#859ca7',width:'100%'}}

                    onChange={(x)=>
                      handleOnMultiChange(x.currentTarget.value,index)
                    }
                     onKeyPress={(event)=>{handleKeyPress(event,index)}} 
                  />
                  <div style={{ marginTop: 10 }}>
                    {stateInfo.state?.chips?.map((chip, i) => (
                      <Chip
                        key={i}
                        label={chip}
                          style={{ marginRight: 5 }}
                        onDelete={()=>{handleChipDelete(chip,index)}}
                      />
                    ))}
                  </div>
                  <Divider />
            </div>
          }
          )}
          </div>

 <div className="flex justify-evenly">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save
        </Button>

        <Button variant="outlined" color="secondary" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
    </div>
  );
};

export default Form;
