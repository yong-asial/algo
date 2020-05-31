/*
Input : Point l1 = {2, 2}, r1 = {5, 7};
        Point l2 = {3, 4}, r2 = {6, 9};
Output : Total Area = 24 

Input :Point l1 = {2, 1}, r1 = {5, 5};
       Point l2 = {3, 2}, r2 = {5, 7};
Output : Total Area = 16
*/

console.log(getOverTotalArea(
    {x:2, y:1}, {x:5, y:5},
    {x:3, y:2}, {x:5, y:7}
));

let l1 = {x: 2, y: 2};
let r1 = {x: 5, y: 7};
let l2 = {x: 3, y: 4};
let r2 = {x: 6, y: 9};

console.log(getOverTotalArea(
    l1,r1,l2,r2
));

function getRectangleArea(l, r) {
    let length = Math.abs(r.x - l.x);
    let width = Math.abs(r.y - l.y);
    let area = length * width;
    return area;
}

function getOverTotalArea(l1, r1, l2, r2) {
    let firstRectangleArea = getRectangleArea(l1, r1);
    let secondRectangleArea = getRectangleArea(l2, r2);
    let overlappingArea = getRectangleArea(l2, r1);
    return firstRectangleArea + secondRectangleArea - overlappingArea;
}

function isOverlapping(l1, r1, l2, r2) {
    
}


console.log(isOverlapping(
    {x:2, y:1}, {x:5, y:5},
    {x:3, y:2}, {x:5, y:7}
));