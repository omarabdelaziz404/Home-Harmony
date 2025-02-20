import Link from "next/link";

import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow/>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Homes for NextLevel Owners</h1>
            <p>Transform Your Home - Elevate Your Lifestyle.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/marketplace">Furniture Marketplace</Link>
            <Link href="/ads">Explore Homes</Link>
          </div>
        </div>
      </header>

      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            <strong>1. Explore & Get Inspired: </strong>Browse our design ideas
            and expert consultations.
          </p>
          <p>
            <strong>2. Consult with Experts: </strong>Connect with professional
            designers to bring your vision to life.
          </p>
          <p>
            <strong>3. Shop with Ease: </strong>Discover high-quality furniture
            from trusted sellers in our marketplace.
          </p>
          <p>
            <strong>4. Create Your Dream Home: </strong>Turn inspiration into
            reality with seamless execution.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Home Harmony?</h2>
          <p>
            <strong>All-in-One Solution </strong>From expert consultations to
            premium furniture, everything you need in one place.
          </p>
          <p>
            <strong>Personalized Experience </strong>Tailored recommendations to
            match your style and space.
          </p>
          <p>
            <strong>Trusted Marketplace </strong>Verified sellers offering
            high-quality furniture at competitive prices.
          </p>
          <p>
            <strong>Seamless & Secure </strong>hassle-free shopping and design
            experience.
          </p>
        </section>
      </main>
    </>
  );
}
