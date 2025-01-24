import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import { SearchBar } from "./components/SearchBar";
function App() {
  const [nightModeOff, setNightModeOff] = useState<boolean>(true);
  return (
    <>
      <div
        className={`'w-[100vw] h-[100vh] flex justify-center items-center  ${
          nightModeOff ? "bg-[#F6F8FF]" : "bg-[#141D2F]"
        }`}
      >
        <div className="flex flex-col gap-[10px] w-[90%] md:w-[730px] h-[600px]">
          <Header nightModeOff={nightModeOff} setNightModeOff={setNightModeOff}></Header>
          <SearchBar nightModeOff={nightModeOff}></SearchBar>
          <Container nightModeOff={nightModeOff}></Container>
        </div>
      </div>
    </>
  );
}

export default App;
