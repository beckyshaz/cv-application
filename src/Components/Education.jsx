export function EducationExperience() {
    return (
        <section>
            <div className="education-experience">
                <h1>Education</h1>
            </div>
            <label htmlFor="experience1">education #1</label>
            <input type="text" name="school" id="education1"  placeholder="Institution name"/>
            <input type="text" name="course" id="education1" placeholder="Field of study" />
            <input type="text" name="level" id="education1" placeholder="Level"/>
            <input type="text" name="country"  id="education1" placeholder="Country"/>
            <input type="text" name="City" id="education1" placeholder="City" />
            <input type="text" name="from" id="education1" placeholder="From"/>
            <input type="text" name="present" id="education1" placeholder="To"/>
            <div>
            
            <input type="checkbox"  id="checkbox education1" name="present" />
            <label htmlFor="checkbox">I currently study here </label>
            </div>
            <button type="submit">Save</button>

        </section>
    )
}