class TriesNode{
    constructor() {
        this.children={};
        this.isEndOfWord=false;
    }
}

class Tries {
    constructor() {
        this.root=new TriesNode();
        this.count =0;
    }

    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TriesNode();
            }
            node=node.children[char]
        }

        node.isEndOfWord=true;
        this.count++
    }


    display(){
        let words=[];
        let dfs=(node,currentWord)=>{
            if(node.isEndOfWord){
                words.push(currentWord)
            }
            for(let char in node.children){
                dfs(node.children[char],currentWord+char)
            }
        }
        dfs(this.root,"");
        return words;
    }


}

let tries= new Tries();

tries.insert("car")
tries.insert("cat")
tries.insert("cap")

console.log(tries.display());
