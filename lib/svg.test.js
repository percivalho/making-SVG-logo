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
    describe('SVG generateMarkDown effect', () => {
        it('check mardown generated effect', () => {
          const svg = new SVG();
          svg.data.logo_color = "yellow";
          svg.data.logo_shape = "Rectangle";
          svg.data.logo_text = "PH";
          svg.data.logo_effect = "Blink";
          svg.data.text_color = "cyan";
          svg.data.text_effect = "Rotate"
          const expected_output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <g>
        <rect width="200" height="100" x="50" y="50" fill="yellow"/>
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
    </g>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="cyan" transform="rotate(20)">PH</text>

</svg>`;
          expect(svg.generateMarkdown(svg.data)).toEqual(expected_output);
        });
      });    

      describe('SVG generateMarkDown effect', () => {
        it('check mardown generated effect', () => {
          const svg = new SVG();
          svg.data.logo_color = "yellow";
          svg.data.logo_shape = "Ellipse";
          svg.data.logo_text = "PH";
          svg.data.logo_effect = "Gradient";
          svg.data.text_color = "cyan";
          svg.data.text_effect = "Skew"
          const expected_output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="yellow" />
        <stop offset="100%" stop-color="blue" />
    </linearGradient>
    <ellipse cx="150" cy="100" rx="120" ry="80" fill="url(#Gradient2)"/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="cyan" transform="skewX(10) skewY(10)">PH</text>

</svg>`;
          expect(svg.generateMarkdown(svg.data)).toEqual(expected_output);
        });
      });    

});

