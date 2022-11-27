import React from "react";
import databiz from '../../assets/images/client-databiz.svg';
import audiophile from '../../assets/images/client-audiophile.svg';
import meet from '../../assets/images/client-meet.svg';
import maker from '../../assets/images/client-maker.svg';
import hero1 from '../../assets/images/image-hero-desktop.png';
import hero2 from '../../assets/images/image-hero-mobile.png';
import './intro.css';

export default function Intro(props){
    return(
        <div className="intro-screen">
            <div className="intro-pre">
                <img src={hero2} alt="hero" />
            </div>
            <div className="intro-first">
                <div className="intro-text">
                    <h1>Make remote work</h1>
                    <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar</p>
                    <button>Learn More</button>
                </div>
                
                <div className="companies">
                    <img src={databiz} alt="databiz"/>
                    <img src={audiophile} alt="audiophile"/>
                    <img src={meet} alt="meet"/>
                    <img src={maker} alt="marker"/>
                </div>
            </div>
            <div className="intro-second">
                <img src={hero1} alt="hero" />
            </div>
        </div>
    )
}