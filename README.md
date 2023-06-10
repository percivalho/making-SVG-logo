# making-SVG-logo

A Node.js command-line application that takes in user input to generate a logo and save it as an SVG file. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.


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
- **Inquirer**:  


## Usage

The user should clone the repository and run 'npm i' to install all dependencies.  Then, they can run 'node index.js' in the command line from the root directory to start the application. Users will be prompted to answer a series of questions about their logo design and the logo SVG file is outputed.


## Features

The application is capable of generating a SVG file for logo design.  It takes user input from the command line and dynamically create the logo based on the questions. It supports a number of shapes including rectangle, square, triangle, circle, ellipse, line, star and the color input can be of color words or hex color code.



## Tests

Testing done on:

1. testing on default page display on show up.
2. testing on input valid city name.
3. testing on input invalid city name, like Abc, with 'city not found'. 
4. testing on no internet connection, with 'Connection Error' on error message.
5. testing on the error message display disappear when focus on input field.
6. testing on display the current weather details including city, date, weather symbol, temperature, wind speed, and humidity.
7. testing on display the 5 day forecast details including date, weather symbol, temperature, wind speed, and humidity.
8. testing on clicking on saved city button and current and 5 day forecast display
9. testing on refreshing the page and those saved cities still can be found. 
10. testing on media break point and changing screen sizes.
11. testing on funny city names, like Bat Cave, Llanfairpwllgwyngyll and so on.



## Resources

Link to Video Demostration:


Link to GitHub repo:
https://github.com/percivalho/making-SVG-logo.git


## License 

![License badge](https://img.shields.io/badge/license-MIT-blue.svg)


## Credits and Copyright 
&copy; Copyright 2023 - Present. Percival Ho