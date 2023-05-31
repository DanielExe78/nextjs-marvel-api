"use client";
import React, { useState } from "react";
import styles from "./ExtraInfo.module.css";
import ProgressBar from "../components/ProgressBar";

const ExtraInfo = () => {
  const [movieGoal, setMovieGoal] = useState(100);

  return (
    <main className={styles.main}>
      <article className={styles.progress}>
        <h1>progreso de películas reproducidas</h1>
        <p>
          {movieGoal} peliculas
          <br />
          Meta de produccion
        </p>
        <ProgressBar movieGoal={movieGoal} />
      </article>
      <article className={styles.media}>
        <h1>video</h1>
      </article>
      <article className={styles.media}>
        <h1>imagen</h1>
      </article>
    </main>
  );
};

export default ExtraInfo;
