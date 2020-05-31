function findDuplicate(arr) {
    for (let i=0; i<arr.length-1; i++) {
        for (let j=i+1;j<arr.length;j++) {
            if (arr[i] === arr[j]) {
                console.log(arr[i]);
                break;
            }
        }
    }
}

function findDuplicate5(arr) {
    for (let i=0;i<arr.length;i++) {
        let number = Math.abs(arr[i]);
        // the constraint is number is between 0 ... n-1
        if (arr[number] >= 0) {
            arr[number] = -arr[number];
        } else {
            console.log(Math.abs(arr[i]));
        }
    }
}

function findDup2(arr) {
    // create all element with 0
    let countA = Array(arr.length).fill(0);
    for (let i=0;i<arr.length;i++) {
        if (countA[arr[i]] >= 1) {
            console.log(arr[i]);
        } else {
            countA[arr[i]]++;
        }
    }
}


findDup2([1,2,3,1,3,6,6]);