import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
import { SearchBar } from "./components/SearchBar";
import APIResponse from "./APIResponse";
function App() {
  const nightMode: string | null = localStorage.getItem("nightMode");
  const [nightModeOff, setNightModeOff] = useState<boolean>(
    nightMode ? JSON.parse(nightMode) : true
  );
  const [userData, setUserData] = useState<APIResponse | null>(null);
  const [query, setQuery] = useState<string | null>(
    localStorage.getItem("query") || "octocat"
  );
  const [error, setError] = useState<boolean>(false);
  return (
    <>
      <div className={`${nightModeOff ? '':'dark'}`}>
        <div
          className='w-[100vw] min-h-[100vh] flex justify-center items-center bg-[#F6F8FF] dark:bg-[#141D2F]'
        >
          <div className="flex flex-col gap-[10px] min-w-[90%] md:min-w-[730px] h-[600px]">
            <Header
              nightModeOff={nightModeOff}
              setNightModeOff={setNightModeOff}
            ></Header>
            <SearchBar
              setQuery={setQuery}
              error={error}
            ></SearchBar>
            <Container
              userData={userData}
              setUserData={setUserData}
              query={query}
              setError={setError}
            ></Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
