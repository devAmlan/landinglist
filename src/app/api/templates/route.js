import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import TemplatePages from "@/model/TemplatePages";
import _ from "lodash";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get("page");
  const limit = searchParams.get("limit");
  const category = searchParams.get("category");

  const skip = (page - 1) * limit;

  const filter = !_.isEmpty(category) ? { tags: category } : {};

  try {
    await dbConnect();

    const itemsCount = await TemplatePages.countDocuments(filter);
    const totalPages = Math.ceil(itemsCount / limit);

    const templatePageList = await TemplatePages.find(filter, [
      "name",
      "price",
      "screenshotUrl",
    ])
      .skip(skip)
      .limit(parseInt(limit));

    return new NextResponse(
      JSON.stringify({
        totalPages,
        itemsCount,
        data: templatePageList,
      })
    );
  } catch (error) {
    return new NextResponse(error);
  }
}

export async function POST(request, response) {
  try {
    const body = await request.json();

    await dbConnect();

    const newTemplatePages = new TemplatePages(body);
    await newTemplatePages.save();

    return new NextResponse(
      JSON.stringify({
        message: "Your data successfully added",
        status: "success",
      })
    );
  } catch (error) {
    return new NextResponse(error);
  }
}
