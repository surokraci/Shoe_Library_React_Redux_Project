import { connect } from "react-redux";
import { incrementCounter } from "../actions/CounterActions";
import { decrementCounter } from "../actions/CounterActions";

const Counter = ({cnt, incrementCounter, decrementCounter}, props) =>{

    const handleIncrease = () => {
        incrementCounter();
        console.log(cnt);
    }
    const handleDecrease = () => {
        decrementCounter();
        console.log(cnt);
    }

    return (
        <div>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
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
    decrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)