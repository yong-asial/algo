/**
 * Find missing elements of a range
 * Given an array arr[0..n-1] of distinct elements and a range [low, high], find all numbers that are in range, but not in array. The missing elements should be printed in sorted order.
 * 
 * 
 */

import java.util.*; 
  
class Print { 
    // Print all elements of range [low, high] that 
    // are not present in arr[0..n-1] 
    static void printMissing(int ar[], int low, int high) 
    { 
        Set<Integer> set = new HashSet<Integer>();
        for (int i=0; i<ar.length; i++) {
            set.add(ar[i]);
        }

        while (low <= high) {
            if (!set.contains(low)) {
                System.out.print(low + " ");
            }
            low++;
        }
    } 
  
    // Driver program to test above function 
    public static void main(String[] args) 
    { 
        int arr[] = { 1, 3, 5, 4 }; 
        int low = 1, high = 10; 
        printMissing(arr, low, high); // 2 6 7 8 9 10
    } 
}