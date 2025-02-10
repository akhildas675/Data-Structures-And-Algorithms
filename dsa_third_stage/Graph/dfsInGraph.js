const { verify } = require("crypto");

class Graph {
    constructor() {
        this.adjacencyList={};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
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

    hasEdge(vertex1,vertex2){
        return (this.adjacencyList[vertex1].has(vertex2)&& this.adjacencyList[vertex2].has(vertex1))
    }

    dfs(start,visited=new Set()){
        if(!this.adjacencyList[start]){
            return
        }

        visited.add(start)
        console.log(start);

        for(let neighbor of this.adjacencyList[start]){
            if(!visited.has(neighbor)){
                this.dfs(neighbor,visited)
            }
        }
        
    }



    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+" -> "+[...this.adjacencyList[vertex]]);
            
        }
    }

}

let graph = new Graph();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")

graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("B","D")

graph.display()

console.log("dfs");

graph.dfs("A")


