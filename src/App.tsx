import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import { SearchBar } from "./components/SearchBar";
import APIResponse from "./APIResponse";
function App() {
  const [nightModeOff, setNightModeOff] = useState<boolean>(true);
  const [userData, setUserData] = useState<APIResponse | null>(null);
  const [query,setQuery] = useState<string>('octocat');
  const [error,setError] = useState<boolean>(false)
  return (
    <>
      <div
        className={`'w-[100vw] h-[100vh] flex justify-center items-center  ${
          nightModeOff ? "bg-[#F6F8FF]" : "bg-[#141D2F]"
        }`}
      >
        <div className="flex flex-col gap-[10px] min-w-[90%] md:min-w-[730px] h-[600px]">
          <Header nightModeOff={nightModeOff} setNightModeOff={setNightModeOff}></Header>
          <SearchBar nightModeOff={nightModeOff} setQuery = {setQuery} error = {error}></SearchBar>
          <Container
            nightModeOff={nightModeOff}
            userData={userData}
            setUserData={setUserData}
            query = {query}
            setError = {setError}
          ></Container>
        </div>
      </div>
    </>
  );
}

export default App;
