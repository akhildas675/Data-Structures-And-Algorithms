class Graph {
    constructor() {
        this.adjacenyList={}
    }

    addvertex(vertex){
        if(!this.adjacenyList[vertex]){
            this.adjacenyList[vertex]=new Set()
        }
        return
    }

    addedge(vertex1,vertex2){
        if(!this.adjacenyList[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjacenyList[vertex2]){
            this.addvertex(vertex2)
        }
        this.adjacenyList[vertex1].add(vertex2)
        this.adjacenyList[vertex2].add(vertex1)

        
    }

    display(){
        for( let vertex in this.adjacenyList){
            console.log(vertex + '->' + [...this.adjacenyList[vertex]]);
            
        }
    }


}


let graph = new Graph();

graph.addvertex('A')
graph.addvertex('B')
graph.addvertex('C')

graph.addedge('A','B')
graph.addedge('B','C')

graph.display()