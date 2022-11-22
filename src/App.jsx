import React from 'react'
import Die from './Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import './App.css'

// function Test(props) {
//     return(
//         <div>
//             <h1>{props}</h1>
//         </div>
//     )
// }

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    
    React.useEffect(() => {
        const allAreHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if ( allAreHeld && allSameValue ) {
            setTenzies(prevTenz => !prevTenz) // or true
            console.log('You Win!')
        }
    }, [dice])

    function allNewDice() {
        const newDice = []
        for(let i = 0; i < 10; i++) {
            newDice.push(generateNewDice())
        }
        return newDice
    }

    function generateNewDice() {
        return {
            value: Math.ceil(Math.random() * 6), 
            isHeld: false,
            id: nanoid()
        }
    }

    function holdDice(id) {
        setDice(prevDice => prevDice.map(die => {
            return die.id === id ? {...die, isHeld: !die.isHeld} : die
        }))
    }

    function rollDice(){
        if (tenzies) {
            setTenzies(false)
            setDice(allNewDice())
        } else {
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? die : generateNewDice()
            }))
        }    
    }

    const dieElements = dice.map(die => <Die 
                                                key={die.id} 
                                                value={die.value} 
                                                isHeld={die.isHeld}
                                                holdDice={() => holdDice(die.id)}
                                        />)


    return (
        <main className='tenzies'>
            { tenzies && <Confetti /> }
            <h1 className='tenzies--title'>Tenzies</h1>
            <h3 className='tenzies--info'>Roll until all dice are the same. 
                Click each die to freeze it at its 
                current value between rolls.</h3>
            <div className='tenzies--dies'>
                {dieElements}    
            </div>
            <button className='tenzies--button' onClick={rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
        </main>
        
    )
}