import React from 'react'
import Fade from 'react-reveal/Fade';
import Layer0 from "../../../../assets/img/CaseStudy/foodpage/Layer0.png"
import Layer1 from "../../../../assets/img/CaseStudy/foodpage/Layer1.png"

const Application = (props) => {


    var detectLinks = /(?:(?:https?|http):\/\/|\b(?:[a-z\d]+\.))(?:(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))?\))+(?:\((?:[^\s()<>]+|(?:\(?:[^\s()<>]+\)))?\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))?/ig;
    if (props.meta) {
        let links = props.meta.match(detectLinks),
        j = 0; // re is a matching regular expression
        let parts = props.meta.split(detectLinks) // re is a matching regular expression
        for (let i = 0; i < parts.length; i += 1) {
            if (parts[i] === "") {
                parts[i] = <a key={'link' + i} href={links[j]}>{links[j]}</a>
                j++;
            }
        }
    
        var meta = parts;
        // console.log(meta);
    }

    return (
        <Fade bottom cascade>
            <div className="section">
                <div className="application">
                    <div className="activity">
                        <div className="container">
                            <div className="row">
                                <div className={props.Classlayout}>
                                    <h2>{props.title}</h2>
                                    <p>{props.text}</p>
                                    <span>{meta}</span>
                                    <div>
                                        {props.stores.google_play ? <a target="_blank" rel="noopener noreferrer" href={props.stores.google_play}><img src={Layer0} alt="" /></a> : ''}
                                        {props.stores.app_store ? <a target="_blank" rel="noopener noreferrer" href={props.stores.app_store}><img src={Layer1} alt="" /></a> : ''}
                                    </div>
                                </div>
                                <div className={props.ClassimageContainer}>
                                    {props.image ? <img src={require(`../../../../assets/img/CaseStudy/${props.image}`)} alt="" /> : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hr"></div>
        </Fade>
    );
}
export default Application;

