/**
 * objectManipulate - Working with and manipulating object using type "Alias"
 */

//defining type alias "User"
type User= {
    name:string,
    age: number
}

//TypeScript couldn't catch the bug haha
let UserRogue= {name:"segun", age:11, email:"@gmail.com"}
function objectManipulate(pt:User):User{
   return pt;
}
//oops!
objectManipulate(UserRogue)