"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navigation.module.css";
import Head from "next/head";
import Notification from "../../../public/Notification.svg";
import setting from "../../../public/setting.svg";
import { usePathname } from "next/navigation";

const Links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Characters",
    route: "/characters",
  },
];

export default function NavBar() {
  const currentPath = usePathname();

  return (
    <>
      <Head>
        <title>Marvel Characters</title>
      </Head>
      <header className={styles.header}>
        <nav className={`${styles.nav}`}>
          <h3>LOGO MARVEL</h3>
          <ul className={styles.nav}>
            {Links.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    href={item.route}
                    className={`${
                      item.route === currentPath
                        ? `${styles.active}`
                        : `${styles.singleNav}`
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.btnContainer}>
          <button className={styles.btn}>
            <Image priority src={Notification} alt="notification icon"></Image>
          </button>
          <button className={styles.btn}>
            <Image priority src={setting} alt="image icon"></Image>
          </button>
        </div>
      </header>
    </>
  );
}
