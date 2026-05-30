
export function PersonalInfoData({value, onChange, CreateInput, CreateButton, save, onClick}) {
 

  
    return (
        
      <section className="personal-info">
        <form action=""  onSubmit={(e) => e.preventDefault()}>
          <h1>Personal Information</h1>
          <div className="names">
              
            <CreateInput value={value.firstName} id="firstName" placeholder="John" name="firstName" 
            onChange={onChange} className="first-name" text="First name" />
            
            <CreateInput value={value.secondName} id="secondName" placeholder="Doh" name="secondName" 
            onChange={onChange} className="second-name" text="Second name"/>
          </div>

          <div className="contacts">
            <CreateInput type="tel" value={value.phoneNumber} id="phoneNumber" placeholder="070211111" name="phoneNumber" 
            className="telephone" onChange={onChange} text="Phone number"/>
          

          <div className="email">
            
            <CreateInput  value={value.email} type="email" id="email" placeholder="johndoh@gmail.com" name="email" 
            className="email" text="Email" onChange={onChange} />

          </div>

          </div>


          <div className="country">
        
            <CreateInput type="text"  value={value.country} id="country" name="country" text="Country" onChange={onChange} />
          </div>

          <div className="buttons">
          < CreateButton onClick={save} />
          < CreateButton text='Edit' onClick={onClick} />

          </div>

         
        </form>
      </section>
    
    )
}