const Counterlogger = store => next => action => {
    if(action.type === "COUNTER_PLUS"){
        alert("Zwiększono licznik o jeden :)")
    }
    if(action.type === "COUNTER_MINUS"){
        alert("Zmniejszono licznik o jeden :(")
    }
    console.log('State before', store.getState());
    console.log('Dispatching action', action);
    let result = next(action);
    console.log('State after', store.getState());
    return result;
}

export default Counterlogger;