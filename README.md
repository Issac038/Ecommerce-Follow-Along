### Milestone 1: Project Overview

1. Authentication: login logout signup
2. Product page: Displays all the products
3. Orders page: Shows orders for each user
4. Payment gateway


### Milestone 2: Backend and Frontend

1. I created a folder called frontend within which we first created a react file and also installed dependencies and connected the tailwindcss using postCSS. On this folder I created two more folders:
    1. Authorization
    2. Signup

    The Authorization folder contains two more folders which are Login and Signup. As part of milestone 2 I was asked to complete the login page which I have completed.

2. I created a folder called backend which just contains the node modules and I installed express, mongoose, nodemon and cors. 4


### Milestone 3: Server and Database

1. Today I set up a database and a server by using Express and Mongodb-Atlas. I also configured the server to listen on a designated port.
2. I also created a error handling folder for better debugging.


### Milestone 4:

1. I created a User Model: This is like a blueprint for how your users' data will be stored in the database
2. I created a User Controlleras well: This will help you manage what happens with your user data (like adding a new user or getting their information).
3. I also enabled and configured Multer: Multer will allows my app to accept and store files (such as images) uploaded by users.



### Milestone 5:

1. I created a signup page and linked the sign up page to the login page so that it is easy to traverse.



### Milestone 6:

1. I used to JWT token to create an activation for users. This holds basic user information.
2. Also learnt how to send a URL with the token via email.
3. I also used nodemailer to send verification emails and created an endpoint to verify the user.



### Milestone 7:

1. I learned to use bcrypt to encrypt the users password and saved the hashed password in the database instead of plain text.
2. Created a endoint which fetches user data from database on provided emial/username
3. Validated password by comparing the user’s entered password with the hashed password stored in the database using bcrypt. If they match, proceed with authentication; otherwise, an error is sent.



### Milestone 8

1.  Made the card componet
2. Created a display of all the products with dummy data in Home page.



### Milestone 9

1. Created Product Entry Form
2. Used form data to send the data over the network call.



### MileStone 10

1. Product Schema
2. Create end point to wirte the data into DB - Cloudinary and Multer



### Milestone 11

1. Wrote an endpoint to fetch all products from the database and send to client.



### Milestone 12

1. Fetched products from backend using axios
2. useEffect to load products
3. Used Card component to display products with details



### Milestone 13 (Updation)

1. Backend: PUT route for updating
2. Frontend: Page for auto filling the updated data


### Milestone 14

1. Created a handleDelete button
2. Made a button to delete a singular object



### Milestone 15

1. Added a navbar component