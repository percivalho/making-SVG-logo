// define the basic class Shape
class Shape {
    constructor() {
        this.color;
    }  
    // add the setColor method
    setColor(color){
        this.color = color;
    }
}

// define Rectangle that extends from Shape
class Rectangle extends Shape{
    constructor(){
        super();
    }
    render(){
        return `<rect width="200" height="100" x="50" y="50" fill="${this.color}"/>`;
    }
}

// define Square that extends from Shape
class Square extends Shape {
    constructor(){
        super();
    }
    render(){
        return `<rect width="150" height="150" x="75" y="25" fill="${this.color}"/>`;
    }
}

// define Circle that extends from Shape
class Circle extends Shape {
    constructor(){
        super();
        //this.r = r;
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
}

// define Ellipse that extends from Shape
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

// define Triangle that extends from Shape
class Triangle extends Shape {
    constructor(){
        super();
    }
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// define Star that extends from Shape
class Star extends Shape {
    constructor(){
        super();
    }
    render(){
        return `<polygon points="150,10 180,60 240,70 195,115 200,175 150,150 100,175 105,115 60,70 120,60" fill="${this.color}"/>`;
    }
}

// define Line that extends from Shape
class Line extends Shape {
    constructor(){
        super();
    }
    render(){
        return `<line x1="50" y1="50" x2="250" y2="150" stroke-width="10" stroke="${this.color}"/>`;
    }
}

module.exports = { Shape, Rectangle, Square, Circle, Ellipse, Triangle, Star, Line};
