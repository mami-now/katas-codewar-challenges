// Consider an array/list of sheep where some sheep may be missing from their place. 
//We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countNumberOfSheeps(sheeps){
  const presentSheeps=sheeps.filter(sheep => sheep==true)
  return presentSheeps.length
}
console.log(countNumberOfSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]));

  //learning from others 

  function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }
console.log(countNumberOfSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]));

 /*  The `Boolean` constructor in JavaScript is typically used to explicitly convert values to their Boolean representation, where any non-falsy value is considered `true`, and falsy values are considered `false`. Here's how it works:

- Falsy values in JavaScript include `false`, `null`, `undefined`, `0`, `-0`, `NaN`, `""` (empty string), and `document.all` (a browser-specific object).
- All other values are considered truthy, including `true`, non-empty strings, non-zero numbers, and objects.

So, when you use `Boolean` as a callback function in the `filter` method, it effectively removes the falsy values from the array, leaving only the truthy values.

In the context of the `countSheeps` function, it's used to filter out the falsy values (`false`, `null`, or `undefined`) from the `arrayOfSheeps`, leaving only the `true` values, which represent the presence of sheep.

In summary, while the `Boolean` constructor can be used to explicitly convert values to their Boolean representation, in this context, it's used to filter out falsy values, effectively treating them as `false`, and keeping truthy values as `true`.....*/