import { connect } from "react-redux";
import { incrementCounter } from "../actions/CounterActions";
import { decrementCounter } from "../actions/CounterActions";
import { startCountdown } from "../actions/CounterActions";
import { stopCountdown } from "../actions/CounterActions";

const Counter = ({cnt, incrementCounter, decrementCounter, startCountdown, stopCountdown}, props) =>{

    const handleIncrease = () => {
        incrementCounter();
        
    }
    const handleDecrease = () => {
        decrementCounter();
        
    }
    const handleCountdown = () => {
        startCountdown();
        
    }
    const handleStopCountdown = () => {
        stopCountdown();
        
    }

    return (
        <div>
            <h1>
            {cnt.cnt}
            </h1>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
            <div>
                <button onClick={handleCountdown}>Odliczaj</button>
                <button onClick={handleStopCountdown}>Zatrzymaj</button>
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