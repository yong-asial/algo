import java.util.Stack;

class LeetCode402RemoveKDigits {

    public static String solution(String num, int k) {
        int size = num.length();
        if (k == size) return "0";
        Stack<Character> stack = new Stack<Character>();
        
        int counter = 0;
        while (counter < size) {

            // Greedy algorithm
            
            while (k > 0 && !stack.isEmpty() && stack.peek() > num.charAt(counter)) {
                stack.pop();
                k--;
            }

            stack.push(num.charAt(counter));
            counter++;
            System.out.println(stack.toString());
        }

        while (k > 0) {
            stack.pop();
            k--;
        }

        StringBuilder sb = new StringBuilder();
        while (!stack.isEmpty()) {
            char currentChar = stack.pop();
            sb.append(currentChar);
        }
        sb.reverse();

        while (sb.length() > 0 && sb.charAt(0) == '0') {
            sb.deleteCharAt(0);
        }
        return sb.toString();
    }

    public static void main(String[] args) {
        String num = "1432219";
        int k = 3;
        System.out.println(solution(num, k));
    }
}