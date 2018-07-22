/**
 * Created by samhwang1990@gmail.com.
 */

/**
 * 狄克斯特拉算法，有权图最短路径搜索
 * */

import hasOwn from '../utils/hasOwn';

export interface RelationGraph {
    [key: string]: {
        [key: string]: number;
    }
}

export interface SearchProgressGraph {
    [key: string]: {
        parent?: string;
        cost?: number;
    }
}

export type SearchResultGraph = {
    name: string;
    cost?: number;
}[];

export type ProcessedRelation = Record<string, boolean>;

export default function dijkstraSearch(relationGraph: RelationGraph, starter: string, target: string): SearchResultGraph {
    let progressGraph: SearchProgressGraph = {};
    let resultGraph: SearchResultGraph = [];

    let processedRelation: ProcessedRelation = {};

    let processRelationName = starter;
    progressGraph[starter] = {
        parent: null,
    };

    while (processRelationName) {
        let neighborMap = relationGraph[processRelationName];

        for (let name in neighborMap) {
            if (!hasOwn(neighborMap, name)) continue;
            if (!hasOwn(progressGraph, name) || neighborMap[name] < progressGraph[name].cost) {
                progressGraph[name] = {
                    parent: processRelationName,
                    cost: neighborMap[name],
                }
            }
        }

        processedRelation[processRelationName] = true;
        processRelationName = findLowestCostRelation(progressGraph, processedRelation);
    }

    indexTargetRelationInProgressGraph(progressGraph, resultGraph, target);

    return resultGraph;
}

function findLowestCostRelation(progressGraph: SearchProgressGraph, processedRelation: ProcessedRelation): string {
    let relationName = undefined,
        relationCost = Number.MAX_VALUE;

    for (let name in progressGraph) {
        if (!hasOwn(progressGraph, name)) continue;
        if (hasOwn(processedRelation, name)) continue;

        if (!relationName || progressGraph[name].cost < relationCost) {
            relationName = name;
            relationCost = progressGraph[name].cost;
        }
    }

    return relationName;
}

function indexTargetRelationInProgressGraph(progressGraph: SearchProgressGraph, resultGraph: SearchResultGraph, target: string) {
    let targetRelation = progressGraph[target];

    if (!targetRelation) return;

    resultGraph.unshift({
        name: target,
        cost: targetRelation.cost,
    });

    if (!targetRelation.parent) return;

    return indexTargetRelationInProgressGraph(progressGraph, resultGraph, targetRelation.parent);
}