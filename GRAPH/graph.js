class Graph
{
    constructor()
    {
        this.adjacencyList = {};
    }

    addVertex(vertex)
    {
        if(!this.adjacencyList[vertex])
        {
            this.adjacencyList[vertex] = []; 
        }
    }

    addEdge(v1,v2)
    {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
        
    }

    removeEdge(v1,v2)
    {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }

    removeVertex(vertex)
    {
        while(this.adjacencyList[vertex].length)
        {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(adjacentVertex,vertex);
        }
        delete this.adjacencyList[vertex];
    }

    depthFirstSearch_Recursive(startVertex)
    {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        function dfs(vertex)
        {
            if(!vertex)
            {
                return null;
            }
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    return dfs(neighbour);
                }
            });
        }
        dfs(startVertex);
        return result;

    }

    depthFirstSearch_Iterative(startVertex)
    {
        const stack = [startVertex];
        const visited = {};
        const result = [];
        let currrentVertex;
        visited[startVertex] = true;
        while(stack.length)
        {
            currrentVertex = stack.pop();
            result.push(currrentVertex);
            this.adjacencyList[currrentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            });
        }
        return result;
    }

    breadthFirstSearch(startVetex)
    {
        const queue = [startVetex];
        const visited = {};
        const result = [];
        let currrentVertex;
        visited[startVetex] = true;
        while(queue.length)
        {
            currrentVertex = queue.shift();
            result.push(currrentVertex);

            this.adjacencyList[currrentVertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            })
        }

        return result;
    }

}

let g = new Graph();
// g.addVertex(1);
// g.addVertex(2);
// g.addVertex(3);
// g.addVertex(4);
// g.addEdge(1,2);
// g.addEdge(1,4);
// g.addEdge(2,3);
// g.addEdge(3,4);
// console.log(g);
// g.removeEdge(3,4);
// console.log(g);
// g.removeVertex(1);
// console.log(g);

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
//console.log(g);
console.log(g.depthFirstSearch_Recursive("A"));
console.log(g.depthFirstSearch_Iterative("A"));
console.log(g.breadthFirstSearch("A"));
