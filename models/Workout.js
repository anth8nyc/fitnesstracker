const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  
  day: Date,

  exercises: [
  {
    name: {
      type: String,
      trim: true,
      required: "Exercise name is Required"
    },
    type: {
      type: String,
      trim: true,
      required: "Exercise type is Required"
    },
    weight: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    duration: {
      type: Number,
      required: true
    },
    distance: {
      type: Number,
    },
  }
 ],

});

// setFullName: sets the current user's `fullName` property to their lastName appended to their `firstName`
// UserSchema.methods.setFullName = function() {
//   this.fullName = `${this.firstName} ${this.lastName}`;
//   return this.fullName;
// };
// lastUpdatedDate: sets the current user's `lastUpdated` property to Date.now()
// UserSchema.methods.lastUpdatedDate = function() {
//   this.lastUpdated = Date.now();
//   return this.lastUpdated;
// };
// This creates our model from the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export the User model
module.exports = Workout;
