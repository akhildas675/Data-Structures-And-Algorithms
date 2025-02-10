const { log } = require("console");

class TriesNode {
    constructor() {
        this.children={};
        this.isEndOfWord=false
    }
}

class Tries {
    constructor() {
        this.root=new TrieNode();
        this.count=0;
    }

    insert(word){
        let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode();
            }
            node=node.children[char]
        }
        node.isEndOfWord=true;
        this.count++
    }

    longest(){
        let longest=this.findLongest(this.root,"");
        console.log(longest);
        
    }

    findLongest(node,currentWord){
        let longest=currentWord

        for(let char in node.children){
            let nextWord =currentWord+char;
            let childNode=node.children[char];

            if(childNode.isEndOfWord){
                let candidate=this.findLongest(childNode,nextWord)
                if(candidate.length>longest.length){
                    longest=candidate
                }
            }
        }
    }
}