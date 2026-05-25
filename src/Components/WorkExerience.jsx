export function WorkExperience() {
    return (
        <section>
            <div className="work-experience">
                <h1>Work experience</h1>
            </div>
            <label htmlFor="experience1">work experience #1</label>
            <input type="text" name="company" id="experience1"  placeholder="Company name"/>
            <input type="text" name="job" id="experience1" placeholder="Job title" />
            <input type="text" name="country"  id="experience1" placeholder="Country"/>
            <input type="text" name="responsibilities" id="experience1" placeholder="Responsibilities" />
            <input type="text" name="from" id="experience1" placeholder="From"/>
            <input type="text" name="present" id="experience1" placeholder="To"/>
            <div>
            
            <input type="checkbox"  id="checkbox experience1" name="present" />
            <label htmlFor="checkbox">I currently work here </label>
            <button type="submit">Save</button>
            </div>
             
        </section>
    )
}