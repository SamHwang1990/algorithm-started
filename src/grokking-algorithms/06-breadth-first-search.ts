/**
 * Created by samhwang1990@gmail.com.
 */

/**
 * 广度优先搜索查找供应商
 * */

export interface RelationGraph {
    [key: string]: string[];
}

export interface QueueItem {
    parent: string;
    value: string;
}

export default function breadthFirstSearch(relationGraph: RelationGraph, starter: string, target: string): boolean {
    let searchQueue: QueueItem[] = [ { value: starter, parent: null } ];
    let searchedValue = {};

    while (searchQueue.length) {
        let { value, parent } = searchQueue.shift();

        if (searchedValue[value] === true) continue;

        if (value === target) return true;

        let nextRelation = relationGraph[value];
        if (nextRelation) {
            nextRelation.forEach(nextValue => {
                searchQueue.push({
                    value: nextValue,
                    parent: value,
                })
            })
        }

        searchedValue[value] = true;
    }

    return false;
}