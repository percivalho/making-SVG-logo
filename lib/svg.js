const fs = require('fs');
const {Shape, Rectangle, Square, Circle, Ellipse, Triangle, Star, Line}  = require('./shape.js');

class SVG{
    constructor(){
        this.data = {
            logo_text: "",
            text_color: "",
            text_effect: "",
            logo_shape: "",
            logo_color: "",
            logo_effect: "",
        };
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

        let logo_effect_text = ""
        if (data.logo_effect == "Blink"){

            shapesvg = `<g>
        ${shape1.render()}
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
    </g>`;
        }

        if (data.logo_effect == "Gradient"){
            let shapeline = shape1.render().replace(data.logo_color, "url(#Gradient2)");
            shapesvg = `<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
    <stop offset="0%" stop-color="${data.logo_color}" />
    <stop offset="100%" stop-color="blue" />
</linearGradient>
${shapeline}
`
        }
        let textsvg = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text_color}">${data.logo_text}</text>`;
        if (data.text_effect == 'Rotate'){
            textsvg = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text_color}" transform="rotate(20)">${data.logo_text}</text>`;            
        } 
        if (data.text_effect == 'Skew'){
            textsvg = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text_color}" transform="skewX(10) skewY(10)">${data.logo_text}</text>`;            
        } 


        let text = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${shapesvg}

    ${textsvg}

</svg>`;
        return text;
    }
    
}

module.exports = SVG;


