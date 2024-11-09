Mini Message Board - Odin Project
Description
This project is a simple message board built with Express and EJS, featuring two main routes:

/ (index) to display messages
/new to add new messages.
It demonstrates fundamental Express concepts including routing, templating, handling form submissions, and managing data in-memory.

Features
Express Setup: Configured a basic Express server with EJS as the templating engine.
Index Route (/): Displays an array of messages, each showing the user's name, message text, and date added.
New Message Form (/new): Allows users to submit a new message with fields for user name and message text. This form sends a POST request to /new for processing.
Form Handling: Configured form data parsing with express.urlencoded() and used router.post() to push new messages to the array.
Redirect After Submission: Redirects users back to the index route after submitting a new message to see the updated list.
Detailed Message View: Each message includes an "open" link to view message details on a dedicated page.
Installation
Clone the repository
Install dependencies with npm install
Start the server with npm start
Visit localhost:3000 to view the app
Notes
This project serves as an introductory practice with Express routing, form submission, and EJS rendering. Deployment will be covered in the next lesson.

