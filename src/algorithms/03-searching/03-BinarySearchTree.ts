/**
 * Created by zhiyuan.huang@ddder.net.
 */

import { OrderedSymbolTable } from './SymbolTable';

export class Node<K = any, V = any> {
    key: K;
    val?: V;
    left?: Node<K, V>;
    right?: Node<K, V>;
    size: number;

    constructor(key: K, val?: V){
        this.key = key;
        this.size = 1;

        if (val != null) {
            this.val = val;
        }
    }
}

export class BinarySearchTree<K = any, V = any> extends OrderedSymbolTable {
    root: Node;

    put(key: K, value: V): void {
        this.root = this.putToNode(this.root, key, value);
    }

    private putToNode(x: Node, key: K, value: V): Node {
        if (x == null) return new Node(key, value);

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
        this.root = this.deleteMinUnderNode(this.root);
    }

    private deleteMinUnderNode(x: Node): Node {
        if (x == null) return x;
        if (x.left == null) return x.right;

        x.left = this.deleteMinUnderNode(x.left);
        x.size = this.calSizeOfNode(x);
        return x;
    }

    deleteMax(): void {
        this.root = this.deleteMaxUnderNode(this.root);
    }

    private deleteMaxUnderNode(x: Node): Node {
        if (x == null) return x;
        if (x.right == null) return x.left;

        x.right = this.deleteMinUnderNode(x.right);
        x.size = this.calSizeOfNode(x);
        return x;
    }

    delete(key: K): void {
        this.root = this.deleteUnderNode(this.root, key);
    }

    private deleteUnderNode(x: Node, key: K): Node {
        if (x == null) return x;

        let compare = this.keyComparator(x.key, key);

        if (compare > 0) x.right = this.deleteUnderNode(x.right, key);
        else if (compare < 0) x.left = this.deleteUnderNode(x.left, key);
        else {
            if (!x.right) return x.left;
            let minUnderRight = this.minUnderNode(x.right);
            x.val = minUnderRight.val;
            x.key = minUnderRight.key;
            x.right = this.deleteMinUnderNode(x.right);
        }

        x.size = this.calSizeOfNode(x);

        return x;
    }

    isEmpty(): boolean {
        return !!this.root;
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
