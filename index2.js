// //EXPORTING DEPENDENCIES
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const zod = require('zod');

const adminRouter = require("./router/admin");
const courseRouter = require("./router/course.js");
const userRouter = require("./router/user.js");
const quizRouter = require("./router/quiz.js");

require("dotenv").config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public2')); // Add this line to serve static files

// Define your API routes
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/course', courseRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/quizzes', quizRouter);

async function main() {
  try {
      await mongoose.connect(process.env.MONGO_URL);
      
      // Start the server after a successful database connection
      app.listen(PORT, () => {
          console.log(`Server is listening on port ${PORT}`);
      });
      
      console.log("Connected to MongoDB successfully");
      
      // Route for serving the index.html file from the root directory
      app.get('/', (req, res) => {
          res.sendFile(__dirname + '/index.html'); // Serve index.html from the root
      });
  } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); // Exit the process with failure
  }
}
main();
