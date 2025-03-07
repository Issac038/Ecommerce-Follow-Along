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
2. Fixed the cors issue



### Milestone 16

1. Added a Single Page product details 
2. Created Image Modal Component



### Milestone 17

1. Cart Schema
2. Cart route
3. Cart Controller [get and addToCart]



### Milestone 18

1. Get Cart Data Route



### Milestone 19

1. Created cart UI
2. Fetched Cart Details of the User



### Milestone 20

1. Added UI for profile route
2. Created route for user data



### Milestone 21

1. Created page for the Address city, country, address1, address2, adderss3 and address type.
2. Wrote the end point for the backend to receive and store it in the backend



### Milestone 22

1. Created a backend endpoint that stores the address inside user profile in database.



### Milestone 23

1. Created a select address page in frontend.
2. Wrote product schema for the orders in the backend.



### Milestone 24

1. Created a order conformation page in frontend which displays products ordered, address selected and total price details.



### Milestone 25

1. Created a backend endpoint that will help in placing the order.



### Milestone 26

1. Created a backend endpoint that will help getting all the orders of the user.



### Milestone 27

1. Created a frontend page that will display all the user orders.



### Milestone 28

1. Added a cancel button in my-orders and created a backend endpoint for cancel order.
2. Now user can cancel a placed order.



### Milestone 29

1. Added the razorpay api.



### Milestone 30

1. Continuation of milestone 29.
2. Implemented online payment using razorpay.



### Milestone 31

1. In store.js file configure an store with userReducer function that will handle global user email state.
2. Inside userActions.js file write an function called setEmail that will help in storing email state inside global state.


### Milestone 32

1. In Login page we will use Dispatch method to store the mail inside global state
2. In all the remaining pages acc the mail stored in global state using useSelector

### Milestone 33

1. Created a JWT token.
2. Created a cookie inside token.


### Milestone 34

1. Extract JWT token from cookie and send to server
2. Validate JWT token


### Miestone 35

1. Deployed frontend
2. Deployed Backend

