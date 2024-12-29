# GitLinked

**GitLinked** is a web app that allows users to discover and interact with random GitHub repositories. You can log in with your GitHub account, swipe through repositories, like and save your favorite repositories, and even create new repositories directly from the app.

**Hosted Version:** [https://gitinder-af468.web.app/](https://gitinder-af468.web.app/)

## About

GitLinked is inspired by Tinder, but for GitHub repositories. The app allows users to:

1. Log in with their GitHub account using Firebase Authentication.
2. Browse random GitHub repositories, view details like programming languages, repository owner, and more.
3. Swipe right to like a repo, or swipe left to skip.
4. View a list of liked repositories in the "Liked Repositories" section.
5. Create new GitHub repositories directly from the app using the "Create New Repository" option.

## Features

- **Login with GitHub**: Users authenticate via GitHub using Firebase Authentication.
- **Swipe Repos**: A Tinder-like swipe functionality to like or skip random repositories.
- **Liked Repos**: A section to view all repositories you’ve liked.
- **Create New Repo**: Ability to create new repositories on GitHub directly from the app.
- **View Repo on GitHub**: Direct link to open the original GitHub repository.
- **Firebase Real-time Database**: Used for storing user data and liked repositories.

## Technologies Used

- **React**: Frontend framework for building the app.
- **Firebase Authentication**: For secure login using GitHub credentials.
- **Firebase Realtime Database**: For storing user data (liked repositories).
- **GitHub API**: Fetching random repositories and displaying them.
- **Bootstrap**: For styling the components.

## Installation

To run this project on your local machine, follow the steps below:

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine.
- **Firebase Account**: Set up a Firebase project if you don't have one already. You'll need to configure Firebase.

### Steps

1. **Clone the repository:**

```bash
git clone https://github.com/HashirAhmedd/GitLinked.git
cd GitLinked
```
2. **Installing dependencies:**
```bash
npm install
```
3. **Configure Firebase:**
   Go to src/FirebaseConfig.js and add your Firebase project credentials. You can find them in the Firebase console under Project Settings > Firebase SDK snippet.
   
5. **Start the development server:**
```bash
npm run dev
```
### Usage

- **Login:** Click on the "Login with GitHub" button on the landing page to authenticate with GitHub.
- **Swipe Cards:** After logging in, you will see random repository cards. Swipe right to like a repo, swipe left to skip it.
- **Liked Repos:** Use the hamburger menu on the left to view all repositories you've liked.
- **Create New Repo:** Use the "Create New Repo" option in the menu to create a new repository directly from the app.
- **View Repo on GitHub:** Each repo card has a "View Repository" button that takes you directly to the original GitHub repository.

### Contributing

1. Fork the repository.
2. Create a new branch (git checkout -b feature-name).
3. Commit your changes (git commit -am 'Add new feature').
4. Push to your branch (git push origin feature-name).
5. Open a pull request with a description of your changes.

