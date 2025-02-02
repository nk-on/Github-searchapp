import { useRef } from "react";
interface SearchBarProps {
  setQuery: React.Dispatch<React.SetStateAction<string | null>>;
  error: boolean;
}
export function SearchBar({  setQuery, error }: SearchBarProps) {
  const searchQuery = useRef("");
  return (
    <div
      className='w-[100%] h-[69px] px-[50px] flex justify-evenly items-center rounded-[15px] bg-[#FEFEFE] dark:bg-[#1E2A47]'
    >
      {/* <div className="flex justify-center items-center w-[5%]">
        <img src="./assets/Combined Shape.svg" className="w-[24px] h-[24px]"></img>
      </div> */}
      <input
        type="search"
        defaultValue={localStorage.getItem("query") || ""}
        onChange={(event) => {
          searchQuery.current = event.target.value;
          localStorage.setItem("query", searchQuery.current);
        }}
        placeholder="Search GitHub username…"
        className={`w-[90%] h-[100%] px-[10px] bg-[url(./assets/Combined Shape.svg)] bg-[#FEFEFE] dark:bg-[#1E2A47] text-[#4B6A9B] dark:text-[#FFFFFF]`}
      ></input>
      {error && <div className="text-[15px] font-bold text-[#F74646]">No results</div>}
      <button
        onClick={() => {
          setQuery(searchQuery.current);
        }}
        className={`w-[106px] h-[50px] rounded-[10px] bg-[#0079FF] text-[#FFF] font-700"
        } `}
      >
        Search
      </button>
    </div>
  );
}
