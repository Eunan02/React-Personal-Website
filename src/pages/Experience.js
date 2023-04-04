import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from '@material-ui/icons/Work'


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
      <VerticalTimelineElement className='vertical-timeline-element--work' date='June 2023-August 2023' iconStyle={{background:"#e9d35b",color:"#fff"}}
        icon={<WorkIcon/>}
        >
          <h2 className='vertical-timeline-element-title'>Barclays, Knutsford Chesire</h2>
          <h3>Intern Developer Analyst</h3>
          <p>Incoming Summer intern</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--work' date='July 2022- June 2023' iconStyle={{background:"#e9d35b",color:"#fff"}}
        icon={<WorkIcon/>}
        >
          <h2 className='vertical-timeline-element-title'>Oracle, Belfast</h2>
          <h3>Junior Member of Technical Staff</h3>
          <p>Worked in both CxUnity Platform team and commerce team on front end and backend on internal signn off tool, on openapi generator issues using java and writing junit tests </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date='2020-2024' iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<SchoolIcon/>}
        >
          <h2 className='vertical-timeline-element-title'>Queens University Belfast</h2>
          <h3>Bsc Computer Science with industrial Experience</h3>
          <p><h4>First Year Results</h4>
          <ul>
            <li>Architecture and Networks: 80%</li>
            <li>Databases: 90%</li>
            <li>Fundementals of Maths for Computer Science: 90%</li>
            <li>Programming: 79%</li>
            <li>Web Technologies: 74%</li>
            <li>Software Design Principles</li>
          </ul>
          <h4> Second Year Results</h4>
          <ul>
            <li>Software Engineering and Systems: 80%</li>
            <li>Data Structures and Algorithms: 91%</li>
            <li>Theory of Computation: 84%</li>
            <li>Introduction to AI: 90%</li>
            <li>Professional and Transferable skills: 59%</li>
          </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience