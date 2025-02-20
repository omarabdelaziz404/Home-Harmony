import Link from "next/link";
import { Suspense } from "react";

import classes from "./page.module.css";
import AdsGrid from "@/components/ads/ads-grid";
import { getAds } from "@/lib/ads";

export const metadata = {
  title: "All Ads",
  description: "Browse Ads.",
};

async function Ads() {
  const ads = await getAds();

  return <AdsGrid ads={ads} />;
}

export default function Adspage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Connect with
          <span className={classes.highlight}> Expert Designers</span>
        </h1>
        <p>
          Find top home design professionals to bring your vision to life.
          consult with experts, and create a space that reflects your style!
        </p>
        <p className={classes.cta}>
          <Link href="/ads/share">Share Your Home</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching ads...</p>}>
          <Ads />
        </Suspense>
      </main>
    </>
  );
}
