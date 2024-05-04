"use server";

import { db } from "@/app/db/db";
import { message } from "@/app/db/schema";

export async function getmessage() {
  try {
    const res = await db.select().from(message);
    return res;
  } catch (err) {
    console.log(err);
  }
}
