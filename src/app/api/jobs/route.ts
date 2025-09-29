import { connectToDB } from "@/db/connectToDb";
import Job from "@/db/models/jobModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const job = await req.json();
    const createdJob = await Job.create(job);
    if (createdJob) {
      return NextResponse.json({
        createdJob,
        message: "Server Responce: new job created successfully",
      });
    } else {
      NextResponse.json({ message: "error creating job", status: 404 });
    }
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "error creating job", status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDB();
    const jobs = await Job.find({});
    return NextResponse.json(jobs);
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "error fetching data", status: 500 });
  }
}
