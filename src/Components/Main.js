import React from 'react'
import ReactDOM from 'react-dom'
import grid from './grid.PNG'
export default function Hero(){
    return (
        <>
            <img src={grid} className="grid"></img>
            <h3 className="heading1">Online Experiences</h3>
            <p className="para1">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
        </>
    )
}