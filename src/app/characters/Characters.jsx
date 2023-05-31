import styles from "./ListOfCharacters.module.css";

const Characters = ({ name, thumbnail, comics, series }) => {
  return (
    <section className={styles.section}>
      <h4 className={styles.title}>{name}</h4>
      <div className={styles.outerStyle}>
        <div className={styles.thumbnail}>
          <img
            className={styles.image}
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt="Hero's Image"
          />
        </div>
      </div>
      <br />
      <div className={styles.infoContainer}>
        <p>
          Comics: <span>{comics.available}</span>
        </p>
      </div>

      <div className={styles.infoContainer}>
        <p>
          Peliculas: <span>{series.available}</span>
        </p>
      </div>
    </section>
  );
};

export default Characters;
