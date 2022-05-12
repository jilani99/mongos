

////////////////Creating the Schema ////////////////////////////////////////////////////
/////////////////Create a person with this prototype////////////////////////////////////

const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const FoodSchema = new Schema ({
  //set the schema name here is required
    name: {
        type: String,
        required: true,
        },
    age: Number,
    favoriteFoods:[String]

});

module.exports = mongoose.model ('Foods', FoodSchema)

