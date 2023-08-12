 
![3](https://github.com/Jeysiva-apjs/LearnAcademy/assets/126048586/ed1f579e-2155-4e38-9dd6-b61eeb534b40)

<div align="center">
  <h2>The open-source course selling app</h2>
</div>

A feature-rich full-stack course selling website using the MERN stack (Node.js, Express.js, MongoDB, and React).

# Table of Contents

1. [Admin Dashboard](#admin-dashboard)
2. [User Dashboard](#user-dashboard)
3. [Demo video](#demo-video)
4. [Built With](#built-with)
5. [Getting Started](#getting-started)
6. [Contributing](#contributing)
7. [License](#license)

## Admin Dashboard
1. The admin side of the course selling app.
2. Admins can effortlessly log in or register a new account.
3. All admins have the power to:
    ✅ CREATE courses
    ✏️ UPDATE courses
    ❌ DELETE courses

## User Dashboard
1. The user side of the course-selling app
2. Users can conveniently log in or register a new account.
3. Users get access to a wide range of courses to explore and learn from.
4. Users can seamlessly purchase their preferred courses! 💡

Note: The payment system and uploading of course content are still not in place.

## Demo video
https://youtu.be/7uU38dCcxbs

## Built With 
1. React.js
2. Node.js
3. Express.js
4. MongoDB
5. CSS3

## Getting Started

To get a local copy up and running, please follow the simple steps. 

## Prerequisites

Node.js and npm should be installed on your machine.

## Development

1. Fork the repository to your profile.
2. Clone your repository by running the following command in your terminal:
   ```sh
   git clone <your-repository-url>
   ```

### Server Setup 
1. Change directory to the root of the cloned repository
   ```sh
   cd LearnAcademy
   ```
2. Change directory to the server folder
   ```sh
   cd server
   ```
3. Install the required npm packages
   ```sh
   npm install
   ```
3. Create .env file and add DB_NAME and SECRET
   ```sh
   DB_CONNECT = mongodb+srv://<name:password>@cluster0.1uxyuwe.mongodb.net/courses
   SECRET = "Random String";
   ```
4. Start the server
   ```sh
   npm start
   ```

### Admin Client Setup 

1. Change directory to the client-admin folder
   ```sh
   cd ../client-admin
   ```
2. Install the required npm packages for the admin client
   ```sh
   npm install
   ```
3. Run the admin client in development mode
   ```sh
   npm run dev
   ```
### User Client Setup 

1. Change directory to the client-admin folder
   ```sh
   cd ../client-user
   ```
2. Install the required npm packages for the admin client
   ```sh
   npm install
   ```
3. Run the admin client in development mode
   ```sh
   npm run dev
   ```

# Contribution ideas
I welcome contributions to the LearnAcademy project. If you find any issues or have suggestions for improvements, please create a pull request. Make sure to follow the contribution guidelines in the repository.

## 
1. Implementing a payment gateway
2. Implementing course content page.
3. Replacing the JavaScript alert box with a toast or snackbar message


# License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

Happy learning!

   




   




