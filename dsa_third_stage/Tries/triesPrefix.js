class TriesNode {
    constructor() {
        this.children={};
        this.isEndOfWord=false
    }
}

class Tries {
    constructor() {
        this.root=new TriesNode();
        this.count=0
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

    startWith(prefix){
        let node = this.root;
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return node.isEndOfWord;
    }

    display(){
        let word=[];
        let dfs=(node,currentWord)=>{
            if(node.isEndOfWord){
                word.push(currentWord)
            }

            for(let char in node.children){
                dfs(node.children[char],currentWord+char)
            }
        }

        dfs(this.root,"")
        return word
        
    }
}

let trie = new Tries();

trie.insert("car")
trie.insert("cat")
trie.insert("cap")
trie.insert("carry")

console.log(trie.display());


console.log(trie.startWith("cal"));
