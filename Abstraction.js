debugger;
class CoffeeMachine{
    startMachine(){
        console.log("Machine Start");
    };
    boilWater(){
        console.log("Boiling Water");
    };
    makeCoffee(){
        this.startMachine();
        this.boilWater();
        console.log("Coffee Ready");
    };
};
const myCoffee = new CoffeeMachine();
myCoffee.makeCoffee();