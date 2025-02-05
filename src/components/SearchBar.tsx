import { useRef } from "react";
interface SearchBarProps {
  setQuery: React.Dispatch<React.SetStateAction<string | null>>;
  error: boolean;
}
export function SearchBar({  setQuery, error }: SearchBarProps) {
  const searchQuery = useRef("");
  return (
    <div
      className='w-[100%] h-[69px] px-[30px] flex justify-between items-center rounded-[15px] bg-[#FEFEFE] dark:bg-[#1E2A47]'
    >
      <input
        type="search"
        defaultValue={localStorage.getItem("query") || ""}
        onChange={(event) => {
          searchQuery.current = event.target.value;
          localStorage.setItem("query", searchQuery.current);
        }}
        placeholder="Search GitHub username…"
        className='w-[90%] h-[100%] px-[10px] pl-[40px] bg-[#FEFEFE] outline-none dark:bg-[#1E2A47] text-[#4B6A9B] dark:text-[#FFFFFF] bg-[url(./assets/search.svg)] bg-no-repeat bg-center bg-left'
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
