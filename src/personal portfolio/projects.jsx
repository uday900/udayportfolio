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
      
        
        {/* 
        <div className="experience-block">
          <div className="projects-image ems"></div>
          <div className="projects-content">
            <h3>Employee Management System</h3>
            <div className="content-matter">
              <ul>
                <li>
                  Designed and implemented a comprehensive Employee Management
                  System with a user-friendly interface using Java Swing and AWT
                </li>
                <li>
                  Developed the backend to handle CRUD (Create, Read, Update and
                  Delete) operations with MySQL, ensuring efficient data
                  management through secure JDBC connections
                </li>
                <li>
                  Implemented data validation and error handling to maintain
                  data integrity and application stability
                </li>
              </ul>
            </div>
            <div className="content-skills">
              <div className="span">Java</div>
              <div className="span">Core Java</div>
              <div className="span">Swing component</div>
              <div className="span">MySql</div>
            </div>
          </div>
        </div>

        <div className="experience-block">
          <div className="projects-image btc"></div>
          <div className="projects-content">
            <h3>Brain Tumor Classification</h3>
            <div className="content-matter">
              <ul>
                <li>
                  Developed and deployed a Machine learning based Brain Tumor
                  Detection model for MRI images, distinguishing between
                  different tumor types with 95% accuracy
                </li>
                <li>
                  Conducted on a dataset of 3064 images which contain three
                  types of Brain Tumor (glioma, meningioma, pituitary)
                </li>
              </ul>
            </div>
            <div className="content-skills">
              <div className="span">Python</div>
              <div className="span">Machine Learning</div>
            </div>
          </div>
        </div>

        <div className="experience-block">
          <div
          
            className="projects-image quizapp"
          ></div>
          <div className="projects-content">
            <h3>Quiz App</h3>
            <div className="content-matter">
            <ul>
        <li>
          Developed an interactive quiz application using React and Vite, allowing users to take quizzes on various topics.
        </li>
        <li>
          Implemented dynamic question rendering and scoring system to provide real-time feedback to users.
        </li>
        <li>
          Integrated responsive design principles to ensure the application works seamlessly on both desktop and mobile devices.
        </li>
        <li>
          Utilized Bootstrap for consistent styling across the app, ensuring a polished and professional user interface.
        </li>
        <li>
          Incorporated features like timer countdowns, progress tracking, and randomized questions to enhance the quiz experience.
        </li>
      </ul>
            </div>
            <div className="content-skills">
              <div className="span">React.js</div>
              <div className="span">Redux</div>
              <div className="span">HTML</div>
              <div className="span">CSS</div>
              <div className="span">Javascript</div>
              <div className="span">Boostrap</div>

            </div>
            <div className="project-link">
              project link{" "}
              <a
                target="_blank"
                href="https://udayquizapp.netlify.app/"
              >
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </div>


        <div className="experience-block">
          <div
            className="projects-image todolists"
          ></div>
          <div className="projects-content">
            <h3>ToDo App</h3>
            <div className="content-matter">
              <ul>
                <li>
                  Developed a responsive Todo application that allows users to
                  create, read, update, and delete tasks. Implemented Redux for
                  state management to handle task data efficiently. Ensured the
                  application is fully responsive for both desktop and mobile
                  devices, enhancing user experience across platforms
                </li>
                <li>User-friendly interface for task management</li>
                <li>Responsive design for seamless use on PC and mobile</li>
                <li>State management with Redux for optimal performance</li>
              </ul>
            </div>
            <div className="content-skills">
              <div className="span">React.js</div>
              <div className="span">Redux</div>
              <div className="span">HTML</div>
              <div className="span">CSS</div>
              <div className="span">Javascript</div>
            </div>
            <div className="project-link">
              project link{" "}
              <a
                target="_blank"
                href="https://udaytodoapp.netlify.app/"
              >
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="experience-block">
          <div
            
            className="projects-image cc"
          ></div>
          <div className="projects-content">
            <h3>Currency Converter</h3>
            <div className="content-matter content-matter-para">
              Developed a Currency Converter application that allows users to
              convert between various currencies in real-time. Leveraged
              external APIs for up-to-date exchange rates, ensuring accurate
              conversions. The app features a clean and intuitive design,
              making it user-friendly across devices
            </div>
            <div className="content-skills">
              <div className="span">Html</div>
              <div className="span">CSS</div>
              <div className="span">Javascript</div>
              <div className="span">API Integration</div>
            </div>
          </div>
        </div>

        <div className="experience-block">
          <div
         
            className="projects-image caluclator"
          ></div>
          <div className="projects-content">
            <h2>Ecommerce</h2>
            <div className="content-matter content-matter-para">
              Developed a fully functional e-commerce platform using React,
              Vite, and Redux for state management, providing a seamless
              shopping experience with features like product browsing, cart
              management, and user authentication.
              <br />
              Implemented routing with React Router to enable smooth navigation
              between pages, including product listings, product details, and
              user account management.
            </div>
            <div className="content-skills">
              <div className="span">React.js</div>
              <div className="span">Html</div>
              <div className="span">CSS</div>
              <div className="span">JavaScript</div>
              <div className="span">Boostrap</div>
              <div className="span">Redux</div>
            </div>
            <div className="project-link">
              project link{" "}
              <a
                target="_blank"
                href="https://udayshopwithus.netlify.app/"
              >
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ProjectsPage;
