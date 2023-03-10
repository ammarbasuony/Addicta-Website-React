import React from 'react'
import { Link } from 'react-router-dom';
import prev from '../../../assets/img/CaseStudy/foodpage/prev.png'
import next from '../../../assets/img/CaseStudy/foodpage/next.png'

const Navigation = ()=>
(
    <div className="navigation">
        <div className="img-container main">
        <Link to="#">
            <img src={prev} alt="" />
        <div className="prev animated-arrow">            
               <p>Previous project</p>
                <h2>El-Hrameen</h2>
                <span className="the-arrow -left">
                    <span className="shaft"></span>
                </span>
           </div>
           </Link>
        </div>
        <div className="img-container main">
        <Link to="#" className="animated-arrow">
            <img src={next} alt="" />
        <div className="next animated-arrow">            
               <p>Next project</p>
                <h2>ACCM</h2>
                <span className="the-arrow -right">
                    <span className="shaft"></span>
                </span>
           </div>
           </Link>
        </div>
            </div>
 


)
export default Navigation;

