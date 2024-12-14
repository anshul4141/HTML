class Circle extends Shape {

    constructor(radius) {
        super();
        this.radius = radius;
    }

    setRadius(radius) {

        this.radius = radius;

    }

    getRadius() {

        return this.radius;

    }
    area() {

        let area = Shape.PI * this.radius * this.radius;

        return area;

    }


}