"use client";
import { useFetch } from "../utils";
import { useEffect, useState } from "react";
import Characters from "./Characters";
import styles from "./ListOfCharacters.module.css";
import vector1 from "../../../public/Vector 75.png";
import vector2 from "../../../public/Vector 76.png";
import Image from "next/image";

export default function ListOfCharacters() {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (loading) return;
    setCharacters(data[page]);
  }, [loading, page]);

  const nextBtn = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevBtn = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  if (loading) {
    return <h1 className={styles.loading}>Loading...</h1>;
  }

  return (
    <>
      <article className={styles.heros}>
        {characters.map((char) => {
          return <Characters key={char.id} {...char} />;
        })}
      </article>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={prevBtn}>
          <Image src={vector1} alt="prev btn"></Image>
        </button>
        {page + 1}/{data.length}
        <button className={styles.btn} onClick={nextBtn}>
          <Image src={vector2} alt="next btn"></Image>
        </button>
      </div>
    </>
  );
}
