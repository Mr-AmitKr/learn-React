import React from "react";
import { FaBookmark } from "react-icons/fa";

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img
            src="https://i.pinimg.com/736x/ff/a4/07/ffa407cb9ff38190e7ab88d15b9154d2.jpg"
            alt=""
          />
          <button>
            Save <FaBookmark size={16}  />
          </button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 days Ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
            <div className="tag">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div className="plan">
             <h3>$120/hr</h3>
              <p>Mumbai,India</p>
          </div> 
          <div className="action">
            <button>Apply now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;