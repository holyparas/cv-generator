import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import Profile from "./components/Profile";
import TechExp from "./components/TechExp";
import WorkExp from "./components/WorkExp";
import Display from "./components/Display";

const initialPersonalDetails = {
  name: "Paras Gathani",
  phoneNo: "0451 693 330",
  linkedUrl: "https://www.linkedin.com/in/parasgathani/",
  gitUrl: "https://github.com/holyparas"
};
const initialProfile = "Looking for an entry level front-end developer role!";
const initialTechSkills = { lang: "HTML, CSS, JS, Java, React, Python", tools: "Git, AWS" };

export default function App(){
  const [personalDetails, setPersonalDetails] = useState(initialPersonalDetails);
  const [profile, setProfile] = useState(initialProfile);
  const [techSkills, setTechSkills] = useState(initialTechSkills);
  const [projects, setProjects] = useState([]);
  const [workExp, setWorkExp] = useState([]);

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    if(window.confirm("Are you sure you want to reset all fields?")) {
      setPersonalDetails(initialPersonalDetails);
      setProfile(initialProfile);
      setTechSkills(initialTechSkills);
      setProjects([]);
      setWorkExp([]);
    }
  };

  return(
    <div className="page-wrapper" style={{marginBottom:"300px"}}>
      <div>
        <PersonalDetails details={personalDetails} change={setPersonalDetails} />
        <Profile value={profile} change={setProfile} />
        <TechExp skills={techSkills} skillsChange={setTechSkills} projects={projects} setProjects={setProjects}></TechExp>
        <WorkExp workExp={workExp} setWorkExp={setWorkExp}></WorkExp>
      </div>
      <div className="display-section">
        <Display
          personalDetails={personalDetails}
          profile={profile}
          techSkills={techSkills}
          projects={projects}
          workExp={workExp}
          onPrint={handlePrint}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}