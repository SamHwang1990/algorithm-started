/**
 * Created by samhwang1990@gmail.com.
 */

/**
 * 单向链表结构，实现以下功能，同时展示每个功能的时间复杂度：
 * existIn
 * prepend
 * append
 * 删除
 * */

interface LinkedListItem<T> {
    data: T,
    next: LinkedListItem<T>
}

export default class LinkedList<T> {
    private head: LinkedListItem<T>;

    constructor() {
        this.head = null;
    }

    // 时间复杂度：O(n)
    public append(data: T) {
        if (this.head == null) {
            this.head = {
                data,
                next: null,
            };
            return;
        }

        let item = this.head;
        while(item.next) {
            item = item.next;
        }

        item.next = {
            data,
            next: null,
        }
    }

    // 时间复杂度：O(1)
    public prepend(data: T) {
        if (this.head == null) {
            this.head = {
                data,
                next: null,
            };
            return;
        }

        let oriHead = this.head;
        this.head = {
            data,
            next: oriHead
        };
    }

    // 时间复杂度：O(n)
    public existIn(data: T): boolean {
        let item = this.head;
        while(item) {
            if (item.data === data) return true;
            item = item.next;
        }

        return false;
    }

    // 时间复杂度：O(n)
    public delete(data: T) {
        let item = this.head;
        let prevItem: LinkedListItem<T>;
        while(item) {
            if (item.data === data) {
                if (item === this.head) {
                    this.head = item.next;
                    prevItem = null;
                }
                if (prevItem) {
                    prevItem.next = item.next;
                }
            } else {
                prevItem = item;
            }
            item = item.next;
        }
    }

    public [Symbol.iterator]() {
        let item = this.head;

        return {
            next: () => {
                if (!item) {
                    return {
                        value: null,
                        done: true,
                    }
                } else {
                    let value = item.data;
                    item = item.next;

                    return {
                        value,
                        done: false,
                    }
                }
            }
        }
    }
}