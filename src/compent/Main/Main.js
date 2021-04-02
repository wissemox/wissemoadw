import React from 'react'
import './Main005.css'
const Main = () => {
    return (
    <div className="ALLMain">
        <div className="TextMenu"> 
            <div className="BinpactText">
            <p><span style={{color:"#BF0D1F"}}>B</span>inpact <span style={{opacity:"60%"}}> Web  </span> </p>
            <p className="Padding">Design</p>
            </div>
            <div className="TextDesinMain">
            <p>Some text dazd daz ddzadzd azdzad adaz dazd dazd<br/>
            dazdazd azdazd adazdaz azdazd azdazd adazd adza<br/>
            dzadad dazdaz adazdazd zdazd</p>
            </div>
            <button className="ButtoSeemore">See more</button>
            <div className="ButtonMve">
               <a href="#Service"><button></button></a> 
               <a href="#Product"> <button></button> </a>
                <button></button>
                <button></button>
            </div>
        </div>

        <div className="Image">
        <img src="ImageVectoriel.png"/>
        </div>
    </div>
    )
}

export default Main
