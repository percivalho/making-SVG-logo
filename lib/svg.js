const fs = require('fs');
const {Shape, Rectangle, Square, Circle, Ellipse, Triangle, Star, Line}  = require('./shape.js');

class SVG{
    constructor(){

    }
    writeToFile(fileName, data) {
        console.log('Generating Logo.....');
        fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(`Generated logo.svg`)
        )
    }
    // generate the Markdown
    generateMarkdown(data){
        var shape1 = new Rectangle();
        var shapesvg = ""
        switch (data.logo_shape){
            case 'Rectangle': 
                shape1 = new Rectangle();
                break;
            case 'Square':
                shape1 = new Square();
                break;
            case 'Circle':
                shape1 = new Circle();
                break;
            case 'Ellipse':
                shape1 = new Ellipse();
                break;
            case 'Triangle':
                shape1 = new Triangle();
                break;
            case 'Star':
                shape1 = new Star();
                break;
        }
        shape1.setColor(data.logo_color);
        shapesvg = shape1.render();
        //console.log(shapesvg);

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${shapesvg}
    
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text_color}">${data.logo_text}</text>
    
    </svg>`;
    }
    
}

module.exports = SVG;


