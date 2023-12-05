const nestedObject = {
    A: "12",
    B: 23,
    C: {
        P: 23,
        O: {
            L: 56
        },
        Q: [1, 2]
    },
    D: [2, 4]
}

const flattenObject = (obj, parent) => {
    let result = {};
    for(let key in obj) {
        const newParent = parent + key;
        const value = obj[key];
        if(typeof obj[key] === 'object') {
            const temp = flattenObject(value, newParent + ".");
            result = {...result, ...temp};
        } else {
            result[newParent] = value;
        }
    }

    return result;
};


console.log(flattenObject(nestedObject, ''));