class QuickFind {
    constructor(size) {
        this.ids = [];
        for (let i = 0; i < size; i++) {
            this.ids.push(i);
        }
        console.log("lista inicializada: ", this.ids);
    }

    connected(p, q) {
        return this.ids[p] == this.ids[q]
    }

    union(p, q) {
        const pId = this.ids[p];
        const qId = this.ids[q];

        for (let index = 0; index < this.ids.length; index++) {
            if(this.ids[index] == pId)
                this.ids[index] = qId;
        }
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
