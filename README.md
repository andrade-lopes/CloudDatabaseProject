# Overview

As a software engineer, I am continuously expanding my knowledge of cloud technologies and modern web development practices. This project helped me understand how cloud databases enable real-time data storage and synchronization in modern web applications.

The software is a web application called CloudDatabaseProject that integrates with Google Firebase Firestore. Users can create, view, update, and delete volunteer projects that are stored in the cloud. The application demonstrates full CRUD functionality and real-time synchronization between the web interface and the Firestore database.

My purpose for creating this software was to gain practical experience with cloud databases, understand how web applications communicate with Firestore, and learn how real-time data synchronization works in a modern cloud environment.

[Software Demo Video](http://youtube.link.goes.here)

# Cloud Database

This project uses Google Firebase Firestore as the cloud database service. Firestore stores project information as documents within a collection named `projects`. The application performs Create, Read, Update, and Delete operations directly against the cloud database.

# Development Environment

The following tools were used to develop this software:

* Visual Studio Code
* Firebase Console
* Google Firebase Firestore
* JavaScript
* HTML5
* Git and GitHub
* Python HTTP Server for local testing

The application was developed using JavaScript and HTML and connected to Firebase Firestore through the Firebase Web SDK loaded from a CDN.

# Useful Websites

* https://firebase.google.com/docs/firestore
* https://firebase.google.com/docs/web/setup
* https://developer.mozilla.org/en-US/docs/Web/JavaScript
* https://developer.mozilla.org/en-US/docs/Web/HTML

# Future Work

* Add user authentication with Firebase Authentication.
* Implement project categories and filtering.
* Add due dates and project status tracking.
* Improve the user interface with CSS styling.
* Deploy the application using Firebase Hosting.