// src/SkillsPage.js
import React from 'react';
import {motion} from "framer-motion"

const SkillsPage = () => {
  return <>
  <div className="container skills-page" id='3'>
       

        <motion.div
        whileInView={{opacity: 1, y: 0}}
        initial = {{opacity: 0, y: -100}}
        transition={{duration:0.9}}
        className="main-title">Technologies</motion.div>
        <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial = {{opacity: 0, x: -100}}
        transition={{duration:0.9}}
        className="skill-container">
            <div className="skill-block">
                    <div className="skill-logo logo-java"></div>
                <div className="skill-title">
                        Java    
                </div>
            </div>
        <div className="skill-block">
            <div className="skill-logo logo-python">
            </div>
            <div className="skill-title">
                    Python
            </div>
        </div>
        <div className="skill-block">
            <div className="skill-logo logo-c">
            </div>
            <div className="skill-title">
                    C
            </div>
        </div>
        <div className="skill-block">
            <div className="skill-logo logo-html">
            </div>
            <div className="skill-title">
                    Html
            </div>
        </div>
        <div className="skill-block">
            <div className="skill-logo logo-css">
            </div>
            <div className="skill-title">
                    CSS
            </div>
        </div>
        <div className="skill-block">
            <div className="skill-logo logo-javascript">
            </div>
            <div className="skill-title">
                    JavaScript
            </div>
        </div>
        <div className="skill-block">
            <div className="skill-logo logo-react">
            </div>
            <div className="skill-title">
                    React.js
            </div>
        </div>
        <div className="skill-block">
            <div className="skill-logo logo-sql">
            </div>
            <div className="skill-title">
                    SQL
            </div>
        </div>
        <div className="skill-block">
            <div className="skill-logo logo-excel">
            </div>
            <div className="skill-title">
                    Excel
            </div>
        </div>
        </motion.div>
        
        
  
  </div>
  </>
};

export default SkillsPage;
