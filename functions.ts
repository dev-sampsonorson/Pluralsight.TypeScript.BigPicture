function simpleFunction(name: string, isActive: boolean): number {
    return 1;
}

function anotherFunction(): void {

}

function createMessage(name: string) { // no explicit return type
    return "Hello, " + name;
}

let result = createMessage("Simon"); // no explicit variable type