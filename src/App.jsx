import React from 'react'
import Die from './Die'
import './App.css'

export default function App() {

    function allNewDice() {
        const randomArray = []
        for(i = 0; i < 10; i++) {
            randomArray[i].push(Math.floor(Math.random() * (6 - 1) ) + 1)
        }
        return randomArray
        // console.log(randomArray)
    }

    return (
        <main className='tenzies'>
            <h1 className='tenzies--title'>Tenzies</h1>
            <h3 className='tenzies--info'>Roll until all dice are the same. 
                Click each die to freeze it at its 
                current value between rolls.</h3>
            <div className='tenzies--dies'>
                <Die value={allNewDice}/>
                <h1>{allNewDice}</h1>
                {/* <h1>{randomNumber}</h1> */}
            </div>
            <button className='tenzies--button'>Roll</button>
        </main>
    )
}