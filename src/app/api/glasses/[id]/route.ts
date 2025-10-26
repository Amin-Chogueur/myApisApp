import { NextRequest, NextResponse } from "next/server";
import { products } from "@/db/data";
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const product = products.find((glasses) => glasses.id === Number(id));
    console.log(product);
    return NextResponse.json(product);
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "error fetching data", status: 500 });
  }
}
