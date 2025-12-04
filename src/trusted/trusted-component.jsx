import React from "react";
import {TrustedStyle} from "./trusted-style";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
 const TrustedComponent=()=>{
    return (
       <TrustedStyle>
            <h1>Trusted By</h1>
      <div className="parent">
        <div className="child">
          <FontAwesomeIcon icon={faBuildingColumns} />
          <span className="numbers">100+</span>
          <br></br>
          <span className="details">Colleges</span>
        </div>
        <div className="child">
          <span className="numbers">150</span>
          <br></br>
          <span className="details">Professional Trainers</span>
        </div>
        <div className="child">
          <span className="numbers">1000+</span>
          <br></br>
          <span>Study Materials</span>
        </div>
        <div className="child">
          <span className="numbers"> 100000+</span>
          <br></br>
          <span className="details">Students</span>
        </div>
      </div>
       </TrustedStyle>
    );
 };
 export default TrustedComponent;