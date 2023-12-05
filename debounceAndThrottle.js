
const debounce = (func, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay)
    }
}


const throttle = (func, delay) => {
    let wait = false;
    return (...args) => {
        if(wait) return;
        func.apply(this, args);
        wait = true;
        setTimeout(() => wait = false, delay);
    }
}
