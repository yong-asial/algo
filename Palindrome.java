class Palindrome {
    
    public static Boolean isPalindrome(String word) {
        int i = 0;
        int j = word.length()-1;
        while (i<j) {
            if (word.charAt(i) != word.charAt(j)) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(String.valueOf(isPalindrome("racecar")));
        System.out.println(String.valueOf(isPalindrome("abcba")));
        System.out.println(String.valueOf(isPalindrome("word")));
    }
}