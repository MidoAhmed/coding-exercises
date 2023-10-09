# Loop detection

## Statement:

In this simple network, each node is linked to at most one outgoing node in a one way forward direction.

![A simple network example](SimpleNetwork.png)
A simple network example

Implement function findNetworkEndpoint(startNodeId, fromIds, toIds) which should return the last node id of the network found when starting from the node with id startNodeId and following the links of the network.

In the above example, the endpoint node when starting from node #2 (or any other node) is node #5.

fromIds and toIds are two arrays of the same length which describe the one-way links of the network (fromIds[i] is linked to toIds[i]).
In the example above, fromIds is: [1, 7, 3, 4, 2, 6, 9] and toIds is: [3, 3, 4, 6, 6, 9, 5]

In case you run into a loop when traversing the network, the function should return the id of the last node traversed before closing the loop.

> Constraints:
>
> - 0 < number of links < 10000
> - A node cannot be directly linked to itself
