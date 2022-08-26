// export const getData = async (url) => {
//     try{
//         const response = await fetch(url);
//         if(!response.ok) {
//             const errorMessage = ('Error occurred with GET fetch: ', response.status, response.statusText);
//             throw new Error(errorMessage);
//         }
//         const data = await response.json();
//         if (data) {
//             return data
//         }
//     }
//     catch(error) {
//         throw new Error(error);
//     }
// }

export const objectStateKey = (object, state) => {
    return Object.keys(object.states)[state - 1]
};

export const sortData = (array, state) => {
    const tempData = [...array];
    return tempData.sort((a, b) => {
        const firstStateKey = objectStateKey(a, state);
        const secondStateKey = objectStateKey(b, state);
        if(a.states[firstStateKey] < b.states[secondStateKey]) { return -1; }
        if(a.states[firstStateKey] > b.states[secondStateKey]) { return 1; }
        return 0;
    })
};