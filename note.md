# Find Numbers with Even Number of Digits

```
Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
```

## Solution 1
```
func findNumbers(nums []int) int {
    even:=0
    for _,x := range nums{
        s:= strconv.Itoa(x)
        l:=len(s)
        if l & 1==0{
            even++
        }
    }
    return even
}
```

## Solution 2
```
func findNumbers(nums []int) int {
    count := 0
    for i:=0; i<len(nums); i++ {
        if nums[i]<10 {
            continue
        }
        if isEven(getDigits(nums[i])) {
            count++
        }
    }
    return count
}

func getDigits(num int) int {
    if num < 10 {
        return 1
    }
    digit := 1
    for true {
        num /= 10
        if num > 0 {
            digit++
        } else {
            return digit
        }
    }
    return digit
}

func isEven(num int) bool {
    if num%2 == 0 {
        return true;
    } else {
        return false;
    }
}
```

# Find Max Consecutive Ones
```
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
```
## Solution 1
```
func findMaxConsecutiveOnes(nums []int) int {

	onesCount := 0
	max := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] == 1 {
			onesCount++
			if max < onesCount {
				max = onesCount
			}
		} else if nums[i] == 0 {
			onesCount = 0
		}
	}

	return max
}
```
## Solution 2
```
func findMaxConsecutiveOnes(nums []int) int {
	max := 0
	count := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] == 1 {
			count++
		} else {
			if max < count {
				max = count
			}
			count = 0
		}
	}
	if max > count {
		return max
	} else {
		return count
	}
}
```

# Squares of a Sorted Array
```
Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```
## Solution 1
```
func sortedSquares(A []int) []int {
    var squares []int
    for i:=0; i<len(A); i++ {
     squares = append(squares, A[i]*A[i])   
    }
    sort.Ints(squares)
    return squares
}
```

# Duplicate Zeros

```
Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
```

## Solution 1
```
func duplicateZeros(arr []int)  {
    n := len(arr)
    for i:=0; i<n; i++ {
        if arr[i]==0 && i < n-1 {
            i++
            temp := make([]int, n-i)
            k := 0
            for ;k<n-i;k++ {
                temp[k] = arr[k+i]
            }
            arr[i]=0
            k = 0
            for j:=i+1; j<n; j++ {
                arr[j]=temp[k]
                k++
            }
        }
    }
}
```

## Solution 2

```
func duplicateZeros(arr []int) {
	var dups int
	var aLen = len(arr)

	for i := 0; i < aLen-dups; i++ {
		if arr[i] == 0 {
			if i == aLen-dups-1 {
				arr[aLen-1] = 0
				aLen--
			} else {
				dups++
			}
		}
	}

	for i := aLen - dups - 1; i >= 0; i-- {
		if arr[i] == 0 {
			arr[i+dups] = 0
			dups--
			arr[i+dups] = 0
		} else {
			arr[i+dups] = arr[i]
		}
	}
}
```

# Merge Sorted Array
```
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
```

## Solution 1
```
var merge = function(nums1, m, nums2, n) {
    if (!nums2 || !nums2.length) return;
    let index1 = m-1;
    let index2 = n-1;
    if (index1 < 0) index1 = 0;
    if (index2 < 0) index2 = 0;
    for (let i=m+n-1; i>=0; i--) {
        if (index2 < 0 || index1 < 0) break;
        num1 = nums1[index1];
        num2 = nums2[index2];
        if (num2 >= num1) {
            nums1[i] = num2;
            index2--;
        } else {
            nums1[i] = num1;
            index1--;
        }
    }
    for (let i=0; i<=index2; i++) nums1[i] = nums2[i];
};
```

## Solution 2
```
var merge = function (numsA, nA, numsB, nB) {
  let pointerA = nA - 1; // last index of a number in A, zero based
  let pointerB = nB - 1; // last index of a number in in B, zero based
  let maxIterations = nA + nB - 1; // number of needed iterations to merge the two arrays

  for (let i = maxIterations; i >= 0; i--) {
    if (pointerA < 0) {
      numsA[i] = numsB[pointerB];
      pointerB = pointerB - 1;
    } else if (pointerB < 0) {
      numsA[i] = numsA[pointerA];
      pointerA = pointerA - 1;
    } else if (numsA[pointerA] < numsB[pointerB]) {
      numsA[i] = numsB[pointerB];
        pointerB = pointerB-1;
    } else {
      numsA[i] = numsA[pointerA--];
    }
  }
};
```