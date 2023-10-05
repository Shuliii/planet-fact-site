import { useState } from "react";

import Button from "./UI/Button";

import styles from "./MainContent.module.css";

import source from "../assets/icon-source.svg";

const MainContent = (props) => {
  const [data, setData] = useState(1);

  const clickHandler = (e) => {
    setData(+e.target.querySelector("span").innerHTML);
  };

  let imgHelper;
  let imgHelper2;
  let contentHelper;
  let sourceHelper;

  if (data === 1) {
    imgHelper = props.data.images.planet;
    contentHelper = props.data.overview.content;
    sourceHelper = props.data.overview.source;
  }

  if (data === 2) {
    imgHelper = props.data.images.internal;
    contentHelper = props.data.structure.content;
    sourceHelper = props.data.structure.source;
  }

  if (data === 3) {
    imgHelper = props.data.images.planet;
    imgHelper2 = props.data.images.geology;
    contentHelper = props.data.geology.content;
    sourceHelper = props.data.geology.source;
  }

  console.log(imgHelper, contentHelper, sourceHelper);

  return (
    <>
      <section className={styles.mainsection}>
        <div className={styles.imagecontainer}>
          <img src={require(`../assets/${imgHelper}`)} alt={props.data.name} />
          {data === 3 && (
            <img src={require(`../assets/${imgHelper2}`)} alt="" />
          )}
        </div>
        <div className={styles.maincontainer}>
          <div className={styles.descriptioncontainer}>
            <h1>{props.data.name}</h1>
            <p>{contentHelper}</p>

            <p className={styles.source}>
              <span>Source : </span> <a href={sourceHelper}>Wikipedia</a>
              <img src={source} alt="" />
            </p>
          </div>
          <div className={styles.choicecontainer}>
            <Button
              className={
                data === 1
                  ? `${styles[props.data.name]} ${styles.active}`
                  : `${styles[props.data.name]}`
              }
              onClick={clickHandler}
            >
              <span>01</span> OVERVIEW
            </Button>
            <Button
              className={
                data === 2
                  ? `${styles[props.data.name]} ${styles.active}`
                  : `${styles[props.data.name]}`
              }
              onClick={clickHandler}
            >
              <span>02</span> INTERNAL STRUCTURE
            </Button>
            <Button
              className={
                data === 3
                  ? `${styles[props.data.name]} ${styles.active}`
                  : `${styles[props.data.name]}`
              }
              onClick={clickHandler}
            >
              <span>03</span> SURFACE GEOLOGY
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
