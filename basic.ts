class Employee {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    announce() {
        return "Hello, my name is " + this.name;
    }
}

// create a new instance
let firstEmployee = new Employee("Alice");
let newMessage: string = firstEmployee.announce();

// change the text on the page
let webHeading = document.querySelector('h1');
webHeading!.textContent = newMessage;