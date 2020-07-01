import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class Leetcode1TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> num_map = new HashMap<Integer, Integer>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            if (num_map.containsKey(complement)) {
                return new int[] { num_map.get(complement), i};
            }

            num_map.put(nums[i], i);
        }
        throw new IllegalArgumentException("no match found!");
    }

    public static void main(String[] args) {
        int[] nums = {2,7,11,15};
        System.out.println(Arrays.toString(twoSum(nums, 9)));
    }
}