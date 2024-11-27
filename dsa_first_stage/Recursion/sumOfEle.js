function sumOfEle(params) {
    if(params.length===0){
        return 0
    }

    return params[0]+sumOfEle(params.slice(1))
}

const array = [1, 2, 3, 4, 5];
console.log(sumOfEle(array));