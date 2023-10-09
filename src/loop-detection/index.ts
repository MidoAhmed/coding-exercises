
/**
 * Finds the endpoint of a network given a starting node ID and arrays of from and to IDs.
 * @param {number} startNodeId - The ID of the starting node.
 * @param {number[]} fromIds - An array of from IDs.
 * @param {number[]} toIds - An array of to IDs.
 * @returns {number} The ID of the endpoint of the network.
 */
export function findNetworkEndpoint(startNodeId: number, fromIds: number[], toIds: number[]): number {
    const connectedNodes = new Map<number, number>(fromIds.map((fromId, index) => [fromId, toIds[index]])); 
    const visited = new Set<number>();
    let currentNode = startNodeId;

    while (connectedNodes.has(currentNode) && !visited.has(currentNode)) {
        visited.add(currentNode);
        currentNode = connectedNodes.get(currentNode) as number;
    }

    if (visited.has(currentNode)) {
        // Detected a loop, return the ID of the last node traversed before closing the loop.
        return Array.from(visited).pop() as number;
    }

    return currentNode;
} 