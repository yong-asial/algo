function maxCounter(N, A) {
    let count = Array(N).fill(0);
    let max = 0;
    for ( let i =0; i<A.length; i++) {
        let number = A[i];
        if (number <= N) {
            count[number-1] = count[number-1] + 1;
            if (max < count[number-1]) max = count[number-1];
        } else {
            for (let j=0; j<count.length;j++) {
                count[j] = max;
            }
        }
    }
    return count;
}

function maxCounter2(N, A) {
    let count = Array(N).fill(0);
    let max = 0;
    let tempMax = 0;
    for ( let i =0; i<A.length; i++) {
        let number = A[i];
        if (number <= N) {
            if (count[number-1] < max) count[number-1] = max;
            count[number-1] = count[number-1] + 1;
            if (tempMax < count[number-1]) tempMax = count[number-1];
        } else {
            max = tempMax;
        }
    }
    for (let i =0; i < count.length; i++) {
        if (count[i] < max) count[i] = max;
    }
    return count;
}



let result = maxCounter2(5, [3,4,4,6,1,4,4]);
console.log(result); // [3, 2, 2, 4, 2],


/**
 * 
 
def solution(N, A):
    result = [0]*N    # The list to be returned
    max_counter = 0   # The used value in previous max_counter command
    current_max = 0   # The current maximum value of any counter
    for command in A:
        if 1 <= command <= N:
            # increase(X) command
            if max_counter > result[command-1]:
                # lazy write
                result[command-1] = max_counter
            result[command-1] += 1
            if current_max < result[command-1]:
                current_max = result[command-1]
        else:
            # max_counter command
            # just record the current maximum value for later write
            max_counter = current_max
    for index in range(0,N):
        if result[index] < max_counter:
            # This element has never been used/updated after previous
            #     max_counter command
            result[index] = max_counter
    return result

 */