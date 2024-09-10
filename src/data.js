import { startTransition } from "react";

export const data = {


    profileImage : "./assests/profile1.jpg",
    bio : `
        I am Uday Kiran, an enthusiastic 
        and driven recent graduate with a strong focus on 
        front-end technologies. I have developed a 
        solid foundation in JavaScript, React.js, and modern 
        web development practices. I am passionate about creating
        intuitive and responsive web applications and am eager 
        to apply my skills in real-world scenarios. I am excited to contribute to
        innovative solutions and continue growing in the tech field.`,
    resume : "./resume.pdf",
    displayName : "Uday kiran darla",
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/darla-uday-kiran-18a450239",
        github: "https://github.com/uday900",
        twitter: "https://twitter.com/your_twitter_handle",
        naukri: "https://www.naukri.com/mnjuser/profile?id=&altresid",
        instagram: "https://www.instagram.com/uday1709_?igsh=MTU1a2s4dWdlcWVmcQ==",
        facebook: "https://www.facebook.com/udaykiran.darla.3?mibextid=ZbWKwL",
        leetcode: "https://leetcode.com/u/uday080/"
    },
  
    projects : [
        {
            name: "Employee Management System",
            image: "./assests/projects/ems.png",
            points: [
                "Designed and implemented a comprehensive Employee Management System with a user-friendly interface using Java Swing and AWT.",
                "Developed the backend to handle CRUD (Create, Read, Update, Delete) operations with MySQL, ensuring efficient data management through secure JDBC connections.",
                "Implemented data validation and error handling to maintain data integrity and application stability."
            ],
            skills: ["Java", "Core Java", "Swing", "MySQL"]
        },
        {
            link: "https://udayquizapp.netlify.app/",
            name: "Quiz App",
            image: "./assests/projects/quizapp.webp",
            points: [
                "Developed an interactive quiz application using React and Vite, allowing users to take quizzes on various topics.",
                "Implemented dynamic question rendering and scoring system to provide real-time feedback to users.",
                "Integrated responsive design principles to ensure the application works seamlessly on both desktop and mobile devices.",
                "Utilized Bootstrap for consistent styling across the app, ensuring a polished and professional user interface.",
                "Incorporated features like timer countdowns, progress tracking, and randomized questions to enhance the quiz experience."
            ],
            skills: ["React.js", "Redux", "HTML", "CSS", "JavaScript", "Bootstrap"]
        },
        {
            link: "https://udayshopwithus.netlify.app/",
            name: "Ecommerce",
            image: "./assests/projects/ecommerce.avif",
            points: [
                "Developed a fully functional e-commerce platform using React, Vite, and Redux for state management.",
                "Provided a seamless shopping experience with features like product browsing, cart management, and user authentication.",
                "Implemented routing with React Router to enable smooth navigation between pages, including product listings, product details, and user account management."
            ],
            skills: ["React.js", "HTML", "CSS", "JavaScript", "Bootstrap", "Redux"]
        },
        {
            name: "Brain Tumor Classification",
            image: "./assests/projects/braintumorclassification.jpg",
            points: [
                "Developed and deployed a Machine Learning-based Brain Tumor Detection model for MRI images, distinguishing between different tumor types with 95% accuracy.",
                "Conducted on a dataset of 3064 images which contain three types of Brain Tumor (glioma, meningioma, pituitary)."
            ],
            skills: ["Python", "Machine Learning"]
        },
        {
            link: "https://udaytodoapp.netlify.app/",
            name: "ToDo App",
            image: "./assests/projects/todoapp.avif",
            points: [
                "Developed a responsive Todo application that allows users to create, read, update, and delete tasks.",
                "Implemented Redux for state management to handle task data efficiently.",
                "Ensured the application is fully responsive for both desktop and mobile devices, enhancing user experience across platforms.",
                "User-friendly interface for task management."
            ],
            skills: ["React.js", "Redux", "HTML", "CSS", "JavaScript"]
        }
    ],
    


    experience: [
        {
            duration: "Apr 2022 to Jun 2022",
            company_name: "Indian Servers",
            role: "Machine Learning Intern",
            points: [
                "Gained practical experience in Python modules and Machine Learning",
                "Developed a machine learning model for brain tumor classification using Python, achieving a 95% accuracy rate on a dataset of 3064 MRI images."
            ],
            skills: ["React", "Bootstrap", "API Integration"]
        },
        {
            duration: "Apr 2022 to Jun 2022",
            company_name: "IIDT Blackbucks",
            role: "Machine Learning Intern",
            points: [
                `Engaged in hands-on training in web development, focusing on front-end and back-end technologies`,
                `Collaborated with senior developers to implement best practices and enhance application functionality`,
            ],
            skills: ["HTML", "CSS", "JavaScript", "React.js"]
        }
    ],
    
    "skills": [
    {
        "name": "React.js",
        "logo": "./assests/reactlogo.webp"
    },
    {
        "name": "Java",
        "logo": "./assests/javalogo.png"
    },
    {
        "name": "Python",
        "logo": "./assests/pythonlogo.jpg"
    },
    {
        name: "C",
        logo: "./assests/clogo.jpg"
    },
    {
        "name": "JavaScript",
        "logo": "./assests/javascriptlogo.jpg"
    },
    {
        "name": "HTML",
        "logo": "./assests/htmllogo.png"
    },
    {
        "name": "CSS",
        "logo": "./assests/csslogo.png"
    },
    {
        "name": "SQL",
        "logo": "./assests/sqllogo.png"
    },
    {
        "name": "Excel",
        "logo": "./assests/excellogo.png"
    }
    ],



}
