import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GitHub from "@material-ui/icons/GitHub"
import { Link } from 'react-router-dom'
import "../styles/Home.css"
function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Eunan</h2>
        <div
         className='prompt'><p>A computer Science student who loves developing and data science, with a passion for learning and creating </p>
        <Link to="https://www.linkedin.com/in/eunan-d-7a6a411b1/" target="_blank"><LinkedInIcon/></Link>
        <Link to='mailto:eunand02@outlook.com' target="_blank"><EmailIcon/></Link>
        <Link to="https://github.com/Eunan02" target="_blank"><GitHub/></Link>
        <br></br>
        <button className="btn" onClick={() => window.open("https://drive.google.com/file/d/1rNs-YYxGGRWBtz4XEXxCHV1lmCxfrN7T/view?usp=share_link")}>
                  VIEW MY CV
                </button>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Data Science</h2>
            <span>Machine learning, analysing on datasets, using my own algorthims to analyse preset datasets</span>
            <h2>Front-end developing</h2>
            <span>React Development</span>
            <h2>back-end developing</h2>
            <span>Java/Springboot Development</span>
            <h2>Programming Languages</h2>
            <span>Python, R, Java, Javscript(React), CSS, html, c++, sql</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home