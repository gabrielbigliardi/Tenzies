import React from 'react'
import './App.css'

export default function Die(props) {
    console.log(props)
    return (
        <div className='die'>
            <h2 className='die--num'>{props.allNewDice}</h2>
        </div>
    )
}