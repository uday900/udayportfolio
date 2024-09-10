import { motion } from "framer-motion";
import { data } from "../data";

function ProjectsPage() {
  return (
    <>
      <div id="5" className="projects-container container">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.9 }}
          className="main-title"
        >
          Projects
        </motion.div>
        
          { data.projects.map((project)=>{
            return <>
            <div className="experience-block">
              <img src={project.image} alt="img" className="projects-image" />
              <div className="projects-content">
                <h3> {project.name} </h3>
                <div className="content-matter">
                  <ul>
                    { project.points.map((point)=>{
                      return <li> { point}</li>
                    })}
                  </ul>
                </div>
                <div className="content-skills">
                  { project.skills.map((skill)=>{
                      return <span className="span">
                          { skill}
                      </span>
                  })}
              </div>
              { project.link && <>
              <div className="project-link">
              project link{" "}
              <a
                target="_blank"
                href={project.link}>
              <i className="fa-solid fa-link"></i>
              </a>
              </div>
              </>}
              
              
              </div>
              </div>
            </>
          })}

      </div>
    </>
  );
}

export default ProjectsPage;
