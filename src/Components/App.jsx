import { useState } from "react";


import { PersonalInfoData } from "./PersonalInfo";
import { WorkExperienceData } from "./WorkExerience";
import { EducationExperienceData } from "./Education";
import "./styles.css"



function CreateInput({type="text", id, placeholder, name, required=true, onChange, className, text, autoComplete="on", value}) {
  return (
    <div className={className}>
      {text && <label htmlFor={id}>{text}</label>}
      <input type={type}  id={id} placeholder={placeholder} name={name} required={required} 
      onChange={onChange} autoComplete={autoComplete} value={value}/>
  
    </div>
      
  )
}


function CreateButton({type="button", onClick, text="Save"}) {
  
  return (
    <button type={type} onClick={onClick}>{text}</button>

  )
}



function Preview({data}) {

  if (!data) {
    return null;
  }


  return (


    <div>
      {Object.entries(data).map(([key, value]) => {
        return <p key={key}>{key}: {value}</p>
       
      })}
      
    </div>
    
  )
}


export default function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    secondName: "",
    phoneNumber: "",
    email: "",
    country: "",


  });

  const onPersonalInfoInputValueChange = (e) => {

    const {name, value: inputValue} = e.target;


    setPersonalInfo((preValues) => ({...preValues,
      [name]: inputValue}));
   
  };


  const [workInfo, setWorkInfo] = useState({
    companyName: "",
    jobTitle: "",
    country: "",
    responsibilities: "",
    to: "",
    from: "",
    present: ""

  })

  const onWorkExperienceInputValueChange = (e) => {

    const {name, value: inputValue, type, checked} = e.target;


    setWorkInfo((preValues) => ({...preValues,
      [name]: type === "checkbox" ? checked : inputValue}));
   
  };

  const [educationInfo, setEducationInfo] = useState({
    instituteName: "",
    field: "",
    country: "",
    level: "",
    to: "",
    from: "",
    present: ""

  })


  const onInputValueChange = (e) => {

  const {name, value: inputValue, type, checked} = e.target;


  setEducationInfo((preValues) => ({...preValues,
      [name]: type === "checkbox" ? checked : inputValue}));
   
  };


  
  const [data, setData] = useState({
    personalInfo: null,
    educationInfo: null,
    workInfo: null

  });

   const personalInfoEdithandler = () => {
    setPersonalInfo(
       data.personalInfo
    )
   }

   const educationInfoEdithandler = () => {
    setEducationInfo(
       data.educationInfo
    )
   }

   const workInfoEdithandler = () => {
    setWorkInfo(
       data.workInfo
    )
   }

  const personalInfoSavedData = () => {
        setData((preValue) => ({
          ...preValue,
          personalInfo: personalInfo

        }))

        setPersonalInfo({
          firstName: "",
          secondName: "",
          phoneNumber: "",
          email: "",
          country: "",
        })
      
  }
  const educationInfoSavedData = () => {
      setData((preValue) => ({
        ...preValue,
        educationInfo

      }))

      setEducationInfo({instituteName: "",
      field: "",
      country: "",
      level: "",
      to: "",
      from: "",
      present: ""
  
    })
  } 

  const workInfoSavedData = () => {
    setData((preValue) => ({
      ...preValue,
      workInfo

    }));

    setWorkInfo({companyName: "",
    jobTitle: "",
    country: "",
    responsibilities: "",
    to: "",
    from: "",
    present: ""

  })
} 



  return (
  <div className="form-preview-container">
    <div className="forms">

    < PersonalInfoData value={personalInfo} onChange={onPersonalInfoInputValueChange} CreateInput={CreateInput} CreateButton={CreateButton} 
    save={personalInfoSavedData} onClick={personalInfoEdithandler} />

    <  EducationExperienceData value={educationInfo} onChange={onInputValueChange} CreateInput={CreateInput} 
    CreateButton={CreateButton} save={educationInfoSavedData} onClick={educationInfoEdithandler} />

    <  WorkExperienceData value={workInfo} onChange={onWorkExperienceInputValueChange} CreateInput={CreateInput} 
    CreateButton={CreateButton} save={workInfoSavedData} onClick={workInfoEdithandler} />
    
    

    </div>
    <section className="preview">
     {data && < Preview data={(data.personalInfo)}/>}
     {data && < Preview data={data.educationInfo}/>}
     {data &&< Preview data={data.workInfo}/>}
    </section>
  </div>
    )
}