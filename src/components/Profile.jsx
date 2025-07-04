import { useState } from "react";
export default function Profile({value, change}){
  const [show, setShow] = useState(true);
  const [touched, setTouched] = useState(false);

  return(
    <div className="wrapper">
      <h1>Profile</h1>
      <button id="toggle" onClick={() => setShow(!show)}>Hide/Show</button>
      <div className="toggle" style={{display:show? "block" : "none"}}>
        <label htmlFor="desc">Description for the kind of job you're looking for *</label>
        <br />
        <textarea
          id="desc"
          value={value}
          onChange={(e) => change(e.target.value)}
          onBlur={() => setTouched(true)}
          required
        />
        {touched && !value && <span style={{color:"#e74c3c", fontSize:"0.9em"}}>Required</span>}
      </div>
    </div>
  );
}