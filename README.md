# React.js Google Books Search ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

<p align="center">
  <img src="./assets/demo.gif" alt="React.js Google Book Search Demo">
</p>
<p align="center">

  <p align="center">
    <br />
    <a href="https://express-google-books-search.herokuapp.com/">Live Demo</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
      <ul>
        <li><a href="#technologies-used">Technologies Used</a></li>
        <li><a href="#acceptance-criteria">Acceptance Criteria</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#future-improvements">Future Improvements</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>
<br>

## Overview

React Google Books Search is a full-stack web application built using the MERN stack. The application allows users to search for books using the Google Books API and save books of interest for retrieval to the its database using the internal API. Additionally, React Google Books Search also utilizes `Socket.io` to enable broadcasting of notification across all active clients in the even of books being added or removed from the DB.

### Technologies Used

React Google Books Search uses the following technologies:

- [React.js](https://reactjs.org/)
- [Axios](https://github.com/axios/axios)
- [Bootstrap](https://getbootstrap.com/)
- [Dart Sass](https://sass-lang.com/dart-sass)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)

## Getting Started

To get a local copy of this project up and running follow these simple steps.

### Prerequisites

First you must install [Node.js](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/get-npm) if you haven't done so already. Once this is done, follow the installation instructions below to run the application locally.

### Installation

1. Clone the repository.
   ```sh
   git clone https://github.com/kevin-aminzadeh/react-google-books-search
   ```
2. Navigate to the repository directory and run the following command to install the necessary NPM packages.
   ```sh
   npm install
   ```
3. Run the app start script.
   ```sh
   npm start
   ```

## Future Improvements

Due to the relative simplicity of this project, there are plenty of available avenues for improvement.

Some noteworthy improvements which could be made include:

- Implementing user authentication/authorization and to allow true usability of the application. (Currently saved books exist globally with all clients accessing the same collection).
- Further decomposing React.js components to improve component reusability and code readability.
- Further testing against Google Books API data for edge cases as older book volumes often tend to have a somewhat unexpected data structure with missing properties.
- Creating a richer UI experience by moving away from Bootstrap and creating UI components from the ground up.
- Implementing data analytics to provide useful insights such as most popular searches, most popular books, etc.

## License

This project is licensed under the terms of the [MIT license](https://opensource.org/licenses/MIT).
