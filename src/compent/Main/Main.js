import React ,{useState} from 'react'

import './Main005.css'
const Main = () => {
    const [Text05 , setText05]=useState(false)
    return (
    <div className="ALLMain">
        <div className="TextMenu"> 
            <div className="BinpactText">
            <p><span style={{color:"#BF0D1F"}}>B</span>inpact <span style={{opacity:"60%"}}> Web  </span> </p>
            <p className="Padding">Design</p>
            </div>
            <div className="TextDeignDiplayNone">
            <div className="TextDesinMain">
            <p>Some text dazd daz ddzadzd azdzad adaz dazd dazd<br/>d
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
        </div>

        <div className="Image">
            
      
        <img src="ImageVectoriel.png"/>
      
        </div>
        {console.log(Text05)}
        <div className="ButtonImageResposive">
            <button onClick={()=>setText05(!Text05)} >Click me</button>
            </div>
            {Text05&& 
        <>
        <div className="Print02">
            <p>Some text dazd daz ddzadzd azdzad adaz dazd dazdd
            dazdazd azdazd adazdaz azdazd azdazd adazd adza
            dzadad dazdaz adazdazd zdazd</p>
            </div>
            
                </>
        }

    </div>
    )
}

export default Main
