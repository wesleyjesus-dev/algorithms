/**
 * QuickFind - eager approach
 */
public class QuickFind {

    private int[] id;

    public QuickFind(int sizeOfArray) {
        id = new int[sizeOfArray];
    }

    boolean connected(int p, int q) {
        return id[p] == id[q];
    }

    void union(int p, int q) {
        if(connected(p, q)) return;

        int pId = id[p]; // coleta o id de P
        int qId = id[p]; // coleta o id de Q
        
        for(int i = 0; i < id.length; i++) {
            if(id[i] == pId) {
                id[i] = qId;
            }
        }
    }
}