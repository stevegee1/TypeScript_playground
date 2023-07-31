"use strict";
/**
 * objectManipulate - Working with and manipulating object using type "Alias"
 */
//TypeScript couldn't catch the bug haha
let UserRogue = { name: "segun", age: 11, email: "@gmail.com" };
function objectManipulate(pt) {
    return pt;
}
//oops!
objectManipulate(UserRogue);
