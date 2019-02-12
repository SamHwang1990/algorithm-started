/**
 * Created by zhiyuan.huang@ddder.net.
 */

import { OrderedSymbolTable } from './SymbolTable';

export enum NodeColor {
    red = 1,
    black = 0,
}

export class Node<K = any, V = any> {
    key: K;
    val?: V;
    left?: Node<K, V>;
    right?: Node<K, V>;
    size: number;
    color: NodeColor;

    constructor(key: K, color: NodeColor, val?: V){
        this.key = key;
        this.size = 1;
        this.color = color;

        if (val != null) {
            this.val = val;
        }
    }
}

export function isRedNode(node: Node): boolean {
    if (node == null) return false;
    return node.color === NodeColor.red;
}

export function revertNodeColor(node: Node) {
    if (node == null) return;

    if (node.color === NodeColor.red) {
        node.color = NodeColor.black;
    } else {
        node.color = NodeColor.red;
    }
}

export class RedBlackBalancedSearchTree<K = any, V = any> extends OrderedSymbolTable {
    root: Node;

    private rotateLeft(node: Node): Node {
        let right = node.right;

        node.right = right.left;
        right.left = node;

        let color = node.color;
        node.color = right.color;
        right.color = color;

        node.size = this.calSizeOfNode(node);
        right.size = this.calSizeOfNode(right);
        return right;
    }

    private rotateRight(node: Node): Node {
        let left = node.left;

        node.left = left.right;
        left.right = node;

        let color = node.color;
        node.color = left.color;
        left.color = color;

        node.size = this.calSizeOfNode(node);
        left.size = this.calSizeOfNode(left);

        return left;
    }

    private flipColors(node: Node): Node {
        revertNodeColor(node.left);
        revertNodeColor(node.right);
        revertNodeColor(node);
        return node;
    }

    /**
     * 该方法执行的预设条件：
     * 1. 节点本身为 red node
     * 2. 节点右子节点的左子节点不为 red node
     * */
    private moveRedRight(node: Node): Node {
        if (node == null) return node;
        if (!isRedNode(node) || isRedNode(node.right.left)) return node;

        this.flipColors(node);
        if (isRedNode(node.left.left)) {
            node = this.rotateRight(node);
            this.flipColors(node);
        }

        return node;
    }

    /**
     * 该方法执行的预设条件：
     * 1. 节点本身为 red node
     * 2. 节点左子节点不为 red node
     * 3. 节点左子节点的左子节点不为 red node
     * */
    private moveRedLeft(node: Node): Node {
        if (node == null) return node;
        if (!isRedNode(node) || isRedNode(node.left) || isRedNode(node.left.left)) return node;

        this.flipColors(node);

        if (isRedNode(node.right.left)) {
            node.right = this.rotateRight(node.right);
            node = this.rotateLeft(node);
            this.flipColors(node);
        }

        return node;
    }

    private balance(node: Node): Node {
        if (node == null) return null;

        if (isRedNode(node.right) && !isRedNode(node.left)) node = this.rotateLeft(node);
        if (isRedNode(node.left) && isRedNode(node.left.left)) node = this.rotateRight(node);
        if (isRedNode(node.left) && isRedNode(node.right)) this.flipColors(node);

        node.size = this.calSizeOfNode(node);

        return node;
    }

    put(key: K, value: V): void {
        this.root = this.putToNode(this.root, key, value);
        this.root.color = NodeColor.black;
    }

    private putToNode(x: Node, key: K, value: V): Node {
        if (x == null) return new Node(key, NodeColor.red, value);

        let compare = this.keyComparator(key, x.key);

        if (compare === 0) {
            if (value == null) {
                return this.deleteUnderNode(x, key);
            } else {
                x.val = value;
            }
        }
        else if (compare < 0) x.left = this.putToNode(x.left, key, value);
        else if (compare > 0) x.right = this.putToNode(x.right, key, value);

        x.size = this.calSizeOfNode(x);

        if (isRedNode(x.right) && !isRedNode(x.left)) x = this.rotateLeft(x);
        if (isRedNode(x.left) && isRedNode(x.left.left)) x = this.rotateRight(x);
        if (isRedNode(x.left) && isRedNode(x.right)) x = this.flipColors(x);

        return x;
    }

    get(key: K): V {
        return this.getFromNode(this.root, key)
    }

    getFromNode(x: Node, key: K): V {
        if (x == undefined) return null;

        let compare = this.keyComparator(key, x.key);

        if (compare === 0) return x.val;
        else if (compare < 0) return this.getFromNode(x.left, key);
        else if (compare > 0) return this.getFromNode(x.right, key);
    }

    min(): K {
        let minNode = this.minUnderNode(this.root);
        return minNode ? minNode.key : null;
    }

    private minUnderNode(x: Node): Node {
        if (x == null) return x;
        if (x.left == null) return x;
        return this.minUnderNode(x.left);
    }

    max(): K {
        let maxNode = this.maxUnderNode(this.root);
        return maxNode ? maxNode.key : null;
    }

    private maxUnderNode(x: Node): Node {
        if (x == null) return x;
        if (x.right == null) return x;
        return this.maxUnderNode(x.right);
    }

    floor(key: K): K {
        return this.floorOfNode(this.root, key);
    }

    private floorOfNode(x: Node, key: K): K {
        if (x == null) return null;

        let compare = this.keyComparator(x.key, key);
        if (compare === 0) return x.key;
        else if (compare > 0) return this.floorOfNode(x.left, key);
        else return this.floorOfNode(x.right, key) || x.key;
    }

    ceiling(key: K): K {
        return this.ceilingOfNode(this.root, key);
    }

    private ceilingOfNode(x: Node, key: K): K {
        if (x == null) return null;

        let compare = this.keyComparator(x.key, key);
        if (compare === 0) return x.key;
        else if (compare < 0) return this.ceilingOfNode(x.right, key);
        else return this.ceilingOfNode(x.left, key) || x.key;
    }

    rank(key: K): number {
        return this.rankUnderNode(this.root, key);
    }

    private rankUnderNode(x: Node, key: K): number {
        if (x == null) return 0;

        let compare = this.keyComparator(x.key, key);
        if (compare === 0) return this.sizeOfNode(x.left);
        else if (compare > 0) return this.rankUnderNode(x.left, key);
        else return this.sizeOfNode(x.left) + 1 + this.rankUnderNode(x.right, key);
    }

    select(k: number): K {
        return this.selectUnderNode(this.root, k);
    }

    private selectUnderNode(x: Node, n: number): K {
        if (x == null) return null;
        if (x.size < n) return null;

        let leftSize = this.sizeOfNode(x.left);
        if (leftSize >= n) return this.selectUnderNode(x.left, n);

        n -= leftSize;
        if (n === 1) return x.key;

        n -= 1;
        return this.selectUnderNode(x.right, n);
    }

    deleteMin(): void {
        if (this.isEmpty()) return null;

        if (!isRedNode(this.root.left) && !isRedNode(this.root.right)) {
            this.root.color = NodeColor.red;
        }

        this.root = this.deleteMinUnderNode(this.root);
        if (!this.isEmpty()) this.root.color = NodeColor.black;
    }

    private deleteMinUnderNode(x: Node): Node {
        if (x == null) return null;
        if (x.left == null) return null;

        if (!isRedNode(x.left) && !isRedNode(x.left.left)) x = this.moveRedLeft(x);

        x.left = this.deleteMinUnderNode(x.left);
        return this.balance(x);
    }

    deleteMax(): void {
        if (this.isEmpty()) return;

        if (!isRedNode(this.root.left) && !isRedNode(this.root.right)) {
            this.root.color = NodeColor.red;
        }

        this.root = this.deleteMaxUnderNode(this.root);

        if (!this.isEmpty()) this.root.color = NodeColor.black;
    }

    private deleteMaxUnderNode(x: Node): Node {
        if (x == null) return null;

        if (isRedNode(x.left)) x = this.rotateRight(x);
        if (x.right == null) return null;

        if (!isRedNode(x.right) && !isRedNode(x.right.left)) x = this.moveRedRight(x);

        x.right = this.deleteMaxUnderNode(x.right);
        return this.balance(x);
    }

    delete(key: K): void {
        if (key == null) return;
        if (!this.contains(key)) return;

        if (!isRedNode(this.root.left) && !isRedNode(this.root.right)) this.root.color = NodeColor.red;

        this.root = this.deleteUnderNode(this.root, key);
        if (!this.isEmpty()) this.root.color = NodeColor.black;
    }

    private deleteUnderNode(x: Node, key: K): Node {
        if (x == null) return x;

        let compare = this.keyComparator(key, x.key);

        if (compare < 0) {
            if (x.left == null) return x;
            if (!isRedNode(x.left) && !isRedNode(x.left.left)) x = this.moveRedLeft(x);
            x.left = this.deleteUnderNode(x.left, key);
        } else {
            if (isRedNode(x.left)) x = this.rotateRight(x).right;
            if (compare === 0 && x.right == null) return null;

            if (!isRedNode(x.right) && !isRedNode(x.right.left)) x = this.moveRedRight(x);

            if (compare === 0) {
                let minUnderRight = this.minUnderNode(x.right);
                x.val = minUnderRight.val;
                x.key = minUnderRight.key;
                x.right = this.deleteMinUnderNode(x.right);
            } else {
                x.right = this.deleteUnderNode(x.right, key);
            }
        }

        return this.balance(x);
    }

    isEmpty(): boolean {
        return !this.root;
    }

    contains(key: K): boolean {
        return this.get(key) != null;
    }

    size(): number {
        return this.sizeOfNode(this.root);
    }

    private sizeOfNode(node: Node): number {
        if (node == null) return 0;
        return node.size;
    }

    private calSizeOfNode(node: Node): number {
        if (node == null) return 0;
        return this.sizeOfNode(node.left) + this.sizeOfNode(node.right) + 1;
    }

    keys(): Iterable<K> {
        let keys = new Array(this.size());

        this.keysOfNode(keys, this.root);
        return keys;
    }

    keysOfNode(result: K[], x: Node): void {
        if (x == null) return;

        this.keysOfNode(result, x.left);
        result.push(x.key);
        this.keysOfNode(result, x.right);
    }
}
