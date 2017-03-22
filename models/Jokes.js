'use strict'

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

/*
Add Schema and Middleware here
 */
var jokeSchema = new Schema({
    joke : { type : String, required : true },
    category : {type : String, enum : ["short", "alcohol", "quote"]},
    reference : {author : String, link : String},
    lastEdited : {type : Date, default : Date.now}
});

jokeSchema.pre('save', function(next){
    this.lastEdited = new Date();
    next();
})


var JokeModel= mongoose.model("Joke", jokeSchema);
module.exports = JokeModel;