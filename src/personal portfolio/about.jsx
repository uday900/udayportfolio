import React from 'react';
import { useState } from "react";
import Awards from "./about section/strengths";
import Certifications from "./about section/certification_catagory";
import Education from "./about section/education_catagory";
import Others from "./about section/others_catagory";
import Strengths from "./about section/strengths";
import { motion } from "framer-motion";

const AboutPage = () => {
    const [active, setActive] = useState("Education");
    return (
        <>
            <div className="container about-container" id="2">

                <div className="about-left">
                    <div className="about-photo"></div>
                </div>

                
                 <div
                    className="about-content"
                >
                    <h2>About me</h2>
                    <div className="about-content-matter">
                        I’m Uday Kiran, a recent Computer Science graduate with a passion for front-end development and a strong commitment to creating impactful web experiences. Throughout my studies, I’ve focused on mastering technologies like JavaScript and React.js, which I’ve applied in various hands-on projects. From developing dynamic web applications to refining user interfaces
                    </div>
                    <div className="about-catagories">
                        <div className="about-catagories-list">
                            <button className="b1" onClick={() => setActive("Education")}>Education</button>
                            <button className="b2" onClick={() => setActive("Certifications")}>Certifications</button>
                            <button className="b3" onClick={() => setActive("Strengths")}>Strengths</button>
                            <button className="b4" onClick={() => setActive("Others")}>Others</button>
                        </div>
                        {active == "Education" && <Education />}
                        {active == "Certifications" && <Certifications />}
                        {active == "Strengths" && <Strengths />}
                        {active == "Others" && <Others />}
                    </div>
                </div> 
            </div>
        </>
    );
}

export default AboutPage;