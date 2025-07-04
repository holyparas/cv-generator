import { useState } from "react";

function Form({ exp, index, setWorkExp, onDelete }) {
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkExp((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [name]: value };
      return updated;
    });
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const errors = {
    job: !exp.job && touched.job,
    company: !exp.company && touched.company,
    desc: !exp.desc && touched.desc,
    startDate: !exp.startDate && touched.startDate,
    endDate: !exp.endDate && touched.endDate,
  };

  return (
    <form className="work-experience-form" autoComplete="off">
      <h2>Work Experience</h2>
      <div>
        <label htmlFor={`job-${index}`}>Job Role *</label>
        <input
          type="text"
          id={`job-${index}`}
          name="job"
          value={exp.job}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.job && (
          <span style={{ color: "#e74c3c", fontSize: "0.9em" }}>
            Required
          </span>
        )}
      </div>
      <div>
        <label htmlFor={`company-${index}`}>Company Name *</label>
        <input
          type="text"
          id={`company-${index}`}
          name="company"
          value={exp.company}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.company && (
          <span style={{ color: "#e74c3c", fontSize: "0.9em" }}>
            Required
          </span>
        )}
      </div>
      <div>
        <label htmlFor={`desc-${index}`}>Job Desc *</label>
        <input
          type="text"
          id={`desc-${index}`}
          name="desc"
          value={exp.desc}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.desc && (
          <span style={{ color: "#e74c3c", fontSize: "0.9em" }}>
            Required
          </span>
        )}
      </div>
      <div>
        <label htmlFor={`start-date-${index}`}>Start Date *</label>
        <input
          type="date"
          id={`start-date-${index}`}
          name="startDate"
          value={exp.startDate}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.startDate && (
          <span style={{ color: "#e74c3c", fontSize: "0.9em" }}>
            Required
          </span>
        )}
      </div>
      <div>
        <label htmlFor={`end-date-${index}`}>End Date *</label>
        <input
          type="date"
          id={`end-date-${index}`}
          name="endDate"
          value={exp.endDate}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.endDate && (
          <span style={{ color: "#e74c3c", fontSize: "0.9em" }}>
            Required
          </span>
        )}
      </div>
      <button
        type="button"
        className="btn btn-danger"
        style={{ marginTop: "10px" }}
        onClick={() => onDelete(index)}
        aria-label="Delete work experience"
      >
        Delete
      </button>
    </form>
  );
}

export default function WorkExp({ workExp, setWorkExp }) {
  const addWorkExp = () => {
    setWorkExp([
      ...workExp,
      { job: "", company: "", desc: "", startDate: "", endDate: "" },
    ]);
  };

  const deleteWorkExp = (idx) => {
    setWorkExp(workExp.filter((_, i) => i !== idx));
  };

  return (
    <div className="wrapper">
      <h1>Work Experience</h1>
      <button className="btn" type="button" onClick={addWorkExp}>
        Add Work Experience
      </button>
      {workExp.length === 0 && (
        <div style={{ color: "#888", margin: "1rem 0" }}>
          No work experience added yet.
        </div>
      )}
      {workExp.map((exp, index) => (
        <Form
          key={index}
          exp={exp}
          index={index}
          setWorkExp={setWorkExp}
          onDelete={deleteWorkExp}
        />
      ))}
    </div>
  );
}