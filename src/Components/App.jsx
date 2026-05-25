import { PersonalInfo } from "./PersonalInfo";
import { WorkExperience } from "./WorkExerience";
import { EducationExperience } from "./Education";
import "./styles.css"
export default function App() {
    return (
        <div className="form-preview-container">
             <form action="">
                < PersonalInfo />
                < WorkExperience />
                < EducationExperience />
            </form>
            <section className="preview"></section>
        </div>
    )
}