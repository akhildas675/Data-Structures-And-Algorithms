class Graph{
    constructor() {
        this.adjacencyList={}
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

    cyclicGraph(){
        let visited=new Set()

        const dfs=(node,parent)=>{
            visited.add(node)
            for(let neighbor of this.adjacencyList[node]){
                if(!visited.has(neighbor)){
                    if(dfs(neighbor,node)){
                        return true
                    }
                }else if(neighbor!==parent){
                    return true;
                }
            }
            return false
        };

        for(let vertex in this.adjacencyList){
            if(!visited.has(vertex)){
                if(dfs(vertex,null)){
                    return true
                }
            }
        }
        return false
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(`${vertex} -> ${[...this.adjacencyList[vertex]].join(', ')}`);
            
        }
    }
}

let graph = new Graph

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')

graph.addEdge('A','B')
graph.addEdge('B','C')
graph.addEdge('C','D')
graph.addEdge('D','A')

graph.display()

console.log("Has Cycle:", graph.cyclicGraph());
