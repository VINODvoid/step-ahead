// Import mongoose to interact with MongoDB
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId
const userSchema = new mongoose.Schema({
    fullname: String,
    email:{type: String , unique:true},
    password: String
})

const adminSchema = new mongoose.Schema({
    fullname: String,
    email:{type: String , unique:true},
    password: String
})

// Define a schema for course modules and videos
const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  modules: [
    {
      moduleTitle: String,
      videos: [
        {
          videoTitle: String,
          videoUrl: String,
        },
      ],
    },
  ],
});

// Export the Course model to use it in other parts of the application
const userModel = mongoose.model('user', userSchema)
const adminModel = mongoose.model('admin', adminSchema)
const courseModel = mongoose.model('course', courseSchema)

module.exports = {
    userModel, 
    adminModel, 
    courseModel
}