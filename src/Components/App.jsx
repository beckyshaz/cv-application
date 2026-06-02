import { useState } from "react";


import { PersonalInfoData } from "./PersonalInfo";
import { WorkExperienceData } from "./WorkExerience";
import { EducationExperienceData } from "./Education";
import workIcon from "./assets/briefcase.svg";
import educationIcon from "./assets/school.svg";
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


function CreateButton({type="button", onClick, text="Save", className="saveBtn"}) {
  
  return (
    <button type={type} onClick={onClick} className={className}>{text}</button>

  )
}



function Preview({data, type, image}) {

  if (!data) {
    return null;
  }


  return (


    <div className="data-container">
      {type  && (
        <div className="icon-title-container">
          <img src={image} alt="" width="30"/>
          <h1>{type}</h1>
          </div>
      )}
      {Object.entries(data).map(([key, value]) => {
      

       if(key === "firstName") {
          return <h1 key="fullName"> {data.firstName} {data.secondName}</h1>
        }
       
        if (key === "secondName") return null;

        if (key === "to" && data.present === true ) {
          return <p key={key}> <span>{key}: </span>{type === "Education Experience" ?  "I currently study here" :
          "I currently work here"}</p>
          
        }

        if (key === "present") return null;

        return(
        
          <p key={key}><span>{key}</span>: {value}</p>
      
      )
       
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
    from: "",
    to: "",
    present: false

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
    from: "",
    to: "",
    present: false

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
      from: "",
      to: "",
      present: false
  
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
    from: "",
    to: "",
    present: false

  })
} 



  return (
    <>
     <div>
        <p>cv builder</p>
        <h1>Curriculum Vitae</h1>
        
      </div>
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
      {data && < Preview data={(data.personalInfo)}  />}
      {data && < Preview data={data.educationInfo} type="Education Experience" image={educationIcon} />}
      {data &&< Preview data={data.workInfo} type="Work Experience" image={workIcon}/>}
      </section>

    </div>
    </>
    )
}