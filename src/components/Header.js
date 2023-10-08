import useWindows from '../hooks/use-windows'

import hamburger from '../assets/icon-hamburger.svg'

import styles from "./Header.module.css";
import "../vars.css";

const Header = (props) => {
  const { width } = useWindows();
  const clickHandler = (input) => {
    props.onSelect(input);
  };
  const menuHandler = () => {
    props.onMenu();
  }

  let navlistHelper;

  if (width > 720) {
     navlistHelper = 
     <ul>{props.data.map((item) => (
    <li
      key={Math.random()}
      className={styles[item.name]}
      onClick={() => clickHandler(item.name)}
    >
      {item.name}
    </li>))}</ul>
  } else {
     navlistHelper = <img src={hamburger} alt="" onClick={menuHandler}/>
  }

  
  return (
    <header>
      <div className={styles.logo}>
        <span>THE PLANETS</span>
      </div>
      <div className={styles.navlist}>
        {navlistHelper}
      </div>
    </header>
  );
};

export default Header;
