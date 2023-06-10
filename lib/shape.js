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
    constructor(){
        super();
        //this.width = width;
        //this.height = height;
    }
    render(){
        return `<rect width="200" height="100" x="50" y="50" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    constructor(){
        super();
        //this.length = length;
    }
    render(){
        return `<rect width="150" height="150" x="75" y="25" fill="${this.color}"/>`;
    }
}

class Circle extends Shape {
    constructor(){
        super();
        //this.r = r;
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
}

class Ellipse extends Shape {
    constructor(){
        super();
        //this.rx = rx;
        //this.ry = ry;
    }
    render(){
        //<ellipse cx="75" cy="75" rx="20" ry="5"/>
        return `<ellipse cx="150" cy="100" rx="120" ry="80" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape {
    constructor(){
        super();
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Star extends Shape {
    constructor(){
        super();
    }
    render(){
        return `<polygon points="150,10 180,60 240,70 195,115 200,175 150,150 100,175 105,115 60,70 120,60" fill="${this.color}"/>`;
    }
}
class Line extends Shape {
    constructor(){
        super();
    }
    render(){
        return `<line x1="50" y1="50" x2="250" y2="150" stroke-width="10" stroke="${this.color}"/>`;
    }
}

module.exports = { Rectangle, Square, Circle, Ellipse, Triangle, Star, Line};
