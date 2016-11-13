'use strict'

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

/*
Everything in Mongoose starts with a schema. Each schema maps to a MongoDB collection
(similar to an Entity class, with JPA) and defines the shape of the document within
that collection
 */


let BookSchema = new Schema({
  title : {
    type: String,
    required: true
  },
  lastEdited : {type: Date, default: Date.now},
  author: String,
  category : String
});

BookSchema.pre('update', function() {
  console.log("XXXXXXXXXXXXXXXXX");
  this.update({},{ $set: { lastEdited: new Date() } });
  //this.lastEdited = new Date();

  // next();
});

BookSchema.pre('save', function(next) {
  console.log("YYYYYYYYYYYY");
  this.lastEdited = new Date();
  next();
});
//Observe in DB, that Schema name is pluralized, so in DB name is: books
let BookModel= mongoose.model("Book",BookSchema);
module.exports = BookModel;


/*
var BookSchema = new Schema({
  title : {
    type: String,
    required: true,
    unique: true
  },
  published : {
    type: Date,
    default : Date.now
  },
  keywords : Array,
  isPublished : Boolean,
  author : {
    type: Schema.ObjectId,
    ref: 'User'
  },
  //Embedded sub-document
  detail: {
    modelNumber : Number,
    hardcover : Boolean,
    reviews : Number,
    rank : Number
  }
})
*/

