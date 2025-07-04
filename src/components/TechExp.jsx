import { useState } from "react";

function Form({ project, index, setProjects }) {
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjects((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [name]: value };
      return updated;
    });
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleDelete = () => {
    setProjects((prev) => prev.filter((_, i) => i !== index));
  };

  const errors = {
    name: !project.name && touched.name,
    desc: !project.desc && touched.desc,
  };

  return (
    <form className="work-experience-form" autoComplete="off">
      <h2>Technical Project</h2>
      <div>
        <label>Project Name *</label>
        <input
          type="text"
          name="name"
          value={project.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.name && <span style={{color:"#e74c3c", fontSize:"0.9em"}}>Required</span>}
      </div>
      <div>
        <label>Project Description *</label>
        <input
          type="text"
          name="desc"
          value={project.desc}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.desc && <span style={{color:"#e74c3c", fontSize:"0.9em"}}>Required</span>}
      </div>
      <div>
        <label>Github URL</label>
        <input
          type="text"
          name="url"
          value={project.url}
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        className="btn btn-danger"
        style={{marginTop: "10px"}}
        onClick={handleDelete}
        aria-label="Delete project"
      >
        Delete
      </button>
    </form>
  );
}

export default function TechExp({ skills, skillsChange, projects, setProjects }) {
  const [show, setShow] = useState(true);

  const addProject = () => {
    setProjects([...projects, { name: "", desc: "", url: "" }]);
  };

  return (
    <div className="wrapper">
      <h1>Technical Skills & Projects</h1>
      <button id="toggle" onClick={() => setShow(!show)}>Hide/Show</button>
      <div className="toggle" style={{ display: show ? "block" : "none" }}>
        <label htmlFor="programming">Programming Languages</label>
        <input
          type="text"
          id="programming"
          placeholder="Java, JS, HTML, CSS, React"
          value={skills.lang}
          onChange={(e) => skillsChange({ ...skills, lang: e.target.value })}
        />
        <br />
        <label htmlFor="cloud">Cloud & Other Tools</label>
        <input
          type="text"
          id="cloud"
          value={skills.tools}
          onChange={(e) => skillsChange({ ...skills, tools: e.target.value })}
        />
        <br />
        <button className="btn" type="button" onClick={addProject}>
          Add Project
        </button>
        {projects.length === 0 && (
          <div style={{color:"#888", margin:"1rem 0"}}>No projects added yet.</div>
        )}
        {projects.map((project, i) => (
          <Form
            key={i}
            project={project}
            index={i}
            setProjects={setProjects}
          />
        ))}
      </div>
    </div>
  );
}