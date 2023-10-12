"use strict"
// toString methods
const names =[ "felix", "danie", "tobi", "eric", "amara", "felix", "felix", "danie", "tobi", "eric", "amara", "felix"];
// console.log(names.toString());

// join methods
// the method join in an array is use to combines the element of an arrays together and you can specified the space in betwen . e.g.

// let join = names.join(",");
// console.log(join)

// concat methods
// it is use to join two or more arrays together e.g.
// let name1 = ["papilo", "emeka"]
// let name2 = ["hope", "happiness"]
// let joined = names.concat(name2, name1);
// console.log(joined);

// splice methods
//  it is use to remove element from arrays and also add element to arrays e.g.

// let namecopy = [...names] 
// console.log(namecopy)
// namecopy.splice(1,2) 

//this is the copy of the original arrays. it copy the original arrays into a new arrrays.
// removing element from arrays
// the number 1 stand for the index position where the deleting start from and the number 2 stand for how many items is to be deleted.

// Adding arrays using splice

// namecopy.splice(1,2, "hope", "gift")
// console.log(namecopy)

// the number 1 and 2 will delete while  hope and gift will be added to the arrays.

// slice methods
//  it is use to slice out part of an arrays e.g

// let slice = names.slice(1,3);
// console.log(names)
// console.log(slice)

// this start the sliceing from the index 1 and stop at the index befor 3, it dons't includ 3 and do not delete the original arrays, it use the slicing part to form a new arrays.

// indexOf methods
// it is use to find the index of a value in an arrays e.g

// let nameindex = names.indexOf("amara");
// console.log(nameindex)

// this is use to get the index at the specifild value e.g the able exmple returns 4 becauise amara has the index of 4.

// lastIndex methodsthis return the last index of the last value e.g

// let lastIndex = names.lastIndexOf("felix")
// console.log(lastIndex) 

// it return 11 because felix eppear more than once and the index of the last  one is 11

// flat methods
// it is use to flating an arrays e.g

let num = [ 1,2,3,4,5,[6,7,8,[9,10,11]],12,13,14]
//  here we have arrays inside another array so for us to have just one array we use flat.

//  let flat = num.flat()
//  let flat1 =num.flat(2)
//  console.log(flat)
//  console.log(flat1)

//   the first flat did not flat everything in the array because it take just one step into the array and flatting the first array inside the big array, the second flat take two step into the array. if the you dont know how dip is the array and you just want to flat everything us just in th put in infinity instend of putting a number e.g
// let flat3 = num.flat(Infinity)
// console.log(flat3)

// HIGHER ORDER ARRAY FUNCTION ARE ARRAY OR FUNCTIOLN THAT OPERA ON ANOTHER ARRAYS OR FUNCTIONS

// forEach methodsthis is use to print each element of an array e.g

// names.forEach((n) => {
//     console.log(n)
    
// });

// map mmethods
// it is use to map each element in an array and it can be use to muiltiply, subtrat, add and divide e.g 

// let flatNum =num.flat(Infinity)
// console.log(flatNum)

// using multiplication
// let number1 = flatNum.map((n) =>n*2)
// console.log(number1)

// in the exmple above i get the num variable and flatting it into another varoable then map it by two

// using subtraction
// let number2 = flatNum.map((n) =>n-2)
// console.log(number2)

// using addition
// let number3 = flatNum.map((n) =>n+2)
// console.log(number3)

// using divition
// let number4 = flatNum.map((n) =>n-2)
// console.log(number4)

// filter methods
// it is use to filter an array e.g

// let post = [
//     {tilte:"post1", author:"felix" },
//     {tilte:"post2", author:"danie" },
//     {tilte:"post3", author:"felix" },
//     {tilte:"post4", author:"tobi" },
//     {tilte:"post5", author:"amara" },
//     {tilte:"post6", author:"felix" },
// ]
// let newpost = post.filter(post=>post.author === "felix");
// console.log(newpost)
// here in the example it return all the author that has  felix
// another example


const namesWithE = names.filter(n => names.toLowerCase().includes("E"));
    console.log(namesWithE)








