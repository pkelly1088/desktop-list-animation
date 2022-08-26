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