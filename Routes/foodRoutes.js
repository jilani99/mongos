///////////////////////////////////////////build the Person's Routes///////////////////////////////////////
const express=require('express')
const router=express.Router()
const Person=require('../Models/FoodSchema')

//////////////////////////////////////Create and Save a Record of a Model//////////////////////////////////
router.post("/newperson" , (req,res) => {
    let newPerson= new Person(req.body)
    newPerson.save((err, data) => {
        err?  console.log(err): res.send("Person's prototype was added")
    })
})
////////////////////////////////////// Display all of the records /////////////////////////////////////////
router.get("/", (req, res) => {
  Person.find({}, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});

//////////////////////////////////////Find someone by his id ////////////////////////////////////////////////
router.get("/:id", (req, res) => {
  Person.find({ _id: req.params.id }, (err, data) => {
    err ? console.log(err) : res.json(data);
  });
});
//////////////////////////////////// Delete Person by id //////////////////////////////////////////////////
router.delete("/deletePerson/:id", (req, res) => {
  Person.findByIdAndDelete({ _id: req.params.id }, (err, msg) => {
    err ? console.log(err) : res.json({ msg: "Person deleted" });
  });
});
//////////////////////////////////// Remove People whose name is Jihen /////////////////////////////////////
router.delete("/deletename/:name", (req, res) => {
  Person.remove({ name: req.params.name}, (err, msg) => {
    err ? console.log(err) : res.json({ msg: "Person named deleted" });
  });
});

//////////////////////////////// Update Person's Data ////////////////////////////////////////////////////
router.put("/edit/:id" , (req,res) => {
    Person.findByIdAndUpdate({_id: req.params.id} , {...req.body} , (err, msg) => {
        err ? console.log(err) : res.json({ msg: "Person updated" } )
    });
});

//////////////////////////////////////Find people who like banana ////////////////////////////////////////////////
//Find people who like banana. Sort them by name, limit the results to two documents, 
//and hide their age. Chain .find(), .sort(), .limit(), .select(), and then .exec(). Pass the done(err, data) callback to exec().

var preferedFood="banana";
router.get('/banana', (req, res) => { Person.find({favoriteFoods: preferedFood}, (err, msg) => {
  err ? console.log(err) : res.json({ msg: "Person who loves banana" }) 
})
//  .sort({name:1}) 
//  .limit(2) 
//  .select({age:0})

        
  
})


// //router.get("/:id", (req, res) => {
//   Person.find({ _id: req.params.id }, (err, data) => {
//     err ? console.log(err) : res.json(data);
//   });
// });


module.exports=router