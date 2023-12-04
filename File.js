/*
    MEMBERSHIP OPERATOR IN PYTHON

    'abc' in 'abcfghd'
    'g' in [1,32,4.'g']
     1 in {1,2,3,4,5}
*/


const str1 = 'checkForMembershipOperator';
const arr1 = [1,2,3,4,5,6];
const set1 = new Set([1,2,3,6,4,8]);
const obj1 = {'a' : 'a1' , 'b' : 'b1' , 'c' : 'c1'}

console.log('String')
console.log(str1.includes('x'));
console.log(`Carefully look into this: " ${str1.includes('c') === str1.includes('Mem') === str1.includes('Op')} "`);

console.log('Array')
console.log(arr1.includes('x'));
console.log(arr1.includes(1) === arr1.includes(4) === arr1.includes(5));

console.log('Sets')
console.log(set1.has(1));
console.log(set1.has('x'));

console.log('Objects')
console.log('a' in obj1);
console.log(obj1.hasOwnProperty('a'))