import styles from "./BottomContent.module.css";

const BottomContent = (props) => {
  return (
    <section className={styles.BottomContent}>
      <div className={styles.box}>
        <span>Rotation Time</span>
        <h2>{props.data.rotation}</h2>
      </div>
      <div className={styles.box}>
        <span>Revolution Time</span>
        <h2>{props.data.revolution}</h2>
      </div>
      <div className={styles.box}>
        <span>Radius</span>
        <h2>{props.data.radius}</h2>
      </div>
      <div className={styles.box}>
        <span>Average Temp.</span>
        <h2>{props.data.temperature}</h2>
      </div>
    </section>
  );
};

export default BottomContent;
