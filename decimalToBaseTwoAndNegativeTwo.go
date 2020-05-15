package main

import (
	"fmt"
	"math"
	"strconv"
)

func main() {
	/*
		Base 2
			1		2		4		8		16		-32
		4	0		0		1
		9	1		0		0		1
	*/

	/*
		Base -2
			1		-2		4		-8		16		-32
		4	0		0		1
		9	1		0		0		1		1
	*/
	run(4)
	run(9)
}

func run(decimal int) {
	fmt.Println(decimal)
	fmt.Println("==================================")
	fmt.Println("Decimal to base 2 and vice versa")
	base := convertFromDecimalToBase2(decimal)
	fmt.Println(base)
	fmt.Println(convertFromBase2ToDecimal(base))

	fmt.Println("Decimal to base -2 and vice versa")
	base = convertFromDecimalToNegativeBase2(decimal)
	fmt.Println(base)
	fmt.Println(convertFromBaseNegative2ToDecimal(base))
	fmt.Println()
}

func isEven(num int) bool {
	if num%2 == 0 {
		return true
	}
	return false
}

func convertFromBaseNegative2ToDecimal(num string) int {
	base := -2.0
	result := 0.0
	for i := 0; i < len(num); i++ {
		digit, err := strconv.Atoi(string(num[i]))
		if err != nil {
			return 0
		}
		sign := 1
		if isEven(digit) {
			sign = -1
		}
		result += float64(digit) * (math.Pow(base, float64(i))) * float64(sign)
	}
	return int(result)
}

func convertFromBase2ToDecimal(num string) int {
	base := 2.0
	result := 0.0
	for i := 0; i < len(num); i++ {
		digit, err := strconv.Atoi(string(num[i]))
		if err != nil {
			return 0
		}
		result += float64(digit) * (math.Pow(base, float64(i)))
	}
	return int(result)
}

func convertFromDecimalToBase2(num int) string {
	result := ""
	base := 2
	for num != 0 {
		residual := strconv.Itoa(num % base)
		num /= base
		result += residual
	}
	return result
}

func convertFromDecimalToNegativeBase2(num int) string {
	result := ""
	base := -2
	for num != 0 {
		residual := num % base
		num /= base

		// if residual is negative
		// add Math.abs(base) to it
		// and add 1 to num
		if residual < 0 {
			residual += int(math.Abs(float64(base)))
			num++
		}
		result += strconv.Itoa(residual)
	}
	return result
}

func reverseString(st string) string {
	r := []rune(st)
	var res []rune
	for i := len(r) - 1; i >= 0; i-- {
		res = append(res, r[i])
	}
	return string(res)
}
