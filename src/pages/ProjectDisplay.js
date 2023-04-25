import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import {} from '../helpers/ProjectList'
import GitHub from '@material-ui/icons/GitHub';
import "../styles/ProjectDisplay.css"
import { Button } from '@material-ui/core';


function ProjectDisplay() {
    const { id } = useParams();
    const project= ProjectList[id];
  return (<div className='project'>
    
    <h1>{project.name}</h1>
    <img src={project.image}></img>
    <p><b>Skills:</b> {project.skill}</p>
    
    <Link to={project.github} target="_blank"><GitHub/></Link>
    { project.deployed ? <button className="bttn" onClick={() => window.open(project.site)}>
                  Deployed Site
                </button> : <p></p>}
                { project.cert ? <button className="bttn" onClick={() => window.open(project.site)}>
                  View Cert
                </button> : <p></p>}
    
    </div>
  );
}

export default ProjectDisplay