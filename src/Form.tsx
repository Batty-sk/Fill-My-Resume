import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import { Divider } from "@mui/material";

type multivaluesObject = {
  value: string;
  chips: string[];
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
  const signleArray=[setName,setFirstName,setLastName,setGender,setEthnicity,setEmail,setPhoneNo,setJobTitle,setAboutMe]

  const [skills, setSkills] = useState<multivalues>({ value: "", chips: [localStorage.getItem('skills')||'' ] });
  const [languages, setLanguages] = useState<multivalues>({ value: "", chips: [localStorage.getItem('languages')||'' ] });
  const [interPersonalSkills, setInterPersonalSkills] = useState<multivalues>({ value: "", chips: [localStorage.getItem('interPersonalSkills')||'' ] });
  const [achivements,setAchivements]=useState<multivalues>({value:'',chips:[localStorage.getItem('achivements')||'']})
  const [hobbies, setHobbies] = useState<multivalues>({ value: "", chips: [localStorage.getItem("hobbies") || ""] });
  const [address, setAddress] = useState<multivalues>({ value: "", chips: [localStorage.getItem("address") || ""] });
  const [workexperience, setWorkexperience] = useState<multivalues>({ value: "", chips: [localStorage.getItem("workexperience") || ""] });
  const [education, setEducation] = useState<multivalues>({ value: "", chips: [localStorage.getItem("education") || ""] });
  const [projects, setProjects] = useState<multivalues>({ value: "", chips: [localStorage.getItem("projects") || ""] });
  const [socialMediaLinks, setSocialMediaLinks] = useState<multivalues>({ value: "", chips: [localStorage.getItem("socialMediaLinks") || ""] });
  const [whyDoWeHireYou, setWhyDoWeHireYou] = useState<multivalues>({ value: "", chips: [localStorage.getItem("whyDoWeHireYou") || ""] });
  const doubleArray=[setSkills,setLanguages,setInterPersonalSkills,setAchivements,setHobbies,setAddress,setWorkexperience,setEducation,setProjects,setSocialMediaLinks,setWhyDoWeHireYou]

  // we need to parse it

  let next = 0;

  const handleSubmit = () => {
    console.log("subbmitting your data....");
    //localStorage.setItem() // loop through all the items and set it one by one.
  };
  /*   <TextField
  id="outlined-textarea"
  label="Multiline Placeholder"
  placeholder="Placeholder"
  multiline
/> */

  const [inputValue, setInputValue] = useState<string>("");
  const [chips, setChips] = useState<string[]>([]);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      setChips([...chips, event.target.value.trim()]);
      setInputValue("");
    }
  };

  const handleChipDelete = (chipToDelete: string) => () => {
    setChips((prevChips) => prevChips.filter((chip) => chip !== chipToDelete));
  };

  const handleOnchange = (value: string, field: string, mutlivalue:boolean=false) => {

  };

  return (
    <div className="">
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
        
              <TextField
                label={field}
                placeholder={`Enter ${field}`}
                value={multivalues?.value || ''}
                color="success"
                multiline
                className="w-[100%]"
                onChange={(x)=>handleOnchange(x.currentTarget.value,field,true)}
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
              <Divider />
            </div>;

              <div key={index}>
                <TextField
                  label={field}
                  placeholder={`Enter Your ${field}`}
                  value={userData[field]}
                  color="warning"
                  onChange={(event) =>
                    handleOnchange(event.currentTarget.value, field)
                  }
                ></TextField>
              </div>
    
      <div className="">
        Yes sir
        <Button variant="contained" color="inherit" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Form;
