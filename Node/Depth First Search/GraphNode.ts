export class Vertex {
    val : number;
    id : number;
    leftChildVertex : Vertex | undefined;
    rightChildVertex : Vertex | undefined;
    stack : Vertex[];
    visited : number[];
    
    constructor(val: number) {
        this.id = Math.random();
        this.val = val;
        this.visited = [];
        this.stack = [];
    }

    search(val: number, vertex: Vertex): Vertex | undefined {
        this.visited.push(vertex.id);
        if (val === vertex.val) return this;
        let stack = this.pushPopStack(vertex, this.stack); // replace with queue for BFS
        this.search(val, stack[-1]);
        if(this.stack.length < 1) return;
    }

    pushPopStack(vertex: Vertex, stack : Vertex[]): Vertex[] {
        // stack is passed by reference
        if (this.leftChildVertex) { stack.push(this.leftChildVertex); }
        if (this.rightChildVertex) { stack.push(this.rightChildVertex); }
        if(!this.leftChildVertex && !this.rightChildVertex) stack.pop();
        return stack;
    }
}