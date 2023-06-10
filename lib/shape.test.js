// Constructor Shape is imported.
const { Shape, Rectangle, Square, Circle, Ellipse, Triangle, Star, Line}  = require('./shape.js');


// Rectangle Test Cases
describe('Rectangle', () => {
    // A Rectangle Render function
    describe('Rectangle render', () => {
      it('Check render in Rectangle', () => {
        const shape = new Rectangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect width="200" height="100" x="50" y="50" fill="blue"/>');
      });
    });
});

// Square Test Cases
describe('Square', () => {
    // A Square Render function
    describe('Square render', () => {
      it('Check render in Square', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect width="150" height="150" x="75" y="25" fill="blue"/>');
      });
    });
});

// Circle Test Cases
describe('Circle', () => {
    // A Circle Render function
    describe('Circle render', () => {
      it('Check render in Circle', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
      });
    });
});

// Ellipse Test Cases
describe('Ellipse', () => {
    // A Ellipse Render function
    describe('Ellipse render', () => {
      it('Check render in Ellipse', () => {
        const shape = new Ellipse();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<ellipse cx="150" cy="100" rx="120" ry="80" fill="blue"/>');
      });
    });
});


// A testing suite for Shape is created.
describe('Shape', () => {

  // for Triangle
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('Triangle render', () => {
    it('Check render in Triangle', () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });

});

// Star Test Cases
describe('Star', () => {
    // A Star Render function
    describe('Star render', () => {
      it('Check render in Star', () => {
        const shape = new Star();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150,10 180,60 240,70 195,115 200,175 150,150 100,175 105,115 60,70 120,60" fill="blue"/>');
      });
    });
});

// Line Test Cases
describe('Line', () => {
    // A Line Render function
    describe('Line render', () => {
      it('Check render in Line', () => {
        const shape = new Line();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<line x1="50" y1="50" x2="250" y2="150" stroke-width="10" stroke="blue"/>');
      });
    });
});


