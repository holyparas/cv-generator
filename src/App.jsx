import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import Profile from "./components/Profile";
import TechExp from "./components/TechExp";
import WorkExp from "./components/WorkExp";
import Display from "./components/Display";

const initialPersonalDetails = {
  name: "Paras Gathani",
  phoneNo: "+66 99 196 4400",
  linkedUrl: "https://www.linkedin.com/in/parasgathani/",
  gitUrl: "https://github.com/holyparas",
};
const initialProfile = "Looking for an entry level front-end developer role!";
const initialTechSkills = {
  lang: "HTML, CSS, JS, Java, React, Python",
  tools: "Git, AWS",
};

export default function App() {
  const [personalDetails, setPersonalDetails] = useState(
    initialPersonalDetails
  );
  const [profile, setProfile] = useState(initialProfile);
  const [techSkills, setTechSkills] = useState(initialTechSkills);
  const [projects, setProjects] = useState([
    {
      name: "CV Generator",
      desc: "A React app to create and customize CVs, with sections for personal info, education, and experience.",
      url: "https://parascvgenerator.netlify.app/",
    },
    {
      name: "Memory Game",
      desc: "A card-matching memory game built with React, tracking moves and completion time.",
      url: "https://memorygameparas.netlify.app/",
    },
    {
      name: "FakeStore",
      desc: "An e-commerce storefront built with React, fetching products from the FakeStore API with cart functionality.",
      url: "https://fakestoreparas.netlify.app/",
    },
  ]); //tech projects
  const [workExp, setWorkExp] = useState([
    {
      job: "Front-End Developer",
      company: "BrightWave Solutions",
      desc: "Developed and maintained responsive web applications using React, HTML, CSS, and JavaScript. Collaborated with UI/UX designers to improve usability and performance.",
      startDate: "Jan 2023",
      endDate: "Dec 2023",
    },
    {
      job: "Junior Web Developer",
      company: "TechNova Digital",
      desc: "Assisted in building client websites and dashboards. Integrated REST APIs and implemented reusable React components.",
      startDate: "Aug 2021",
      endDate: "Dec 2022",
    },
    {
      job: "IT Support Specialist",
      company: "DataSphere Systems",
      desc: "Provided technical assistance to internal teams, resolved software issues, and trained staff on new applications.",
      startDate: "Feb 2020",
      endDate: "Jul 2021",
    },
  ]);

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all fields?")) {
      // setPersonalDetails(initialPersonalDetails);
      // setProfile(initialProfile);
      // setTechSkills(initialTechSkills);
      setPersonalDetails({ name: "", phoneNo: "", linkedUrl: "", gitUrl: "" });
      setProfile("");
      setTechSkills({ lang: "", tools: "" });
      setProjects([]);
      setWorkExp([]);
    }
  };

  return (
    <div className="page-wrapper" style={{ marginBottom: "300px" }}>
      <div>
        <PersonalDetails
          details={personalDetails}
          change={setPersonalDetails}
        />
        <Profile value={profile} change={setProfile} />
        <TechExp
          skills={techSkills}
          skillsChange={setTechSkills}
          projects={projects}
          setProjects={setProjects}
        ></TechExp>
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
