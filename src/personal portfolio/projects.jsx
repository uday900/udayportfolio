import {motion} from "framer-motion"

function ProjectsPage(){

    return <>
    <div id = "5" className="projects-container container">
    <motion.div
        whileInView={{opacity: 1, y: 0}}
        initial = {{opacity: 0, y: -100}}
        transition={{duration:0.9}}
        className="main-title">Projects</motion.div>
        {/* <div 
            className="main-title">Projects
        </div> */}

        <div className="experience-block">
                <div
                className="projects-image ems">
                </div>
            <div 
            className="projects-content">
                <h3>Employee Management System</h3>
                <div className="content-matter">
                    <ul>
                        <li>Designed and implemented a comprehensive Employee Management System with a user-friendly interface 
                        using Java Swing and AWT</li>
                        <li>Developed the backend to handle CRUD (Create, Read, Update and Delete) operations with MySQL, ensuring 
                        efficient data management through secure JDBC connections</li>
                        <li>Implemented data validation and error handling to maintain 
                            data integrity and application stability</li>
                    </ul>
                </div>
                <div className="content-skills">
                    <div class="span">Java</div>
                    <div class="span">Core Java</div>
                    <div class="span">Swing component</div>
                    <div class="span">MySql</div>

                </div>
        </div>
        </div>

        <div className="experience-block">
        <div
                className="projects-image btc"></div>            
                
                <div 
           
            className="projects-content">
                <h3>Brain Tumor Classification</h3>
                <div className="content-matter">
                    <ul>
                        <li>Developed and deployed a Machine learning based Brain Tumor Detection model for MRI images, 
                        distinguishing between different tumor types with 95% accuracy</li>
                        <li>Conducted on a dataset of 3064 images which contain three types of Brain Tumor (glioma, meningioma, 
                            pituitary)</li>
                    </ul>
                </div>
                <div className="content-skills">
                <div class="span">Python</div>
                <div class="span">Machine Learning</div>
   
                </div>
        </div>
        </div>

        <div className="experience-block">
        <div
                whileInView = {{opacity:1, x: 0}}
                initial = {{x:-100, opacity:0}}
                transition = {{duration: 1}}
                className="projects-image todolists"></div>
         
         <div 
          
            className="projects-content">
                <h3>ToDo App</h3>
                <div className="content-matter">
                    <ul>
                        <li>Developed a responsive Todo application that allows users to create, read, update, and delete tasks. Implemented Redux for state management to handle task data efficiently. Ensured the application is fully responsive for both desktop and mobile devices, enhancing user experience across platforms

                        </li>
                        <li>User-friendly interface for task management
                        </li>
                        <li>Responsive design for seamless use on PC and mobile</li>
                        <li>State management with Redux for optimal performance</li>
                    
                    </ul>
                </div>
                <div className="content-skills">
                <div class="span">React.js</div>
                <div class="span">Redux</div>
                <div class="span">HTML</div>
                <div class="span">CSS</div>
                <div class="span">Javascript</div>

                </div>
                <div className="project-link">
                    project link <a target="_blank" href="https://maketodolists-udaykiran.netlify.app/"><i class="fa-solid fa-link"></i> </a>
                </div>
        </div >
        </div>
        <div className="experience-block">
        <div
                whileInView = {{opacity:1, x: 0}}
                initial = {{x:-100, opacity:0}}
                transition = {{duration: 1}}
                className="projects-image cc"></div>
            
           
            <div 
           
            className="projects-content">
                <h3>Currency Converter</h3>
                <div className="content-matter content-matter-para">
                Developed a Currency Converter application that allows users to convert between various currencies in real-time. Leveraged external APIs for up-to-date exchange rates, ensuring accurate conversions. The app features a clean and intuitive design, making it user-friendly across devices
                </div>
                <div className="content-skills">
                    <div class="span">Html</div>
                    <div class="span">CSS</div>
                    <div class="span">Javascript</div>
                    <div class="span">API Integration</div>

                </div>
        </div>
        </div>
        <div className="experience-block">
        <div
                whileInView = {{opacity:1, x: 0}}
                initial = {{x:-100, opacity:0}}
                transition = {{duration: 1}}
                className="projects-image caluclator"></div>
            
            <div 
           
            className="projects-content">
                <h2>Caluclator</h2>
                <div className="content-matter content-matter-para">
                Developed a dynamic Calculator application that performs
                 basic arithmetic operations. Designed with a sleek user
                  interface and responsive layout, the app offers an intuitive
                   experience for users on both desktop and mobile devices.
                </div>
                <div className="content-skills">
                <div class="span">React.js</div>
<div class="span">Html</div>
<div class="span">CSS</div>
<div class="span">JavaScript</div>


                </div>
        </div>
        </div>

    </div>
    
    </>
}export default ProjectsPage;
// BEFORE