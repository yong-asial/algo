import java.util.*;

class Graph {
    // data structure to store graph edges
    static class Edge {
        int src, dest;

        Edge(int src, int dest) {
            this.src = src;
            this.dest = dest;
        }
    };

    // A list of lists to represent adjacency list
    List<List<Integer>> adj = new ArrayList<>();

    // Constructor to construct graph
    public Graph(List<Edge> edges) {
        // allocate memory for adjacency list
        for (int i = 0; i < edges.size(); i++) {
            adj.add(i, new ArrayList<>());
        }

        // add edges to the undirectd graph
        for (Edge current : edges) {
            // allocate new node in adjacency List from src to dest
            adj.get(current.src).add(current.dest);

            // dest -> src (for undirected graph)
            adj.get(current.dest).add(current.src);
        }
    }

    // print adjacency list representative of graph
    private static void printGraph(Graph graph) {
        int src = 0;
        int n = graph.adj.size();
        while (src < n) {
            // print current vertex and all its neighboring vertices
            for (int dest : graph.adj.get(src)) {
                System.out.println("(" + src + " --> " + dest + ")\t");
            }

            System.out.println();
            src++;
        }
    }

    public static void main (String[] args) {
        List<Edge> edges = Arrays.asList(new Edge(0,1), new Edge(1,2),
            new Edge(2,0), new Edge(2, 1), new Edge(3, 2),
            new Edge(4,5), new Edge(5,4)
        );       
        Graph graph = new Graph(edges);

        printGraph(graph);
    }
}