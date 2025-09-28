import { connectToDB } from "@/db/connectToDb";
import Job from "@/db/models/jobModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectToDB();

    const job = await Job.findById(id);
    return NextResponse.json(job);
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "error fetching data", status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectToDB();
    const updatedJob = await req.json();
    const job = await Job.findByIdAndUpdate(id, updatedJob);
    if (job) {
      return NextResponse.json({ message: "job edited successfully" });
    }
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "error edeting job", status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectToDB();
    const job = await Job.findByIdAndDelete(id);
    if (job) {
      return NextResponse.json({ message: "job deleted successfully" });
    }
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "error deleting job", status: 500 });
  }
}
