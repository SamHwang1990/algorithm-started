/**
 * Created by zhiyuan.huang@ddder.net.
 *
 * 使用两个有序数组作为有序符号表键值对的数据结构
 * 下面简单使用 InsertionSorting 保证有序
 */

import { OrderedSymbolTable } from './SymbolTable';

export class BinarySearchST<K = any, V = any> extends OrderedSymbolTable<K, V> {
    private N: number = 0;
    private keyArr: K[] = [];
    private valArr: V[] = [];

    put(key: K, value: V): void {
        let keyRank = this.rank(key);

        if (this.keyComparator(this.keyArr[keyRank], key) === 0) {
            if (value == null) {
                this.delete(key);
            } else {
                this.valArr[keyRank] = value;
            }
            return;
        }

        this.keyArr[this.N] = undefined;
        this.valArr[this.N++] = undefined;

        for (let i = this.N - 2; i >= keyRank; --i) {
            this.keyArr[i + 1] = this.keyArr[i];
            this.valArr[i + 1] = this.valArr[i];
        }

        this.keyArr[keyRank] = key;
        this.valArr[keyRank] = value;
    }

    get(key: K): V {
        return this.valArr[this.rank(key)];
    }

    min(): K {
        return this.keyArr[0];
    }

    max(): K {
        return this.keyArr[this.N - 1];
    }

    delete(key: K): void {
        if (key == undefined) return;
        if (this.N <= 0) return;

        let keyRank = this.rank(key);
        if (this.select(keyRank) !== key) return;

        for (let i = keyRank; i < this.N - 1; ++i) {
            this.keyArr[i] = this.keyArr[i + 1];
            this.valArr[i] = this.valArr[i + 1];
        }

        this.deleteMax();
    }

    deleteMax(): void {
        if (this.N <= 0) return;
        this.keyArr.pop();
        this.valArr.pop();
        --this.N;
    }

    deleteMin(): void {
        if (this.N <= 0) return;
        this.keyArr.shift();
        this.valArr.shift();
        --this.N;
    }

    contains(key: K): boolean {
        return this.get(key) != null;
    }

    isEmpty(): boolean {
        return this.N <= 0;
    }

    size(lo?: K, hi?: K): number {
        if (lo == null && hi == null) return this.N;

        let loRank = lo == null ? 0 : this.rank(lo);
        let hiRank = hi == null ? this.N : this.rank(hi);

        return hiRank - loRank + (this.select(hiRank) === hi ? 1 : 0);
    }

    floor(key: K): K {
        return this.keyArr[this.rank(key) - 1];
    }

    ceiling(key: K): K {
        return this.keyArr[this.rank(key)];
    }

    rank(key: K): number {
        let lo = 0;
        let hi = this.N - 1;

        while(lo <= hi) {
            let mid = lo + Math.floor((hi - lo) / 2);
            let compare = this.keyComparator(this.keyArr[mid], key);

            if (lo === hi) {
                let compare = this.keyComparator(this.keyArr[lo], key);
                return compare === 0 ? lo : compare < 0 ? lo + 1 : 0;
            }

            if (compare === 0) {
                return mid;
            } else if (compare < 0) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        return lo;
    }

    select(k: number): K {
        if (k < 0) return undefined;
        return this.keyArr[k];
    }

    keys(lo?: K, hi?: K): Iterable<K> {
        let loIndex = lo == undefined ? 0 : this.rank(lo);
        let hiIndex = hi == undefined ? this.N - 1 : this.rank(hi);
        return this.keyArr.slice(loIndex, hiIndex + 1);
    }
}
