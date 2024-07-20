import { useState } from "react";
import HomePage from "./home section";
import "./index.css";
import "./index_media.css";
// import Sidebar from "./sidebar";
import AboutPage from "./about";
import SkillsPage from "./skills";
import ExperiencePage from "./experience";
import ProjectsPage from "./projects";
import ContactPage from "./contact";

const PersonalPortfolio = () => {
    const [menuSymbol, setMenuSymbol] = useState(false);

    return (
        <>
            <nav>
                <ul>
                    <li>Darla Udaya Kiran</li>
                    <li className="hide-on-mobile">
                        <a href="#1">Home</a>
                    </li>
                    <li className="hide-on-mobile">
                        <a href="#2">About</a>
                    </li>
                    <li className="hide-on-mobile">
                        <a href="#3">Technologies</a>
                    </li>
                    <li className="hide-on-mobile">
                        <a href="#4">Experience</a>
                    </li>
                    <li className="hide-on-mobile">
                        <a href="#5">Projects</a>
                    </li>
                    <li className="hide-on-mobile">
                        <a href="#6">Contact</a>
                    </li>
                    <li
                        className="menu-symbol"
                        onClick={() => setMenuSymbol(true)}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </li>
                </ul>

                {menuSymbol && (
                    <ul className="sidebar">
                        <li
                            className="close-symbol"
                            onClick={() => setMenuSymbol(false)}
                        >
                            <i className="fa-solid fa-xmark close-btn"></i>
                        </li>
                        <li onClick={() => setMenuSymbol(false)}>
                            <a href="#1">Home</a>
                        </li>
                        <li onClick={() => setMenuSymbol(false)}>
                            <a href="#2">About</a>
                        </li>
                        <li onClick={() => setMenuSymbol(false)}>
                            <a href="#3">Technologies</a>
                        </li>
                        <li onClick={() => setMenuSymbol(false)}>
                            <a href="#4">Experience</a>
                        </li>
                        <li onClick={() => setMenuSymbol(false)}>
                            <a href="#5">Projects</a>
                        </li>
                        <li onClick={() => setMenuSymbol(false)}>
                            <a href="#6">Contact</a>
                        </li>
                    </ul>
                )}
            </nav>
            <HomePage />
            <AboutPage />
            <SkillsPage />
            <ExperiencePage />
            <ProjectsPage />
            <ContactPage />
        </>
    );
};

export default PersonalPortfolio;
