const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  
  day: {
  type: Date,
  default: Date.now
  },
  exercises: [
  {
    type: {
      type: String,
      trim: true,
      required: "Exercise type is Required"
    },
    name: {
      type: String,
      trim: true,
      required: "Exercise name is Required"
    },
    duration: {
      type: Number,
      required: true
    },
    weight: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    distance: {
      type: Number,
    },
  }
 ],

});

// This creates our model from the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export the User model
module.exports = Workout;
