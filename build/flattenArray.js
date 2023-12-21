const array = [1, [2, [3, 4], 5], [1, 2], 9];

const flattenArray = (arr) => {
    const result = [];
    arr.forEach(element => {
        if(Array.isArray(element)) {
            const tempResult = flattenArray(element);
            result.push(...tempResult);
        } else {
            result.push(element);
        }
    }) 
    return result;
}

const res = flattenArray(array);
console.log(res);
