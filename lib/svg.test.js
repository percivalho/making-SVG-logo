// Constructor Shape is imported.
const { Shape, Rectangle, Square, Circle, Ellipse, Triangle, Star, Line}  = require('./shape.js');
const SVG = require('./svg.js');

// Shape Test Cases
describe('SVG', () => {
    describe('SVG generateMarkDown', () => {
      it('check mardown generated', () => {
        const svg = new SVG();
        svg.data.logo_color = "blue";
        svg.data.logo_shape = "Triangle";
        svg.data.logo_text = "PH";
        svg.data.logo_effect = "None";
        svg.data.text_color = "black";
        svg.data.text_effect = "None"
        const expected_output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="150, 18 244, 182 56, 182" fill="blue" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">PH</text>

</svg>`;
        expect(svg.generateMarkdown(svg.data)).toEqual(expected_output);
      });
    });
});

