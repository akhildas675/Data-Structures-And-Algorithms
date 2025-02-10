class Graph {
    constructor() {
        this.adjacencyList={};

    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set();
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }


    bfs(start){
        if(!this.adjacencyList[start]){
            return 
        }

        let queue=[start];

        let visited=new Set();
        while (queue.length) {
            let vertex = queue.shift();
            console.log(vertex);
            visited.add(vertex)

            for(let neighbor of this.adjacencyList[vertex]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor)

                }
            }
            
        }
    }




    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return 
        }

        for(let adjacency of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacency)
        }
        delete this.adjacencyList[vertex]
    }


    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex +'->'+[...this.adjacencyList[vertex]]);
            
        }
    }
}


let graph = new Graph();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")


graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","D")
graph.addEdge("B","E")
graph.addEdge("C","F")


graph.display()

console.log("bfs");
graph.bfs("A")
