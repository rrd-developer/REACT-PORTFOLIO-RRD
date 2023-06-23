import "./WorkStyle.css";


import Work from "./Work.js"
import WorkData from "./WorkData.js"


import React from 'react'


const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">PROJECTS</h1>
      <div className="project-container">
        {WorkData.map((val,ind) =>{
            return(
                <Work
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.title}
                view={val.view}
                />
            )
        })}
        
      </div>

    </div>
  )
}

export default WorkCard