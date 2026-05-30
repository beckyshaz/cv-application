//import { useState } from "react"

export function EducationExperienceData({value, onChange, CreateInput, CreateButton, save, onClick}) {
    
    return (
        <section className="education-experience-section">
            <form action="" onSubmit={(e) => e.preventDefault() }>
                <div className="education-experience">
                    <h1>Education</h1>
                </div>
                
                
                < CreateInput value={value.instituteName} type="text" name="instituteName" id="institute"  placeholder="Institution name" 
                onChange={onChange} text="Education #1"/>
                
                <CreateInput value={value.field} type="text" name="field" id="field" placeholder="Field of study" onChange={onChange} />
                <CreateInput value={value.level} type="text" name="level" id="level" placeholder="Level" onChange={onChange} />
                <CreateInput value={value.country} type="text" name="country"  id="countryOfStudy" placeholder="Country" onChange={onChange} />
               
                <CreateInput value={value.from} type="text" name="from" id="from" placeholder="From" onChange={onChange} />
                <CreateInput value={value.to} type="text" name="to" id="to" placeholder="To" onChange={onChange} />
                
                <div className="current-study-div">
                    
                    <CreateInput value={value.present} type="checkbox"  id="currentStudy" name="present" onChange={onChange} />
                    <label htmlFor="currentStudy">I currently study here</label>
                </div>
                
                <div className="buttons">
                    < CreateButton onClick={save} />
                    < CreateButton text='Edit' onClick={onClick} />

                </div>
            </form>
            

        </section>
    )
}