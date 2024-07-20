import {motion} from "framer-motion"

const animateValues = (delay)=>({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})
function HomePage(){
    return <>
    <div id = "1" className="container home-page">
        <div className = "home-page-bio">
            <div className="bio-heading">
                <motion.h2
                variants={animateValues(0)}
                initial = "hidden"
                animate = "visible"

                >I'm 
                </motion.h2>
                <motion.h1
                variants={animateValues(0)}
                initial = "hidden"
                animate = "visible"
            >  Uday kiran</motion.h1>
            </div>
            <motion.div
            variants={animateValues(0.5)}
            initial = "hidden"
            animate = "visible"
            className="bio-content">
                A recent graduate from R.V.R & J.C College of Engineering
                with a strong foundation in full-stack development.
                My technical skills have been honed through practical experience, 
                including internships where I developed comprehensive web applications. 
                I am passionate about leveraging my technical expertise to drive innovation 
                and solve complex challenges in the tech industry.
            </motion.div>
            <motion.div 
            variants={animateValues(1)}
            initial = "hidden"
            animate = "visible"
            className="extra-info">
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/darla-uday-kiran-18a450239" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.facebook.com/yourfacebookprofile" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/yourinstagramprofile" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.youtube.com/yourchannel" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                </div>
                <a href="./resume1.pdf" download className="downloadcv">
                 Download CV</a>
                
            </motion.div>
        </div>
        <div
        className = "profile-photo"></div>
    </div>
    
    
    </>
}export default HomePage