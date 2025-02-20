import AdItem from "./ad-item";
import classes from "./ads-grid.module.css";

export default function AdsGrid({ ads }) {
  return (
    <ul className={classes.ads}>
      {ads.map((ad) => (
        <li key={ad.id}>
          <AdItem {...ad} />
        </li>
      ))}
    </ul>
  );
}
