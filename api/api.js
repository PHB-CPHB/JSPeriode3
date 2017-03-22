let router = require("express").Router();
let jokes = require("../models/Jokes");
var mongoose = require( 'mongoose' );
var Joke = mongoose.model("Joke");

router.get("/",(req,res) =>{
  res.json({msg: "Hello World"});
});

router.get("/api/jokes", (req, res) =>{
  res.json({joke : Joke.find()})
})

router.get("/api/jokes/:id", (req, res) =>{
  res.json({joke : Joke.findById(id)})
})

router.post("/api/jokes/", (req, res) => {
  req.json({joke: Joke.create({
    joke : req.body.joke,
    category : req.body.category,
    reference : req.body.reference
  }, function(err, joke){
    if(!err) {
      console.log("Joke " + joke._id + " saved")
    };
  }
  )});
})

router.put("/api/jokes/:id", (req, res) => {

})

router.delete("/api/jokes/:id", (req, res) => {

})

module.exports = router;
