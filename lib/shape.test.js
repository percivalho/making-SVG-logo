// Constructor Shape is imported.
const { Rectangle, Square, Circle, Ellipse, Triangle, Star}  = require('./shape.js');

// A testing suite for Shape is created.
describe('Shape', () => {

  /*describe('Rectangle render', () => {
    it('Check render in Rectangle', () => {
      const shape = new Rectangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });*/


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

