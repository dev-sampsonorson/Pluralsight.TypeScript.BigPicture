export class Customer {
    name: string;
    isActive: boolean;

    constructor(name: string) {
        this.name = name;
        this.isActive = true;
    }

    private announce() {
        return "Hello, my name is " + this.name;
    }
}

class SpecialCustomer extends Customer {

}

// create a new instance
let firstCustomer = new Customer("Alice");