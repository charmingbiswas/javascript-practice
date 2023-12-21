const s = "Because I am happy!";

const delimiter = " ";

const customSplit = (s, delimiter) => {
    const result = [];
    if(delimiter === "") return Array.from(s);
    const internalSplit = (string, i) => {
        if(i >= string.length) return;
        const index = string.indexOf(delimiter);
        if(index >= 0) {
            result.push(string.substring(0, index));
            internalSplit(string.substring(index + delimiter.length), index + delimiter.length);
        } else {
            result.push(string);
        }
    };
    internalSplit(s, 0);
    return result;
}

console.log(customSplit(s, " "));
