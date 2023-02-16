//Write a function count(obj) that returns the number of properties in the object:

    let user = {
        name: 'John',
        age: 30
    };

alert( count(user) ); // 2



//solution
function count(obj) {
    return Object.keys(obj).length;
}