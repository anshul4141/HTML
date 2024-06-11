class Hello {

    constructor(hello) {
        this.Hello = hello;
    }

    printHello(){

        console.log(this.Hello);

    }

}

let a = new Hello("hello world");

a.printHello();