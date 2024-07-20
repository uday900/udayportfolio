import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
    const [user_name, SetUser_name] = useState("");
    const [user_email, SetUser_email] = useState("");
    const [user_msg, SetUser_msg] = useState("");
    
    const [message, setMessage] = useState('');
    const [showmsg, setShowmsg] = useState(true);

    const handleClick = (e) => {
        SetUser_email("");
        SetUser_name("");
        SetUser_msg("");
        setMessage("message sent successfully");
        setShowmsg(true);
        setTimeout(() => {
          setShowmsg(false);
        }, 2000);
        
        const formEle = document.querySelector("form");
        const formData = new FormData(formEle);

        fetch("https://script.google.com/macros/s/AKfycby4EFd4oQx1LU-BP4cRbe7LL4k8uTAYWiPOeqxAerTpJFHTG_2Qmq3-RFrX71BspsCf4w/exec", {
            method: "POST",
            body: formData,
        });
        e.preventDefault();
    };

    return (
        <>
            <div className="contact-page" id = "6">
                <div className="contact-container container">

                    <motion.div
                    // <div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.9 }}
                        className="main-title"
                    >
                        Get in Touch
                    </motion.div>
                    {/* </div> */}

                    {/* <motion.h3 */}
                    <div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ x: -100, opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="also-see-my-profiles"
                    >
                        Also see my profiles in...
                    </div>
                    {/* </motion.h3> */}
                    
                    {/* <motion.div */}
                    <div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ x: -100, opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="other-profile-links skill-container"
                    >
                        <a href="https://www.linkedin.com/in/darla-uday-kiran-18a450239" target="_blank">
                            <div className="skill-block">
                                <div className="skill-logo logo-linkedin"></div>
                                <div className="skill-title">LinkedIn</div>
                            </div>
                        </a>

                        <a href="https://leetcode.com/u/uday080/" target="_blank">
                            <div className="skill-block">
                                <div className="skill-logo logo-leetcode"></div>
                                <div className="skill-title">Leetcode</div>
                            </div>
                        </a>

                        <a href="https://github.com/uday900" target="_blank">
                            <div className="skill-block">
                                <div className="skill-logo logo-github"></div>
                                <div className="skill-title">GitHub</div>
                            </div>
                        </a>

                        <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="_blank">
                            <div className="skill-block">
                                <div className="skill-logo logo-naukri"></div>
                                <div className="skill-title">Naukri</div>
                            </div>
                        </a>
                    {/* </motion.div> */}
                    </div>

                    <div className="contact-area">
                        {/* <motion.div */}
                        <div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="contact-left"
                        >
                            <h2>Contact me</h2>
                            <div className="-info">
                                <i className="fa-solid fa-envelope"></i>
                                <span className="information">udaykirandarla2002@gmail.com</span>
                            </div>
                            <div className="-info">
                                <i className="fa-solid fa-phone"></i>
                                <span className="information">+91 6301436515</span>
                            </div>
                            <div className="-info">
                                <span className="information">2-28, Paluru <br /> Kandukuru Mandal <br /> Prakasam <br /> Andhra Pradesh - 523105</span>
                            </div>
                        {/* </motion.div> */}
                        </div>
                        
                        {/* <motion.div */}
                        <div 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="contact-right"
                        >
                            <form className="form" onSubmit={(e) => handleClick(e)}>
                                <input
                                    type="text"
                                    name="Name"
                                    placeholder="Enter your name"
                                    value={user_name}
                                    onChange={(e) => SetUser_name(e.target.value)}
                                    required
                                />
                                <input
                                    type="email"
                                    name="Email"
                                    placeholder="Enter your email"
                                    value={user_email}
                                    onChange={(e) => SetUser_email(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    name="Message"
                                    placeholder="Enter message"
                                    value={user_msg}
                                    onChange={(e) => SetUser_msg(e.target.value)}
                                    required
                                />
                                <input type="submit" value="Send Message" className="downloadcv" />
                            </form>
                            {showmsg && <p className="msg-bottom">{message}</p>}
                        {/* </motion.div> */}
                        </div>
                    </div>
                </div>

                <div className="copyrights">
                    <p>© copyrights portfolio Darla uday kiran 2024</p>
                </div>
            </div>
        </>
    );
}

export default ContactPage;
