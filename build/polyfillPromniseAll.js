const dummyApiCall = (delay, data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, delay);
    })
};


const fakeApiCallsArray = [dummyApiCall(1000, 1), dummyApiCall(3000, 2), dummyApiCall(5000, 3)];

Promise.customAll = function(apiCallsArray) {
    return new Promise((resolve, reject) => {
        let result = [];
        let total = 0;
        apiCallsArray.forEach((apiCall, index) => {
            Promise.resolve(apiCall).then((res) => {
                result[index] = res;
                total++;

                if(total === apiCallsArray.length) {
                    resolve(result);
                }
            }).catch((err) => {
                reject(err);
            })
        })
    })
}

Promise.customAll(fakeApiCallsArray).then((res) => console.log(res));