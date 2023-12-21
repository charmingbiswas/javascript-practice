



const array = [1, 2, 3, 4, 5];

Array.prototype.customReduce = function(callback, initialValue) {
    let accumulator = initialValue;
    let array = this
    array.forEach((item, index) => {
        accumulator = callback(accumulator, item, index);
    })

    return accumulator;
};


let final = array.customReduce((accumulator, value) => {
    return accumulator + value
}, 0)


console.log(final)





