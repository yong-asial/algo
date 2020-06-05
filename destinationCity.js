/*
Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
Output: "Sao Paulo" 
Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
*/



var destCity = function(paths) {
    if (paths.length === 1) return paths[0][1];
    const sources = [];
    const destination = [];
    for (let i=0; i<paths.length; i++) {
        const source = paths[i][0];
        sources.push(source);
    }
    for (let i=0; i<paths.length; i++) {
        const destination = paths[i][1];
        if (sources.indexOf(destination) < 0) return destination;
    }
    return null;
};