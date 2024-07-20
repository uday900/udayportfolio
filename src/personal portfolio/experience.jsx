import { motion } from "framer-motion";

function ExperiencePage() {
    return (
        <>
            <div className="experience-container container" id="4">
            <motion.div
        whileInView={{opacity: 1, y: 0}}
        initial = {{opacity: 0, y: -100}}
        transition={{duration:0.9}}
        className="main-title">Experience</motion.div>
                {/* <div 
                    className="main-title"
                >
                    Experience
                </div> */}

                <div className="experience-page">

                    <div className="experience-block">
                        
                        <div 
                            className="duration"
                        >
                            Apr 2022 to Jun 2022
                        </div>

                        <div
                            className="experience-content"
                        >
                            <h3>Indian Servers</h3>
                            <h4>Machine Learning Intern</h4>
                            <div className="content-matter">
                                <ul>
                                    <li>Gained practical experience in Python modules and Machine Learning</li>
                                    <li>Developed a machine learning model for brain tumor classification using Python frameworks, aimed at improving diagnostic accuracy</li>
                                </ul>
                            </div>
                            <div className="content-skills">
                                <div className="span">Python</div>
                                <div className="span">Machine Learning</div>
                                <div className="span">Numpy</div>
                            </div>
                        </div>
                    </div>

                    <div className="experience-block">
                        
                        <div 
                            className="duration"
                        >
                            Apr 2022 to Jun 2022
                        </div>
                        <div 
                            className="experience-content"
                        >
                            <h3>IIDT Blackbucks</h3>
                            <h4>Web Developer Intern</h4>
                            <div className="content-matter">
                                <ul>
                                    <li>Engaged in hands-on training in web development, focusing on front-end and back-end technologies</li>
                                    <li>Collaborated with senior developers to implement best practices and enhance application functionality</li>
                                </ul>
                            </div>
                            <div className="content-skills">
                                <div className="span">HTML</div>
                                <div className="span">CSS</div>
                                <div className="span">JavaScript</div>
                                <div className="span">React.js</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExperiencePage;
