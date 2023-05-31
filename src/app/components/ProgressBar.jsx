"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./ProgressBar.module.css";
import rectangle1 from "../../../public/progressBar/Rectangle 40544.png";
import Image from "next/image";

const ProgressBar = ({ movieGoal }) => {
  const [watched, setWatched] = useState(50);
  const [location, setLocation] = useState({});
  const container = useRef(null);

  const dynamicBar = {
    "--width": `${watched}%`,
  };

  const positionText = () => {
    const watchGoal = (watched / movieGoal) * 100;
    setLocation({
      watchGoal,
    });
  };

  useEffect(() => {
    positionText();
  }, []);

  useEffect(() => {
    const text = container.current;
    const { watchGoal } = location;
    text.style.transform = `translateX(${watchGoal}%)`;
  }, [location]);

  return (
    <div className={styles.barContainer} style={dynamicBar}>
      <div className={styles.bar}>
        <Image src={rectangle1} alt="progress bar" />
      </div>
      <p ref={container}>
        {watched} Peliculas <br />
        producidas
      </p>
    </div>
  );
};

export default ProgressBar;
