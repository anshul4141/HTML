class Shape {

    static PI = 3.14;

    constructor() {

        document.write(`<h1>This is default Constructor</h1>`)

    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    getBorderWidth() {
        return this.borderWidth;
    }

    setBorderWidth(borderWidth) {
        this.borderWidth = borderWidth;
    }

    area() {
        document.write(`<h1>This is area method</h1>`);
    }

}