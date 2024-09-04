import { motion } from "framer-motion";
import { data } from "../data";

function ExperiencePage() {
    return (
        <>
            <div className="experience-container container" id="4">
            
            <motion.div
        whileInView={{opacity: 1, y: 0}}
        initial = {{opacity: 0, y: -100}}
        transition={{duration:0.9}}
        className="main-title">Experience</motion.div>

                <div className="experience-page">

                    { data.experience.map((item)=>{
                        return <>
                        <div className="experience-block">
                            <div className="duration"> { item.duration}</div>
                            <div className="experience-content">
                                <h3>{ item.company_name}</h3>
                                <h4>{ item.role}</h4>
                                <div className="content-matter">
                                    <ul>
                                    { item.points.map((point)=>{
                                        return <>
                                        <li>
                                            {point}
                                        </li>
                                        </>
                                    })}
                                    </ul>
                                </div>
                                <div className="content-skills">
                                    { item.skills.map((point)=>{
                                        return <span className="span">
                                            { point}
                                        </span>
                                    })}
                                </div>
                            </div>
                        </div>
                        </>
                    })}
                    
                </div>
            </div>
        </>
    );
}

export default ExperiencePage;
