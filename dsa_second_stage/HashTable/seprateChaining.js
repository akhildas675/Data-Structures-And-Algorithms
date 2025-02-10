class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = []; 
        }
        const bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Update value if key exists
                return;
            }
        }
        bucket.push([key, value]); // Add new key-value pair
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) {
            return undefined; // Return undefined if bucket is empty
        }
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }
        return undefined; // Key not found
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        if (!bucket) {
            return; // Nothing to remove if bucket is empty
        }
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // Remove the key-value pair
                return;
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) { // Check if bucket exists
                console.log(i, this.table[i]);
            }
        }
    }
}

const hashTable = new HashTable(10);
hashTable.set("name", "John");
hashTable.set("name", "John");
hashTable.set("mane", "Joel");
hashTable.set("mane", "Akhil");

hashTable.set("city", "New York");
hashTable.set("gender", "lgbtq");

console.log(hashTable.get("name")); // Output: John
console.log(hashTable.get("age")); // Output: undefined
console.log(hashTable.get("city")); // Output: New York
hashTable.display();

hashTable.remove("age");
hashTable.display();
