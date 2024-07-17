import { useState } from "react"
import HomePage from "./home section"
import "./index.css"
import "./index_media.css"
// import Sidebar from "./sidebar"
import AboutPage from "./about"
import SkillsPage from "./skills"
import ExperiencePage from "./experience"
import ProjectsPage from "./projects"
import ContactPage from "./contact"
const PersonalPortfolio = ()=>{

const [menuSymbol, setmenuSybol] = useState(false)

return <>

    <nav>
        <ul>
            <li>Darla Udaya kiran</li>
            <li className="hide-on-mobile"><a href="#1">Home</a></li>
            <li className="hide-on-mobile"><a href="#2">About</a></li>
            <li className="hide-on-mobile"><a href="#3">Technologies</a></li>
            <li className="hide-on-mobile"><a href="#4">Experience</a></li>
            <li className="hide-on-mobile"><a href="#5">Projects</a></li>
            <li className="hide-on-mobile"><a href="#6">Contact</a></li>
            <li className="menu-symbol" 
                onClick={()=>setmenuSybol(true)}>
                    <i class="fa-solid fa-bars"></i>
            </li>
        </ul>
        
        {menuSymbol && <>
            <ul className="sidebar">    
        <li className="close-symbol"
            onClick={()=>setmenuSybol(false)}><i class="fa-solid fa-xmark"></i></li>
            <li onClick={()=>setmenuSybol(false)}><a href="#1">Home</a></li>
            <li onClick={()=>setmenuSybol(false)}><a href="#2">About</a></li>
            <li onClick={()=>setmenuSybol(false)}><a href="#3">Technologies</a></li>
            <li onClick={()=>setmenuSybol(false)}><a href="#4">Experience</a></li>
            <li onClick={()=>setmenuSybol(false)}><a href="#5">Projects</a></li>
            <li onClick={()=>setmenuSybol(false)}><a href="#6">Contact</a></li>
        </ul></>}
        
        


    </nav>
    <HomePage/>
    <AboutPage/>
    <SkillsPage/>
    <ExperiencePage/>
    <ProjectsPage/>
    <ContactPage/>
    <div className="copyrights">
                <p>	&#169; copyrights portfolio Darla uday kiran 2024</p>
    </div>

</>
}
export default PersonalPortfolio