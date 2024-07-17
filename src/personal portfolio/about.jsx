import React from 'react';
import { useState } from "react"
import Awards from "./about section/strengths"
import Certifications from "./about section/certification_catagory"
import Education from "./about section/education_catagory"
import Others from "./about section/others_catagory"
import Strengths from "./about section/strengths"

const AboutPage = () => {
    const [active, setActive] = useState("Education")
  return <>
  <div className="container about-container" id='2'>
    
    <div className="about-left">
      <div className="about-photo">

      </div>

    </div>
    <div className="about-content">
            <h2>About me</h2>
            <div className="about-content-matter">
            Seeking an opportunity with my professional ability in terms of Technical and Analytical skills in the field of computers 
            and looking for long-term growth and success in reputed organization.
            </div>
            <div className="about-catagories">
                <div className="about-catagories-list">
                    <button className = "b1" onClick={()=>setActive("Education")}>Education</button>
                    <button className = "b2" onClick={()=>setActive("Certifications")} >Certifications</button>
                    <button className = "b3" onClick={()=>setActive("Strengths")}>Strengths</button>
                    <button className = "b4" onClick={()=>setActive("Others")}>Others</button>
                </div>
                {active=="Education"&& <Education/>}
                {active=="Certifications"&& <Certifications/>}
                {active=="Strengths" && <Strengths/> }
                {active=="Others" && <Others/> }
                 
            </div>
    </div>
  </div>
  </>
}

export default AboutPage;
