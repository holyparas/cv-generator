import { useState } from "react";

export default function PersonalDetails({details,change}){
  const [show, setShow] = useState(true);
  const [touched, setTouched] = useState({});

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const errors = {
    name: !details.name && touched.name,
    phoneNo: !details.phoneNo && touched.phoneNo,
    linkedUrl: !details.linkedUrl && touched.linkedUrl,
    gitUrl: !details.gitUrl && touched.gitUrl,
  };

  return (
    <div className="wrapper">
      <h1>Personal Details</h1>
      <button id="toggle" onClick={() => setShow(!show)}>Hide/Show</button>
      <div className="toggle" style={{display:show? "block" : "none"}}>
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Test Name"
          value={details.name}
          onChange={(e) => change({...details, name:e.target.value})}
          onBlur={handleBlur}
          required
        />
        {errors.name && <span style={{color:"#e74c3c", fontSize:"0.9em"}}>Required</span>}
        <br />
        <label htmlFor="phoneNo">Phone Number *</label>
        <input
          type="tel"
          id="phoneNo"
          name="phoneNo"
          placeholder="012 345 6789"
          value={details.phoneNo}
          onChange={(e) => change({...details, phoneNo:e.target.value})}
          onBlur={handleBlur}
          required
        />
        {errors.phoneNo && <span style={{color:"#e74c3c", fontSize:"0.9em"}}>Required</span>}
        <br />
        <label htmlFor="linkedin">LinkedIn Url *</label>
        <input
          type="url"
          id="linkedin"
          name="linkedUrl"
          placeholder="https://www.linkedin.com/in/parasgathani/"
          value={details.linkedUrl}
          onChange={(e) => change({...details, linkedUrl:e.target.value})}
          onBlur={handleBlur}
          required
        />
        {errors.linkedUrl && <span style={{color:"#e74c3c", fontSize:"0.9em"}}>Required</span>}
        <br />
        <label htmlFor="github">Github Url *</label>
        <input
          type="url"
          id="github"
          name="gitUrl"
          placeholder="http://github.com/holyparas"
          value={details.gitUrl}
          onChange={(e) => change({...details, gitUrl:e.target.value})}
          onBlur={handleBlur}
          required
        />
        {errors.gitUrl && <span style={{color:"#e74c3c", fontSize:"0.9em"}}>Required</span>}
      </div>
    </div>
  );
}