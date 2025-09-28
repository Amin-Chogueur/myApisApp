import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  contactEmail: { type: String, required: true },
  contactPhone: { type: String, required: true },
});

const JobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: String, required: true },
    company: { type: CompanySchema, required: true },
  },
  { timestamps: true }
);

const Job = mongoose.models.Job || mongoose.model("Job", JobSchema);
export default Job;
