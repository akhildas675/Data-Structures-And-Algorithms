class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addvertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
        return
    }

    addedge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addvertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addvertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2) {
        return (this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1))
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (let adjacency of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacency)
        }
        delete this.adjacencyList[vertex]
    }

    bfs(start) {
        if (!this.adjacencyList[start]) {
          return;
        }
    
        let queue = [start];
        let visited = new Set();
        visited.add(start);
    
        while (queue.length) {
          let vertex = queue.shift();
          console.log(vertex);
    
          for (let neighbor of this.adjacencyList[vertex]) {
            if (!visited.has(neighbor)) {
              visited.add(neighbor);
              queue.push(neighbor);
            }
          }
        }
      }
  
      dfs(start, visited = new Set()) {
        if (!this.adjacencyList[start]) {
          return;
        }
    
        visited.add(start);
        console.log(start);
    
        for (let neighbor of this.adjacencyList[start]) {
          if (!visited.has(neighbor)) {
            this.dfs(neighbor, visited);
          }
        }
      }
  
      getDegree(vertex){
        if(!this.adjacencyList[vertex]){
            console.log(`${vertex} is not present in the graph`)
        }
        return this.adjacencyList[vertex].size;
    }  
    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + '->' + [...this.adjacencyList[vertex]])
        }
    }
}
const graph = new Graph()
graph.addvertex('a')
graph.addvertex('b')
graph.addvertex('c')
graph.addedge('a','b')
graph.addedge('b','c')
// // graph.removeEdge('b','c')
// console.log(graph.hasEdge('a','c'))
// graph.removeVertex('b')

graph.display()
// graph.dfs('b')


//test

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');

// graph.addEdge('A', 'B');
// graph.addEdge('B', 'C');
// graph.addEdge('C', 'D');
// graph.addEdge('D', 'E');
// // graph.addEdge('A', 'E');

// console.log('BFS:');
// graph.bfs('A');

// console.log('\nDFS:');
// graph.dfs('A');

// graph.display()