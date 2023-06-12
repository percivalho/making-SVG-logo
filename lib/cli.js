// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./svg.js');

// Create an array of questions for user input
const questions = [    
    {
      type: 'input',
      message: 'Enter the Text for the logo (must be within 3 characters)',
      name: 'logo_text',
      validate: function(value) {
        if (value.length <= 3) {
            return true;
        } else {
            return 'Logo must be within 3 characters';
        }
      }      
    },
    {
      type: 'input',
      message: 'What is the logo text color?',
      name: 'text_color',
      validate: function(value) {
        if (colorCheck(value)){
            return true;
        } else {
            return "Not a valid color keyword or color hex code";
        }    
      }
    },
    {
        type: 'list',
        message: 'Any effect on text?',
        name: 'text_effect',
        choices: ['None', 'Rotate', 'Skew'],
    },  
    {
      type: 'list',
      message: 'Select a shape for the logo',
      name: 'logo_shape',
      choices: ['Rectangle', 'Square', 'Circle', 'Ellipse', 'Triangle', 'Star', 'Line'],
    },
    {
      type: 'input',
      message: 'What is the shape color?',
      name: 'logo_color',
      validate: function(value) {
        if (colorCheck(value)){
            return true;
        } else {
            return "Not a valid color keyword or color hex code";
        }    
      }
    },    
    {
        type: 'list',
        message: 'Any effect on shape?',
        name: 'logo_effect',
        choices: ['None', 'Blink', 'Gradient'],
    },  
  ];

function colorCheck(value){
    // found the 140 valid color names from the following website
    // http://web.simmons.edu/~grovesd/comm244/notes/week3/css3-color-names
    const validColorNames = [
        'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 
        'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 
        'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 
        'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 
        'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 
        'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 
        'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 
        'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 
        'gray', 'green', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 
        'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 
        'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 
        'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 
        'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 
        'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 
        'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 
        'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 
        'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 
        'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 
        'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 
        'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 
        'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 
        'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 
        'yellowgreen'
      ];
    // Check if it is a valid hex color code
    // it is found from the following website for regex on valid hex code:
    // https://www.geeksforgeeks.org/how-to-validate-hexadecimal-color-code-using-regular-expression/
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value)) {
        return true;
    }
    let color = value.toLowerCase();    
    if (validColorNames.includes(color)){
        return true;
    }
    return false;
}


class CLI {
  constructor() {
  }
  run() {
    return inquirer
      .prompt(questions)
      .then(data => {
        const svg = new SVG();
        let template = svg.generateMarkdown(data);
        svg.writeToFile('./logo.svg', template);
        })      
      .then(() => console.log('Created logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

}

module.exports = CLI;
