const {Router} = require("express")
const adminRouter = Router()
const {adminModel, courseModel} = require("../db")
const zod = require("zod")



adminRouter.post('/create-course',async function(req,res){

    //ii. in try catch we check if validate
    try{
        // const parseData = requiredBody.safeParse(req.body)
        // const {title, image, description,imageurl , price} = parseData.data
         //step 3. put the data into the db
       const course =  await courseModel.create({
        "title": "JavaScript Foundation to Advance",
        "description": "A comprehensive course on JavaScript.",
        "modules": [
            {
              "moduleTitle": "Javascript foundation",
              "videos": [
                {
                  "videoTitle": "Introduction to Javascript",
                  "videoUrl": "Hr5iLG7sUa0?si=YkIQY80lfCcRavIH"
                },
                {
                  "videoTitle": "Setting up environment",
                  "videoUrl": "cvoLc3deAdQ?si=QDQZL1_blA8ka_T3"
                },
                {
                  "videoTitle": "Save and work on Github for Javascript",
                  "videoUrl": "-GoKoR6aLcY?si=uXcklH46mwPvjnt4"
                },
                {
                  "videoTitle": "Let, const and var ",
                  "videoUrl": "yY0bKZNYmJs?si=5tP2Wv8eb8MP8BVH"
                }
              ]
            },
          {
            "moduleTitle": "Data type in Javascript",
            "videos": [
              {
                "videoTitle": "Data type and ecma standards",
                "videoUrl": "-9knnv97wSc?si=hEgh89hl3MKsDy4c"
              },
              {
                "videoTitle": "Datatype conversion confusion",
                "videoUrl": "yY0bKZNYmJs?si=5tP2Wv8eb8MP8BVH"

              },
              {
                "videoTitle": "Why string to number conversion is confusing",
                "videoUrl": "yY0bKZNYmJs?si=5tP2Wv8eb8MP8BVH"

              },
              {
                "videoTitle": "Comparison of datatypes in javascript",
                "videoUrl": "yY0bKZNYmJs?si=5tP2Wv8eb8MP8BVH"
                
              }
            ]
          }
        ]
      })
    res.json({
        message:"successfully created the course",
        // course:course
    })
    }
    catch(err){
        message:"error"
    }
   
})

module.exports = adminRouter