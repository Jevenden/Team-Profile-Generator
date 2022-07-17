# Team-Profile-Generator

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Description

The Team Profile Generator is a node.js appilication that takes in a user's command line input to gather information about employees of 3 types: Manager, Engineer, and Intern. The inquirer prompts ask for information about each new employee, some of which is dependant on their role in the company. Once all the user input has been gathered, the appication dynmically generates an HTML file that displays the user data in a clean and readable format, with chiclable links to email and github user profiles.

## Installation

This app requires node.js, inquirer, jest, babel, and their assorted dependencies, all of which can be installed through NPM.

## Usage

After the necessary dependencies have been generated, simply type "node index.js" from the command line within the project folder, answer the prompts, and when finished, the application will generate your HTML file to the dist folder.

## Testing

Included are tests for each of the 4 employee classes, all of which pass.

## Information

Github Repo for this application: https://jevenden.github.io/Readme-Generator/

Demo Video: https://drive.google.com/file/d/1pNYtgMpflzQiJGlLDLwYE2sRf-2GWYgB/view

The HTML file created in the video can be found in the "dist" folder.

![Readme SS]C:\Users\John Evenden\gt-bootcamp\course\10-OOP\02-Challenge\Assets\TPG SS.png
