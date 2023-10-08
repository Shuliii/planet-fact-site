import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import BottomContent from "./components/BottomContent";
import OpenMenu from './components/OpenMenu'
import data from "./data.json";

function App() {
  const [planet, setPlanet] = useState("Mercury");
  const [openMenu, setOpenMenu] = useState(false)

  const selectHandler = (input) => {
    setPlanet(input);
  };

  const menuHandler = () => {
    setOpenMenu(prev => {
      return !prev;
    });
  }

  const openMenuHandler = input => {
    setPlanet(input);
    setOpenMenu(false);
  }

  let processData;

  processData = Object.assign(
    {},
    ...data.filter((item) => {
      return item.name === planet;
    })
  );

  const mainHelper = openMenu ? <OpenMenu onClick={openMenuHandler}/> : <main>
  <MainContent data={processData} />
  <BottomContent data={processData} />
</main>
  return (
    <>
      <Header data={data} onSelect={selectHandler} onMenu={menuHandler}/>
      {mainHelper}
    </>
  );
}

export default App;
