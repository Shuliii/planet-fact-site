import { useState } from "react";
import useWindows from '../hooks/use-windows';

import Button from "./UI/Button";

import styles from "./MainContent.module.css";

import source from "../assets/icon-source.svg";

const MainContent = (props) => {
  const {width} = useWindows();
  const [data, setData] = useState(1);

  const clickHandler = (e) => {
    setData(+e.target.querySelector("span").innerHTML);
  };

  const liClickHandler = e => {
    if (e.target.innerHTML === "Overview") {
      setData(1)
    } else if (e.target.innerHTML === "Structure") {
      setData(2)
    } else {
      setData(3)
    }
  }

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

  const choiceContainer = <div className={styles.choicecontainer}>
  <Button type="button"
    className={
      data === 1
        ? `${styles[props.data.name]} ${styles.active}`
        : `${styles[props.data.name]}`
    }
    onClick={clickHandler}
  >
    <span>01</span> OVERVIEW
  </Button>
  <Button type="button"
    className={
      data === 2
        ? `${styles[props.data.name]} ${styles.active}`
        : `${styles[props.data.name]}`
    }
    onClick={clickHandler}
  >
    <span>02</span> INTERNAL STRUCTURE
  </Button>
  <Button type="button"
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
  const miniHeaderContainer = <div className={styles.miniContainer}>
    <ul>
      <li onClick={liClickHandler} className={
      data === 1
        ? `${styles[props.data.name]} ${styles.underline}`
        : `${styles[props.data.name]}`
    }>Overview</li>
      <li onClick={liClickHandler} className={
      data === 2
        ? `${styles[props.data.name]} ${styles.underline}`
        : `${styles[props.data.name]}`
    }>Structure</li>
      <li onClick={liClickHandler} className={
      data === 3
        ? `${styles[props.data.name]} ${styles.underline}`
        : `${styles[props.data.name]}`
    }>Surface</li>
    </ul>
  </div>

  return (
    <>
      <section className={styles.mainsection}>
        {width <=720 && miniHeaderContainer}
        <div className={styles.imagecontainer}>
          <img src={require(`../assets/${imgHelper}`)} alt={props.data.name} className={styles.fadeOut}/>
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
          {width > 720 && choiceContainer}
        </div>
      </section>
    </>
  );
};

export default MainContent;
