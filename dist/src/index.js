"use strict";
/**
 * Defining a class User
 * @email:string
 * @name:string
 */
class Users {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.age = 34;
    }
    get AgeGetter() {
        return this.age;
    }
}
const hiSteve = new Users("XXg@com", "Steve");
