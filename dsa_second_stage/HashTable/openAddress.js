
class HashTable {
    constructor(size) {
        this.table =new Array(size);
        this.size=size;

    }

    hash(key){
        let total = 0;

        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key,value){
        let index = this.hash(key);
        while (this.table[index]&&this.table[index][0]!==key) {
            index = (index+1) % this.size
        }

        this.table[index]=[key,value]
    }

    get(key){
        let index = this.hash(key);
        while (this.table[index]) {
            if(this.table[i][0]==key){
                return this.table[i][1]
            }
            index=(index+1)%this.size
        }
        return undefined
    }

    print(){
        for(let i =0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
                
            }
        }
    }
}

let hashTable = new HashTable(10);

hashTable.set("name","akhildas")

hashTable.print()