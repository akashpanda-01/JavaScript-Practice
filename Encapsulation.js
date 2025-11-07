debugger;
class BankAccount {
    #balance = 0;

    deposite(ammount){
        this.#balance += ammount;
    };

    getBalance(){
        return this.#balance;
    };
};
const acc = new BankAccount();
acc.deposite(500);
console.log(acc.getBalance());
// console.log(acc.#balance);