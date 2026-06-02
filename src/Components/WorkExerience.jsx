export function WorkExperienceData({value, onChange, CreateInput, CreateButton, save, onClick}) {
    return (
        <section className="work-info">
           <form action=""  onSubmit={(e) => e.preventDefault()}>
                <div className="work-experience">
                        <h1>Work experience</h1>
                    </div>

                <CreateInput value={value.companyName} type="text" name="companyName" id="companyName"  placeholder="Company name" 
                onChange={onChange} text="work experience #1" />
            
                <div className="job-title-responsibilities">
                    <CreateInput value={value.jobTitle} type="text" name="jobTitle" id="jobTitle" placeholder="Job title" onChange={onChange} />
                    
                    <CreateInput value={value.responsibilities} type="text" name="responsibilities" id="responsibilities" 
                    placeholder="Responsibilities" onChange={onChange} />   
                </div>
                <div className="from-to-container">
                    <CreateInput value={value.from} type="text" name="from" id="workExperienceFrom" placeholder="From" onChange={onChange} />
                    <CreateInput  value={value.to} type="text" name="to" id="workExperiencTo" placeholder="To" onChange={onChange} />
                </div>
                <CreateInput value={value.country} type="text" name="country"  id="location" placeholder="Country" onChange={onChange} />
                <div className="current-job-div">
                
                <input value={value.present} type="checkbox"  id="currentJob" name="present" onChange={onChange} />
                <label htmlFor="currentJob">I currently work here </label>
                
                </div>
                
                <div className="buttons">
                    < CreateButton onClick={save} />
                    < CreateButton text='Edit' onClick={onClick} className="editBtn" />

                </div>

           </form>
        </section>
    )
}