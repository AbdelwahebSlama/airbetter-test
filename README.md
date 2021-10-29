## Introduction

This exercice aims to evaluate your Angular knowledge by developing a small application.
Please note carefully how your project will be launched otherwise we will not be able to send you a positive feedback.
The difficulty will progressively increase with some bonuses questions at the end.
Web design (css) is not the main subject we will evaluate but if you want to make an effort we appreciate it!

## Requirements

You will download a folder containing runnable project. You must complete this project following this assessment and submit work with a zip archive before the deadline.

To launch your project we will execute the following command:

```sh
$ cd student-list
$ npm install
$ npm run build
$ npm run start -- --port=8000
Both three commands must work and npm run start -- --port=8000 should run a web server with your application available on port 8000.
```

Make this project yours! You have free reign to change it and show us your knowledge of Angular conventions and clean code skills.

We expect your project to be stable and deliverable in production.

## Instructions  

**IMPORTANT**  
1- clone the project  
2- create your own branch with the following name `evel/YOUR-NAME`  
3- commit your work (free to choose the number of commits)  
4- push the branch  `git push -u origin evel/YOUR-NAME`

if you face issues please send the code compressed in .rar or .zip format  

**Requested work**  
This app displays a student list. Every student has 2 buttons: Details and Remove.
Your job is to display a student's details when clicking on the "_Details_" button.
The details are displayed in this format :
```
Lastname : Dumons
Firstname : Valentin
Age : 23
```

For now the student service only provides **the first student** with the "_getStudentById_" function, you may need to work on it a little bit ;) .

When I refresh the detail page, I still display this detail page.

The detail page contains a "return" button that goes back to the student list.
