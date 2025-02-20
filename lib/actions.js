"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { saveAd } from "./ads";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareAd(prevState ,formData) {
  const ad = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(ad.title) ||
    isInvalidText(ad.summary) ||
    isInvalidText(ad.instructions) ||
    isInvalidText(ad.creator) ||
    isInvalidText(ad.creator_email) ||
    !ad.creator_email.includes("@") ||
    !ad.image ||
    ad.image.size === 0
  ) {
    return {
      message: 'Invalid input.'
    };
  }
  await saveAd(ad);
  revalidatePath('/ads');
  redirect("/ads");
}
