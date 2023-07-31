/**
 * unionType- playing with type Union on TS
 */

//This function accepts user,which string(username) or 
//mobile number(type number)
function Register(user:string |number){
   if(typeof user ==="string"){
    user.toUpperCase()
   }
   user.toString

}