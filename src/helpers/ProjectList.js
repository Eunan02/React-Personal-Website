import IBM1 from "../assets/IBM-DS-Pic.png"
import DL1 from "../assets/DL-ML.png" 
import PL1 from "../assets/PL-XG.png" 
import PL2 from "../assets/PL-DL.png" 
import FTB1 from "../assets/football-app.png"
import PL3 from "../assets/PL-ML.png" 
import { Link } from "react-router-dom"
  export const ProjectList = [
    {
        name: "IBM DATA SCIENCE",
        image: IBM1,
        skill:"Machine Learning, Python, SQL",
        github: "https://github.com/Eunan02/IBM-Data-science-Capstone-Project-",
        cert: true,
        site:"https://www.coursera.org/account/accomplishments/specialization/certificate/A2RQP5Y5YKZ5"
    },
    {
        name: "DeepLearning.AI Machine Learning Specialization",
        image: DL1,
        skill:"Machine Learning, Python, Statictics",
        github: "https://github.com/Eunan02/DeepLearningAIMlSpecialization",
        cert: true,
        site:"https://www.coursera.org/account/accomplishments/specialization/certificate/H5HYMMGA4B66"
    },
    {
        name: "Premier League Expected goals Analysis",
        image: PL1,
        skill:"Machine Learning, Python, SQL",
        github: "https://github.com/Eunan02/Premier-League-Oracle-Expected-goals-Machine-Learning"
    },
    {
        name: "Premier League Video Analysis Deep Learning",
        image: PL2,
        skill:"Machine Learning, Python, Deep Learning, SQL",
        github: "https://github.com/Eunan02/-Premier-League-Oracle-Video-Analysis-with-Deep-Learning"
    },
    {
        name: "Football Video App",
        image: FTB1,
        skill:"React, CSS ",
        github: "https://github.com/Eunan02/football-vids-app",
        deployed:true,
        site: "https://eunan-football-videos.netlify.app/"
    },
    {
        name: "Premier League Games Predicting Model",
        image: PL3,
        skill:"Machine Learning, Python",
        github: "https://github.com/Eunan02/Premier-league-Predicting-Model"
    },
]