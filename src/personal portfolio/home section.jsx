import {motion} from "framer-motion"
import { useEffect, useState } from "react"
import axios from 'axios'
import { data } from "../data"
function HomePage(){
    return <>
        <div id = "1" className="container home-page">
            <div className = "home-page-bio">
                <div className="bio-heading">
                    <h2>I'm </h2>
                    <h1> { data.displayName }</h1>
                </div>
                <div className="bio-content">
                    { data.bio }
                </div>
                <div 
                className="extra-info">
                    <div className="social-icons">

                        <a href= { data.socialLinks.linkedin} target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        <a href= { data.socialLinks.facebook } target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href= { data.socialLinks.instagram } target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href= { data.socialLinks.github } target="_blank"><i class="fa-brands fa-square-github"></i></a>
                    </div>
                    <a href={data.resume} download className="downloadcv">
                        Download CV
                    </a>
                    
                </div>
            </div>

            <img src= { data.profileImage}
            className="profile-photo" 
            alt="profile-img" />
            </div>
        </> 
}export default HomePage