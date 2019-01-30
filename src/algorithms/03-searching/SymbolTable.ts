/**
 * Created by zhiyuan.huang@ddder.net.
 */

export type IKeyComparator<K> = (k1: K, k2: K) => number;

export abstract class SymbolTable<K = any, V = any> {
    abstract put(key: K, value: V): void;
    abstract get(key: K): V;
    abstract delete(key: K): void;
    abstract contains(key: K): boolean;
    abstract isEmpty(): boolean;
    abstract size(): number;
    abstract keys(): Iterable<K>;
}

export abstract class OrderedSymbolTable<K = any, V = any> extends SymbolTable<K, V> {
    protected keyComparator: IKeyComparator<K>;

    constructor(keyComparator: IKeyComparator<K>) {
        super();
        this.keyComparator = keyComparator;
    }

    abstract min(): K;
    abstract max(): K;
    abstract floor(key: K): K;
    abstract ceiling(key: K): K;
    abstract rank(key: K): number;
    abstract select(k: number): K;
    abstract deleteMin(): void;
    abstract deleteMax(): void;

    abstract size(): number;
    abstract size(lo: K, hi: K): number;

    abstract keys(): Iterable<K>;
    abstract keys(lo: K, hi: K): Iterable<K>;
}

