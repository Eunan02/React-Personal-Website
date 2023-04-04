import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHub from "@material-ui/icons/GitHub"
import "../styles/Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <Link to="https://www.linkedin.com/in/eunan-d-7a6a411b1/" target="_blank"><LinkedInIcon/></Link>
        <Link to="https://github.com/Eunan02" target="_blank"><GitHub/></Link>  
        
        </div>
        <p>&copy; 2023 eudiamon.dev</p>
    </div>
  )
}

export default Footer;