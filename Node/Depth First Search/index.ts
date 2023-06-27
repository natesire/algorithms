import { Vertex } from "./GraphNode";

let node1 = new Vertex(1);
let node2 = new Vertex(2);
let node3 = new Vertex(3);

node1.leftChildVertex = node2;
node1.rightChildVertex = node3;

let node4 = new Vertex(4);
let node5 = new Vertex(5);
let node6 = new Vertex(6);
let node7 = new Vertex(7);

node2.leftChildVertex = node4;
node2.rightChildVertex = node5;
node3.leftChildVertex = node6;
node3.rightChildVertex = node7;

node1.search(7);