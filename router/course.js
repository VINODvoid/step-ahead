const {Router} = require("express")
const courseRouter = Router()
const { courseModel} = require("../db")
const zod = require("zod")

courseRouter.get('/view-course',async function(req,res){
    try {
        const courses = await courseModel.find(); // Fetch all courses from the database
        res.json(courses);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching courses');
      }
})

module.exports = courseRouter