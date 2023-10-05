import { useState } from "react";

import styles from "./Header.module.css";
import "../vars.css";

const Header = (props) => {
  const clickHandler = (input) => {
    props.onSelect(input);
  };

  const navlistHelper = props.data.map((item) => (
    <li
      key={Math.random()}
      className={styles[item.name]}
      onClick={() => clickHandler(item.name)}
    >
      {item.name}
    </li>
  ));
  return (
    <header>
      <div className={styles.logo}>
        <span>THE PLANETS</span>
      </div>
      <div className={styles.navlist}>
        <ul>{navlistHelper}</ul>
      </div>
    </header>
  );
};

export default Header;
