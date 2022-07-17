# Team-Profile-Generator

  ## Table of Contents
  
  [Description](#description)
  
  [Installation](#installation)
  
  [Usage](#usage)
  
  [Test](#testing)
  
  [Information](#information)

## Description

The Team Profile Generator is a node.js appilication that takes in a user's command line input to gather information about employees of 3 types: Manager, Engineer, and Intern. The inquirer prompts ask for information about each new employee, some of which is dependant on their role in the company. Once all the user input has been gathered, the appication dynmically generates an HTML file that displays the user data in a clean and readable format, with chiclable links to email and github user profiles.

## Installation

This app requires node.js, inquirer, jest, babel, and their assorted dependencies, all of which can be installed through NPM.

## Usage

After the necessary dependencies have been generated, simply type "node index.js" from the command line within the project folder, answer the prompts, and when finished, the application will generate your HTML file to the dist folder.

## Testing

Included are tests for each of the 4 employee classes, all of which pass.

## Information

Github Repo for this application: https://github.com/Jevenden/Team-Profile-Generator

Demo Video: https://drive.google.com/file/d/1pNYtgMpflzQiJGlLDLwYE2sRf-2GWYgB/view

The HTML file created in the video can be found in the "dist" folder.

![image](https://user-images.githubusercontent.com/102879070/179382807-24a41c94-19c9-41d6-9648-aeb49e881edc.png)

