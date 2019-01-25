/**
 * Created by samhwang1990@gmail.com.
 */

import { less, exchange } from 'src/algorithms/02-sorting/helpers';

export function ascSorted(arr: any[]): boolean {
    if (!arr) return false;

    for (let i = 0; i < arr.length - 1; ++i) {
        if (less(arr[i+1], arr[i])) {
            return false;
        }
    }

    return true;
}

export function randomIntArray(size: number): number[] {
    if (!size || size < 0) {
        size = 0;
    }
    
    let arr = new Array(size);
    
    for (let i = 0; i < size; ++i) {
        let plusOrMinus = Math.random() > .5 ? -1 : 1;
        arr[i] = plusOrMinus * Math.ceil(Math.random() * size)
    }
    
    return arr;
}

export function fillAscArray(size: number): number[] {
    let arr = new Array(size);
    for (let i = 0; i < size; ++i) {
        arr[i] = i;
    }
    
    return arr;
}

export function fillDescArray(size: number): number[] {
    let arr = new Array(size);
    for (let i = 0; i < size; ++i) {
        arr[i] = size - 1 - i;
    }

    return arr;
}

export function arrayPartialRandom(arr: any[], rate: number) {
    if (!rate || rate < 0) rate = 0;
    if (rate > 1) rate = 1;
    
    let size = arr.length;
    for (let i = 0; i < rate * size; ++i) {
        let x = Math.ceil(Math.random() * size);
        let y = Math.ceil(Math.random() * size);
        
        if (x == y) continue;
        exchange(arr, x, y);
    }
}

export function timeRecord(handler): any {
    let hrstart = process.hrtime();

    let result = handler();

    let hrend = process.hrtime(hrstart);
    console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);

    return result;
}

export function arrayToList(arr: any[]) {
    let helper = {
        val: null,
        next: null,
    };

    for (let i = arr.length - 1; i >= 0; --i) {
        let node = {
            val: arr[i],
            next: helper.next,
        };

        helper.next = node;
    }

    return helper.next;
}

export function listToArray(head): any[] {
    let arr = [];

    let node = head;

    while(node != null) {
        arr.push(node.val);
        node = node.next;
    }

    return arr;
}