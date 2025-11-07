class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    };

    get password(){
        return this.password.toUpperCase();
    }

    set password(value){
        this.password = value;
    }
}

const obj = new User("hii@gmail.com", 123);
console.log(obj.password);