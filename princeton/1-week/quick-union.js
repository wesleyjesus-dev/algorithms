class QuickFind {
    constructor(size) {
        this.id = [];
        for (let i = 0; i < size; i++) {
            this.id.push(i);
        }
        console.log("lista inicializada: ", this.id);
    }

    root(i) {
        while (i != id[i]) {
          i = id[i];  
        }
        return i;
    }

    connected(p, q) {
        return this.root(p) == this.root(q);
    }

    union(p, q) {
        i = this.root(p);
        j = this.root(q);
        id[i] = j;
    }
}

const qf = new QuickFind(10);

qf.union(0,1);
qf.union(1,2);
qf.union(2,3);
qf.union(3,4);
qf.union(5,6);
qf.union(7,8);
qf.union(8,9);
