import Link from 'next/link';
import Image from 'next/image';

import classes from './ad-item.module.css';

export default function AdItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.ad}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/ads/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}