/**
 * Defining a class User
 * @email:string
 * @name:string
 */

class Users {
  
  private age: number=34

  constructor(public email:string, public name:string) {
   
  }
 get AgeGetter():number{
    return this.age
 }
}

const hiSteve = new Users("XXg@com", "Steve");
