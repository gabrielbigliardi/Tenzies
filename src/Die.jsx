import React from 'react'
import './App.css'

export default function Die(props) {
    const style = {
        // backgroundColor: "#59E391" 
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div className='die' style={style} onClick={props.holdDice}>
            <h2 className='die--num'>{props.value}</h2>
        </div>
    )
}