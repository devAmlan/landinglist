import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import TemplatePages from "@/model/TemplatePages";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const templateName = searchParams.get("name");

  try {
    await dbConnect();

    const templatePageDetails = await TemplatePages.findOne({
      name: templateName,
    });

    return new NextResponse(
      JSON.stringify({
        data: templatePageDetails,
      })
    );
  } catch (error) {
    return new NextResponse(error);
  }
}
