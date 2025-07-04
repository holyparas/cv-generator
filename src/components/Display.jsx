import React from "react";

export default function Display({ personalDetails, profile, techSkills, projects, workExp, onPrint, onReset }) {
  return (
    <div className="cv-display" style={{ background: "#f5f5f5", padding: "2rem", borderRadius: "10px", maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.5rem"}}>
        <h1 style={{textAlign:"center", fontSize:"2.5rem", margin:"0"}}>Automated CV</h1>
        <div>
          <button className="btn btn-secondary" type="button" onClick={onPrint} style={{marginRight:"0.5rem"}}>Print / PDF</button>
          <button className="btn btn-danger" type="button" onClick={onReset}>Reset</button>
        </div>
      </div>
      <h1 style={{ borderBottom: "2px solid #003366", marginBottom:"0.5rem" }}>{personalDetails.name}</h1>
      <p style={{marginTop:"0.2rem"}}>
        <strong>Phone:</strong> {personalDetails.phoneNo} <br />
        <strong>LinkedIn:</strong> <a href={personalDetails.linkedUrl} target="_blank" rel="noopener noreferrer">{personalDetails.linkedUrl}</a> <br />
        <strong>GitHub:</strong> <a href={personalDetails.gitUrl} target="_blank" rel="noopener noreferrer">{personalDetails.gitUrl}</a>
      </p>
      <section>
        <h2>Profile</h2>
        <p>{profile}</p>
      </section>
      <section>
        <h2>Technical Skills</h2>
        <p>
          <strong>Languages:</strong> {techSkills.lang}
          <br />
          <strong>Cloud & Tools:</strong> {techSkills.tools}
        </p>
      </section>
      <section>
        <h2>Technical Projects</h2>
        {projects.length === 0 && <p style={{color:"#888"}}>No projects added.</p>}
        {projects.map((proj, idx) => (
          <div key={idx} style={{ marginBottom: "1rem", paddingBottom:"0.5rem", borderBottom:"1px solid #e0e0e0" }}>
            <strong>{proj.name}</strong>
            <div>{proj.desc}</div>
            <div>
              {proj.url && (
                <a href={proj.url} target="_blank" rel="noopener noreferrer">
                  {proj.url}
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
      <section>
        <h2>Work Experience</h2>
        {workExp.length === 0 && <p style={{color:"#888"}}>No work experience added.</p>}
        {workExp.map((exp, idx) => (
          <div key={idx} style={{ marginBottom: "1rem", paddingBottom:"0.5rem", borderBottom:"1px solid #e0e0e0" }}>
            <strong>{exp.job}</strong> at <strong>{exp.company}</strong>
            <div>{exp.desc}</div>
            <div>
              {exp.startDate} - {exp.endDate}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}