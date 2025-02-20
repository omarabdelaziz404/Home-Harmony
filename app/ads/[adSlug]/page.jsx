import Image from "next/image";
import { notFound } from "next/navigation";

import { getDetails } from "@/lib/ads";
import classes from "./page.module.css";

export async function generateMetadata({ params }) {
  const ad = getDetails(params.adSlug);

  if (!ad) {
    notFound();
  }

  return {
    title: ad.title,
    descdescription: ad.summary,
  };
}

export default function AdDetailsPage({ params }) {
  const ad = getDetails(params.adSlug);

  if (!ad) {
    notFound();
  }

  ad.instructions = ad.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={ad.image} alt={ad.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{ad.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${ad.creator_email}`}>{ad.creator}</a>
          </p>
          <p className={classes.summary}>{ad.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: ad.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
