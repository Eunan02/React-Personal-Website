import React from 'react'
import {Link, useParams} from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList';
import {} from '../helpers/ProjectList'
import GitHub from '@material-ui/icons/GitHub';
import "../styles/ProjectDisplay.css"


function ProjectDisplay() {
    const { id } = useParams();
    const project= ProjectList[id];
  return (<div className='project'>
    <h1>{project.name}</h1>
    <img src={project.image}></img>
    <p><b>Skills:</b> {project.skill}</p>
    <Link to={project.github} target="_blank"><GitHub/></Link>

    </div>
  );
}

export default ProjectDisplay