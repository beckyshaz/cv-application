export function PersonalInfo() {
    return (
        
      <section class="personal-info">
        <h1>Personal Information</h1>
        <div className="first-name">
          <label htmlFor="first-name">First name</label>
          <input type="text"  id="first-name" placeholder="John" name="firstName" required/>
        </div>

        <div className="second-name">
          <label htmlFor="second-name">Second name</label>
          <input type="text"  id="second-name" placeholder="Doh" name="secondName" required/>
        </div>

        <div className="phone-number">
          <label htmlFor="phone-number">Phone number</label>
          <input type="tel" id="phone-number" placeholder="070211111" name="telephone" required/>
        </div>

        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="johndoh@gmail.com" name="mail" required/>

        </div>

        <div className="birth-date">
          <label htmlFor="birthDate">Date of birth</label>
          <input type="date" id="birthDate" name="birthDate" required />
        </div>

        <div className="nationality">
          <label htmlFor="nationality">Nationality</label>
          <input type="text" id="nationality" name="nationality" required />
        </div>

        <div className="address">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address"  placeholder="street, number" />
        </div>

        <div className="postal">
          <label htmlFor="postal">Postal</label>
          <input type="text" id="postal" name="postal" />
        </div>


        <div className="country">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" required/>
        </div>

        <div className="city">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" />
        </div>

        <div className="profile">
          <label htmlFor="profile">Profile</label>
          <textarea name="profile" id="profile"></textarea>
        </div>
        <button type="submit">Save</button>
      </section>
    
    )
}