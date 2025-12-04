import React from "react";
import { ImpactStyle } from "./impact-style";
const ImpactComponent = () => {
    return (
        <ImpactStyle>
            <div className="heading">
                Impact at a 
                <span className="red"> Glance</span>
            </div>
            <div className="parent"> 
                <div className="flex1">
                    <div className="child1">
                        <span className="details">Colleges</span>
                        <br />
                        <span className="numbers">100+</span>
                    </div>
                    <div className="child2">
                        <span className="details">Students</span>
                        <br />
                        <span className="numbers">100000+</span>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="flex2">
                    <div className="child3">
                        <span className="details">Study Material</span>
                        <br />
                        <span className="number">1000+</span>
                    </div>
                    <div className="child4">
                        <span className="details">Professional Trainers</span>
                        <br />
                        <span className="number">150</span>
                    </div>
                </div>
            </div>
        </ImpactStyle>
    )
};
export default ImpactComponent;