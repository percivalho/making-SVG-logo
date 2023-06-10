// Constructor class 
// <rect x="10" y="10" width="30" height="30"/>
// <circle cx="25" cy="75" r="20"/>
// <ellipse cx="75" cy="75" rx="20" ry="5"/>
// <polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145"/>
// <polygon points="150, 18 244, 182 56, 182" fill="blue" />');

class Shape {
    constructor() {
        this.color;
        //this.x = x;
        //this.y = y;
        //this.color = color;
    }  
    setColor(color){
        this.color = color;
    }
}

class Rectangle extends Shape{
    constructor(x, y, width, height, color){
        super(x, y, color);
        this.width = width;
        this.height = height;
    }
    render(){
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    constructor(x, y, length, color){
        super(x, y, color);
        this.length = length;
    }
    render(){
        return `<rect x="${this.x}" y="${this.y}" width="${this.length}" height="${this.length}" fill="${this.color}"/>`;
    }
}

class Circle extends Shape {
    constructor(x, y, r, color){
        super(x, y, color);
        this.r = r;
    }
    render(){
        return `<circle cx="${this.x}" cy="${this.y}" r="${this.r}" fill="${this.color}"/>`;
    }
}

class Ellipse extends Shape {
    constructor(x, y, rx, ry, color){
        super(x, y, color);
        this.rx = rx;
        this.ry = ry;
    }
    render(){
        //<ellipse cx="75" cy="75" rx="20" ry="5"/>
        return `<ellipse cx="${this.x}" cy="${this.y}" rx="${this.rx}" ry="${this.ry}" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape {
    constructor(){
        super();
        this.x = 150;
        this.y = 18;
        this.x1 = 244;
        this.y1 = 182;
        this.x2 = 56;
        this.y2 = 182;
    }
    render(){
        return `<polygon points="${this.x}, ${this.y} ${this.x1}, ${this.y1} ${this.x2}, ${this.y2}" fill="${this.color}" />`;
    }
}

class Star extends Shape {
    constructor(x, y, x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7, x8, y8, x9, y9, color){
        super(x, y, color);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.x4 = x4;
        this.y4 = y4;
        this.x5 = x5;
        this.y5 = y5;
        this.x6 = x6;
        this.y6 = y6;
        this.x7 = x7;
        this.y7 = y7;
        this.x8 = x8;
        this.y8 = y8;
        this.x9 = x9;
        this.y9 = y9;
    }
    render(){
        return `<polygon points="${this.x} ${this.y} ${this.x1} ${this.y1} ${this.x2} ${this.y2} ${this.x3} ${this.y3} ${this.x4} ${this.y4} ${this.x5} ${this.y5} ${this.x6} ${this.y6} ${this.x7} ${this.y7} ${this.x8} ${this.y8} ${this.x9} ${this.y9}" fill="${this.color}" />`;
    }
}

module.exports = { Rectangle, Square, Circle, Ellipse, Triangle, Star };
