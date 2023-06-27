import { TreeNode } from "./TreeNode";

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);

node1.leftEdge = node2;
node1.rightEdge = node3;

let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
let node7 = new TreeNode(7);

node2.leftEdge = node4;
node2.rightEdge = node5;
node3.leftEdge = node6;
node3.rightEdge = node7;

node1.search(7);