# Book Search Engine

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

Book Search Engine is a web application built using the MERN stack, with a React front end, MongoDB database, and Apollo Server for GraphQL queries to fetch and modify data. The application allows users to search for books using the Google Books API and provides features such as user authentication, saving and removing books, and managing user accounts.

## Table of Contents

- [Book Search Engine](#book-search-engine)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Demo](#demo)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)

## Installation

To run the Book Search Engine locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies by running the following command:
   ```
   npm install
   ```
4. Set up your MongoDB database and obtain the connection string.
5. Create a `.env` file in the root directory and add the following environment variables:
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```
6. Start the application by running the following command:
   ```
   npm start
   ```
7. The Book Search Engine will be accessible at `http://localhost:3000` in your browser.

## Usage

The Book Search Engine provides the following functionality:

- **Search for Books**: Users can search for books by entering a search term in the input field and clicking the submit button. The search results display each book's title, author, description, image, and a link to that book on the Google Books site.
- **User Authentication**: Users can create an account or log in to their existing account. The application includes a modal with options to sign up or log in. User authentication is handled securely using JSON Web Tokens (JWT).
- **Save and Remove Books**: When logged in, users can save books to their account or remove books they have previously saved. Each book in the search results and saved books list includes a button to perform these actions.
- **View Saved Books**: Logged-in users have the option to view all the books they have saved. The saved books list displays each book's title, author, description, image, and a link to that book on the Google Books site. Users can also remove books from their saved books list.
- **Logout**: Logged-in users can log out of their account, which redirects them to the login page.

## Demo

For a visual demonstration of the Book Search Engine, please refer to the following mockup:

![Book Search Engine Demo](./Assets/21-mern-homework-demo-01.gif)
![Book Search Engine Demo](./Assets/21-mern-homework-demo-02.gif)

You can also access the live deployed version of the application on Heroku at [Book Search Engine](https://book-search-pdg.herokuapp.com/).

## License

This project is licensed under the [MIT](LICENSE) license.

## Contributing

Contributions to the Book Search Engine project are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create your own branch: `git checkout -b feature/my-feature`.
3. Commit your changes: `git commit -am 'Add my feature'`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Submit a pull request.

## Questions

If you have any questions about the project or would like to report an issue, please feel free to reach out to me through the following contact information:

- GitHub: [ParisaDarkhal](https://github.com/ParisaDarkhal)
- Email: [Email Address](mailto:your-email-address)
