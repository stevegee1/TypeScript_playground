/**
 * arrayManipulation - toy with array in TS
 */



type UserDetail= {
    name: string,
    age: number
}
//Array can be defined like this ...
let steveArray: Array<UserDetail>=[]

//Or
let steveArry: UserDetail[] = []
steveArray.push({
    name:"segun",
    age:11
})
