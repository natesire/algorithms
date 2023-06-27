export class TreeNode {
    val: number;
    leftEdge: TreeNode | undefined;
    rightEdge: TreeNode | undefined;
    stack: TreeNode[];
    
    constructor(val: number) {
        this.val = val
    }

    search(val: number): TreeNode | undefined {
        if (val === this.stack[-1].val) return this
        if (this.leftEdge) this.stack.push(this.leftEdge)
        if (this.rightEdge) this.stack.push(this.rightEdge)
        if(!this.leftEdge && !this.rightEdge) this.stack.pop()
        this.search(val)
        if(this.stack.length < 1) return
    }
    
}