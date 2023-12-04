/*
    ITERATING LIST/TUPLE IN PYTHON

    L = range(10)
    for j in L:
        print(j,end=' ')
    
*/


const array1 = [1,5,9,7,8,6,3];

for (var k of array1){
    console.log(k);
}

console.log('Here comes second iteration');

array1.forEach((itr) => {
    console.log(itr);
})