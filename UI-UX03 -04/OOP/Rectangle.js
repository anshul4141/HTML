class Rectangle extends Shape {

    constructor(length, bredth) {
        super();
        this.length = length;
        this.bredth = bredth;
    }

    area() {
        let area = this.length * this.bredth;
    }

}