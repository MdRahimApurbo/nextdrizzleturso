"use server";

import { db } from "@/app/db/db";
import { message } from "@/app/db/schema";
import { revalidatePath } from "next/cache";

export const addMessage = async (input: string) => {
  try {
    const res = await db.insert(message).values({ message: input });
    revalidatePath("/");
    return { success: true, message: "Message added successfully" };
  } catch (error) {
    console.error("Error adding message:", error);
  }
};
