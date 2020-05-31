package main

import "fmt"

func lonelyInteger(nums []int) int {
	found := 0
	for _, num := range nums {
		found ^= num
	}
	return found
}

func main() {
	var a [2]string
	a[0] = "Lonely Integer"
	a[1] = "Problem"
	nums := []int{9, 1, 2, 3, 2, 9, 1, 7, 7}
	fmt.Println(a[0], a[1], nums)
	fmt.Println(lonelyInteger(nums))
}
