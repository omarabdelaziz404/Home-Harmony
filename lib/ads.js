import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getAds() {
  //await new Promise((resolve) => setTimeout(resolve, 2000));

  //throw new Error("Loading ads failed");
  return db.prepare("SELECT * FROM meals").all();
}

export function getDetails(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveAd(ad) {
  ad.slug = slugify(ad.title, { lower: true });
  ad.instructions = xss(ad.instructions);

  const extension = ad.image.name.split(".").pop();
  const fileame = `${ad.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileame}`);
  const bufferedImage = await ad.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  ad.image = `/images/${fileame}`;

  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `).run(ad);
}

