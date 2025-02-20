"use client";

import { useActionState } from "react";

import ImagePicker from "@/components/ads/image-picker";
import { shareAd } from "@/lib/actions";
import AdsFormSubmit from "@/components/ads/ads-form-submit";
import classes from "./page.module.css";


export default function ShareAdPage() {
  const [ state, formAction ] = useActionState(shareAd, {message: null}); //467

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your<span className={classes.highlight}> home</span>
        </h1>
        <p></p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Details</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <AdsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
