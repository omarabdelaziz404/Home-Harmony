"use client";

import { useFormStatus } from "react-dom";

export default function AdsFormSubmit() {
  const { pending } = useFormStatus;

  return (
    <button disabled={pending}>{pending ? "Submitting..." : "Share Ad"}</button>
  );
}
