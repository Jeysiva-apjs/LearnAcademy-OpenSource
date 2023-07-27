
![3](https://github.com/Jeysiva-apjs/LearnAcademy/assets/126048586/52b657bb-c0da-4986-9eca-f787f26aa8df)

<div align="center">
  <h2>The open-source course selling app</h2>
</div>

A feature-rich full-stack course selling website using the MERN stack (Node.js, Express.js, MongoDB, and React).

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

### Demo video: https://clipchamp.com/watch/rq6h6gvU7rK

## Built With 
1. React.js
2. Node.js
3. Express.js
4. MongoDB
5. CSS3

# Getting Strated

To get a local copy up and running, please follow the simple steps. 

## Prerequisites

1. Node.js (Version: >=18.x)
2. npm (recommended)

   ```sh
   
   ```

## Development

1. Fork the repository to your profile.
2. Clone your repository by running the following command in your terminal:

   ```sh
   git clone <your-repository-url>
   ```
3. Change the directory to the root of the cloned repository

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
3. Create .env file and add DB_NAME and SECREAT
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

## License

This project is licensed under the [MIT License](LICENSE).

   




   




