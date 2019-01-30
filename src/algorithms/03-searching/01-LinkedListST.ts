/**
 * Created by zhiyuan.huang@ddder.net.
 *
 * 使用链表结构作为符号表的数据结构
 */

import { SymbolTable } from './SymbolTable';

export class Node<K=any, V = any> {
    key: K;
    value: V;
    next: Node;

    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

export class LinkedListST<K = any, V = any> extends SymbolTable {
    private head: Node;
    private N: number = 0;

    put(key: K, value: V): void {
        let node = this.head;
        while(node) {
            if (key === node.key) {
                if (value == null) {
                    this.delete(key);
                } else {
                    node.value = value;
                }
                return;
            }
            node = node.next;
        }

        if (value != null) {
            node = new Node(key, value);
            node.next = this.head;
            this.head = node;
            ++this.N;
        }
    }

    get(key: K): V {
        let node = this.head;

        while(node) {
            if (node.key === key) {
                return node.value;
            }
            node = node.next;
        }

        return null;
    }

    delete(key: K): void {
        let dummyNode = new Node(null, null);
        dummyNode.next = this.head;

        let node = dummyNode;
        while(node && node.next) {
            if (node.next.key === key) {
                node.next = node.next.next;
                --this.N;
                break;
            }

            node = node.next;
        }

        this.head = dummyNode.next;
    }

    contains(key: K): boolean {
        return this.get(key) != null;
    }

    isEmpty(): boolean {
        return this.N <= 0;
    }

    size(): number {
        return this.N;
    }

    keys(): Iterable<K> {
        let keys = new Array(this.N);

        let i = 0;
        let node = this.head;

        while(node) {
            keys[i++] = node.key;
            node = node.next;
        }

        return keys;
    }
}
