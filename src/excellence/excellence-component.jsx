import React from "react";
import {ExcellenceStyle} from "./excellence-style";
const ExcellenceComponent=()=>{
    return (
        <ExcellenceStyle>
            <div className="first">
                <h1 className="heading">A Symbol of Excellence in Placement Training</h1>
                <p className="sub_heading">
                Aptitude Guru Hem was born from the aspiration to create a learning environment that inspires greatness. Our founder, driven 
                by personal experiences and a desire to make a difference, established the company with a mission to empower students with the 
                right skills and mindset for success.
                </p>
            </div>
            <div className="second">
                <div className="box1">
                <h1 className="sub_heading1">Our Vision</h1>
                <p className="para1">Our vision is to empower individuals from diverse backgrounds to become accomplished professionals.
                     At Aptitude Guru Hem, we believe that knowledge has the power to transcend boundaries.

                </p>
                </div>
                <div className="divider"></div>
                <div className="box2">
                <h1 className="sub_heading2">Our Mission</h1>
                <p className="para2">Our mission is to revolutionize education by providing comprehensive training in aptitude, coding, and web/mobile development.
                     We foster a culture of inclusivity and personal growth.</p>
                </div>
            </div>
        </ExcellenceStyle>
    );
};
export default ExcellenceComponent;