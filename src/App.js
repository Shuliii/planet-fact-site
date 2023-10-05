import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import BottomContent from "./components/BottomContent";
import data from "./data.json";

function App() {
  const [planet, setPlanet] = useState("Mercury");

  let processData;

  const selectHandler = (input) => {
    setPlanet(input);
  };

  processData = Object.assign(
    {},
    ...data.filter((item) => {
      return item.name === planet;
    })
  );
  console.log(processData);
  return (
    <>
      <Header data={data} onSelect={selectHandler} />
      <main>
        <MainContent data={processData} />
        <BottomContent data={processData} />
      </main>
    </>
  );
}

export default App;
