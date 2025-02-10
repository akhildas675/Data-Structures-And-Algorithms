class Graph {
    constructor() {
        this.adjacencyList={}
    }

    addvertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]= new Set()
        }

        return
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addvertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1,vertex2){
        return (this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1))
    }

    display(){
        for(let vertex  in this.adjacencyList){
            console.log(vertex + '-> '+[...this.adjacencyList[vertex]])
        }
    }
}

const graph = new Graph()

graph.addvertex('a')
graph.addvertex('b')
graph.addvertex('c')