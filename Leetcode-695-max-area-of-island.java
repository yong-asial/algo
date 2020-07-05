

class Leetcode695maxareaofisland {
    // Max area of island

    static boolean seen[][];

    public static int maxAreaOfIsland(int[][] grid) {
        int max_area = 0;

        int rows = grid.length;
        int colums = grid[0].length;

        seen = new boolean[rows][colums];

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < colums; j++) {
                max_area = Math.max(max_area, area(i, j, grid));
            }
        }

        return max_area;
    }

    public static int area(int row, int column, int[][] grid) {
        if (row < 0 || row >= grid.length || column < 0 || column >= grid[row].length || grid[row][column] == 0 || seen[row][column]) {
            return 0;
        }

        seen[row][column] = true;
        return (1 + area(row+1, column, grid) + area(row-1, column, grid) + area(row, column+1, grid) + area(row, column-1, grid));
    }

    public static void main(String[] args) {
        int[][] grid = {{0,0,1,0,0,0,0,1,0,0,0,0,0},
        {0,0,0,0,0,0,0,1,1,1,0,0,0},
        {0,1,1,0,1,0,0,0,0,0,0,0,0},
        {0,1,0,0,1,1,0,0,1,0,1,0,0},
        {0,1,0,0,1,1,0,0,1,1,1,0,0},
        {0,0,0,0,0,0,0,0,0,0,1,0,0},
        {0,0,0,0,0,0,0,1,1,1,0,0,0},
        {0,0,0,0,0,0,0,1,1,0,0,0,0}};

        System.out.println(maxAreaOfIsland(grid)); // 6   
    }
}