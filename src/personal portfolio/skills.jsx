// src/SkillsPage.js
import React from 'react';
import {motion} from "framer-motion"
import { data } from '../data';

const SkillsPage = () => {
  return <>
  <div className="container skills-page" id='3'>
        <motion.div
        whileInView={{opacity: 1, y: 0}}
        initial = {{opacity: 0, y: -100}}
        transition={{duration:0.9}}
        className="main-title">Technologies</motion.div>

        <div className="skill-container">
            { data.skills.map((skill)=>{
                return <>
                <div className="skill-block">
                    <img src={skill.logo} alt="skill" 
                    className="skill-logo" />
                    <div className="skill-title">
                        {skill.name}
                    </div>
                </div>
                </>
            })}
            
        </div>
        
        
  
  </div>
  </>
};

export default SkillsPage;
