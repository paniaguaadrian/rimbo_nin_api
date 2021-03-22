import mongoose from "mongoose";
const Schema = mongoose.Schema;

const propertySchema = new Schema(
  {
    state: { type: String },
  },
  { timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);
export default Property;
