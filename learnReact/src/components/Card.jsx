import React from 'react'
import { FaBookmark } from "react-icons/fa";

const Card = (props) => {
    console.log(props);
  return (
       <div className="card">
        <div className="top">
          <img
            src={props.brandLogo}
            alt=""
          />
          <button>
            Save <FaBookmark size={16}  />
          </button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
            <div className="tag">
            <h4>{props.Tag1}</h4>
            <h4>{props.Tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div className="plan">
             <h3>{props.Rate}</h3>
              <p>{props.location}</p>
          </div> 
          <div className="action">
            <button>Apply now</button>
          </div>
        </div>
      </div>
  )
}

export default Card
