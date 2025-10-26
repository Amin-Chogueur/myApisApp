import { NextRequest, NextResponse } from "next/server";
import { products } from "@/db/data";
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category"); // "men", "women", "kids" or null
    const data = products.filter((product) => product.category === category);
    if (!category) {
      const data = products;
      return NextResponse.json(data);
    }
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "error fetching data", status: 500 });
  }
}
