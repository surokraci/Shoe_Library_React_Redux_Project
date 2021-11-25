import { connect } from "react-redux";
import { incrementCounter } from "../actions/CounterActions";
import { decrementCounter } from "../actions/CounterActions";
import { startCountdown } from "../actions/CounterActions";
import { stopCountdown } from "../actions/CounterActions";
import React, { useState } from "react";

const Counter = ({cnt, incrementCounter, decrementCounter, startCountdown, stopCountdown}, props) =>{

    const [showResults, setShowResults] = React.useState(false)

    const handleIncrease = () => {
        incrementCounter();
        
    }
    const handleDecrease = () => {
        decrementCounter();
        
    }
    const handleCountdown = () => {
        startCountdown();
        setShowResults(true)
        
    }
    const handleStopCountdown = () => {
        stopCountdown();
        setShowResults(false)
        
    }

    return (
        <div>
            <h1>
            {cnt.cnt}
            </h1>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
            <div>
                { showResults ? <button onClick={handleStopCountdown}>Zatrzymaj</button> : <button onClick={handleCountdown}>Odliczaj</button>}
                
                
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return{
        cnt: state.cnt
    }
}

const mapDispatchToProps = {
    incrementCounter,
    decrementCounter,
    startCountdown,
    stopCountdown
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)