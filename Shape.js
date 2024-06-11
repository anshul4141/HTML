class Shape {

    // constructor(color, borderWidth){

    //     this.Color = color;
    //     this.borderWidth = borderWidth;

    // }

    color = '';
    borderWidth = 0;

    getColor() {
        return this.color;
    }

    setColor(newColor) {

        this.color = newColor;

    }

    getBorderWidth() {
        return this.borderWidth;
    }

    setBorderWidth(newBorder) {

        this.borderWidth = newBorder;

    }

    detail() {

        document.write('Color : = ' + this.color + ' ' + 'BorderWidth : = ' + this.borderWidth);

    }

}

var a = new Shape();

a.setColor('red');
a.setBorderWidth(4);
console.log(a.getColor());
console.log(a.getBorderWidth());
