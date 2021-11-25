let interval;

const Counterlogger = store => next => action => {
    if(action.type === "COUNTER_PLUS"){
        alert("Zwiększono licznik o jeden :)")
    }
    if(action.type === "START_COUNTDOWN"){
        interval = setInterval(
            () => store.dispatch({ type: "COUNTER_MINUS" }),
            1000
          );
    }else if (action.type === "STOP_COUNTDOWN") {
        
        clearInterval(interval);
      }
    console.log('State before', store.getState());
    console.log('Dispatching action', action);
    let result = next(action);
    console.log('State after', store.getState());
    return result;
}

export default Counterlogger;