const nestedObject = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
  D: [2, 4],
};

const flattenObject = (obj, parent) => {
  let result = {};
  for (let key in obj) {
    const newParent = parent + key;
    const value = obj[key];
    if (typeof obj[key] === "object") {
      const temp = flattenObject(value, newParent + ".");
      result = { ...result, ...temp };
    } else {
      result[newParent] = value;
    }
  }

  return result;
};

const filterObject = (inputObj, parentKey) => {
  let result = {};
  for (let key in inputObj) {
    const currentValue = inputObj[key];
    // if current value is an object, recursively call the function again to handle nesting
    if (typeof currentValue === "object") {
      const tempResult = filterObject(inputObj[key], key);
      result = { ...result, ...tempResult };
    }
    // if current value is NOT an object, there are two cases
    else {
      // if there is a parent key
      if (parentKey !== "") {
        // current value of key is negative, remove it
        if (currentValue < 0) delete key;
        else {
          let temp = {};
          temp[key] = currentValue;
          result[parentKey] = { ...result[parentKey], ...temp };
        }
      }
      // if there is NO parent key
      else {
        // current value of key is negative, remove it
        if (currentValue < 0) delete key;
        else result[key] = currentValue;
      }
    }
  }
  return result;
};

let obj = {
  a: 1,
  b: -1,
  c: {
    a: -1,
    b: 2,
  },
  d: 3,
  e: {
    a: 1,
    b: 2,
    c: -1,
  },
};

console.log(filterObject(obj, ""));
