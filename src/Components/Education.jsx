//import { useState } from "react"

export function EducationExperienceData({value, onChange, CreateInput, CreateButton, save, onClick}) {
    
    return (
        <section className="education-info">
            <form action="" onSubmit={(e) => e.preventDefault() }>
                <div className="education-experience">
                    <h1>Education</h1>
                </div>
                
                
                < CreateInput value={value.instituteName} type="text" name="instituteName" id="institute"  placeholder="Institution name" 
                onChange={onChange} text="Education #1"/>
                
                <div className="field-level-container">
                    <CreateInput value={value.field} type="text" name="field" id="field" placeholder="Field of study" onChange={onChange} />
                    <CreateInput value={value.level} type="text" name="level" id="level" placeholder="Level" onChange={onChange} />
                
                </div>
                <div className="from-to-container">
                    <CreateInput value={value.from} type="text" name="from" id="from" placeholder="From" onChange={onChange} />
                    <CreateInput value={value.to} type="text" name="to" id="to" placeholder="To" onChange={onChange} />

                </div>
                <CreateInput value={value.country} type="text" name="country"  id="countryOfStudy" placeholder="Country" onChange={onChange} />
               
                
                <div className="current-study-div">
                    <input value={value.present} type="checkbox"  id="currentStudy" name="present" onChange={onChange} />
                    <label htmlFor="currentStudy">I currently study here</label>
            
                </div>
                
                <div className="buttons">
                    < CreateButton onClick={save} />
                    < CreateButton text='Edit' onClick={onClick} className="editBtn"/>

                </div>
            </form>
            

        </section>
    )
}