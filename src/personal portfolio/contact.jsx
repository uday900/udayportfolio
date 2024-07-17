import { useEffect, useState } from "react";

const ContactPage = () => {
    const [user_name, SetUser_name] = useState("")
    const [user_email, SetUser_email] = useState("")
    const [user_msg, SetUser_msg] = useState("")
    
      const [message, setMessage] = useState('');
      const [showmsg, setShowmsg] = useState(true)

      const handleClick = () => {
        SetUser_email("")
        SetUser_name("")
        SetUser_msg("")
        setMessage("message sent succesfully")
        setShowmsg(true);

        setTimeout(() => {
          setShowmsg(false);
        }, 2000);
      };
    return (
        <>
            <div className="contact-container container" id="6">
                <div className="main-title">Get in Touch</div>

                <h3 className="also-see-my-profiles">Also see my profiles in...</h3>
                <div className="other-profile-links skill-container">
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

                </div>
                <div className="contact-area">
                    <div className="contact-left">
                        <h2>Contact me</h2>
                        <div className="email-info">
                            <i className="fa-solid fa-envelope"></i>
                            <span className="information">udaykirandarla2002@gmail.com</span>
                        </div>
                        <div className="contact-info">
                            <i className="fa-solid fa-phone"></i>
                            <span className="information">+91 6301436515</span>
                        </div>

                    </div>
                    
                    <div className="contact-right">
                        <form action="">
                            <input type="text" 
                                name="user_name"
                                placeholder="enter your name"
                                value={user_name} 
                                onChange={(e)=>SetUser_name(e.target.value)}
                                className="user-name" required/>
                            <input type="email" 
                                placeholder="enter your email" 
                                 className="user-mail" 
                                 name="user_email"
                                value={user_email} 
                                onChange={(e)=>SetUser_email(e.target.value)}
                            />
                            <textarea className="user-message" placeholder="enter you message"
                                value={user_msg} 
                                name="user_msg"
                                onChange={(e)=>SetUser_msg(e.target.value)}
                            required></textarea>
                            <input type="button" value="Send Message" 
                                className="downloadcv"
                            onClick={handleClick} />
                        </form>
                        {showmsg && <p className="msg-bottom">{message}</p>}
                    </div>
                </div>

            </div>
            
        </>
    );
}

export default ContactPage;
