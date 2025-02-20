"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logoImg from "@/assets/logo3.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  const path = usePathname();

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A home" priority />
          Home Harmony
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link
                href="/ads"
                className={path.startsWith("/ads") ? classes.active : undefined}
              >
                Browse Ads
              </Link>
            </li>
            <li>
              <Link
                href="/marketplace"
                className={
                  path.startsWith("/marketplace") ? classes.active : undefined
                }
              >
                Furniture Marketplace
              </Link>
            </li>

            {/*<li>
              <Link
                href="/community"
                className={path === "/community" ? classes.active : undefined}
              >
                Community
              </Link>
            </li>
            
            <li>
              <Link href="/login">
                <button>Login</button>
              </Link>
            </li>*/}
          </ul>
        </nav>
      </header>
    </>
  );
}
