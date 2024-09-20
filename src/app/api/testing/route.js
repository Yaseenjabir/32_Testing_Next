import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { dbref } from "../../../../db/database";
import { testingSchema } from "../../../../Schema/TestingSchema";

export async function POST(req) {
  const payload = await req.json();

  await mongoose.connect(dbref);

  const data = new testingSchema(payload);

  const result = await data.save();

  return NextResponse.json(result);
}
