import mongoose from "mongoose";
const Schema = mongoose.Schema;

const agentSchema = new Schema(
  {
    agencyName: { type: String },
    agencyEmailPerson: { type: String },
    isAgentAccepted: { type: Boolean, default: false },
    documentSepa: { type: String },
  },
  { timestamps: true }
);

const Agent = mongoose.model("Agent", agentSchema);
export default Agent;
