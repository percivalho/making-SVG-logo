# making-SVG-logo

A Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.
Additionally, there are some effects implemented in the shape and the logo text, to make it more dynamic.


## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Installation
  
to install:
1. Inquirer for creating attractive, intuitive prompts and collect user input in a more user-friendly way.
2. Jest for open-source JavaScript testing framework developed by Facebook to perform auto-testing.

  ```md
  npm i inquirer@8.2.4
  npm i -D jest
  ```

## Technologies Used

This application is built using the following technologies:

- **JavaScript**: Programming language for adding interactivity and dynamic content.
- **NodeJS**: an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser.
- **Inquirer**:  interactive command line user interface for Node.js, allowing developers to create attractive, intuitive prompts and collect user input in a more user-friendly way
- **Jest**: open-source JavaScript testing framework developed by Facebook for auto-testing.


## Usage

The user should clone the repository and run 'npm i' to install all dependencies.  Then, they can run 'node index.js' in the command line from the root directory to start the application. Users will be prompted to answer a series of questions about their logo design and the logo SVG file is outputed.


## Features

The application is capable of generating a SVG file for logo design.  It takes user input from the command line and dynamically create the logo based on the questions. It supports a number of shapes including rectangle, square, triangle, circle, ellipse, line, star and the color input can be of color words or hex color code.
there are a number of effects added to the SVG generation including blink, and gradient on the logo shape
Also, for logo text, the effect are skew and rotate, to make the logo generation more multifaceted.

Examples of logo.svg
1.  Basic logo.svg

![Basic Logo](examples/Triangle.svg)

2. Blinking logo.svg

![Basic Logo](examples/Blink.svg)

3. Gradient Logo.svg

![Basic Logo](examples/Gradient.svg)

## Tests

Testing done on:

1. testing on logo text of more than 3 characters
2. testing on logo text of within 3 characters
3. testing on logo valid color word
4. testing on logo invalid color word
5. testing on logo valid hex code (6 digits)
6. testing on logo invalid hex code (6 digits).
7. testing on logo valid hex code (3 digits)
8. testing on logo invalid hex code (3 digits)
9. testing on generating Rectangle.
10. testing on generating Square.
11. testing on generating Circle.
12. testing on generating Ellipse.
13. testing on generating Triangle.
14. testing on generating Star.
15. testing on generating Line.
16. testing on generating Logo matched to questions asked.
17. testing on text effect like skew or rotate
18. testing on shape effect like blink or gradient.



## Resources

Link to Video Demostration:
https://drive.google.com/file/d/1_IE0Gr7eJAl6V1mMHt60J-HkXIDAe9-y/view?usp=sharing

Link to GitHub repo:
https://github.com/percivalho/making-SVG-logo.git




## License 

![License badge](https://img.shields.io/badge/license-MIT-blue.svg)


## Credits

http://web.simmons.edu/~grovesd/comm244/notes/week3/css3-color-names - for the list of 140 valid CSS color names

https://www.geeksforgeeks.org/how-to-validate-hexadecimal-color-code-using-regular-expression/ - for the regex validation on valid hex color code


## Credits and Copyright 
&copy; Copyright 2023 - Present. Percival Ho