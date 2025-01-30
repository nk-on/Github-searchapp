import { useRef } from "react";
interface SearchBarProps {
  nightModeOff: boolean;
  setQuery:React.Dispatch<React.SetStateAction<string | null>>
  error:boolean
}
export function SearchBar({ nightModeOff ,setQuery,error}: SearchBarProps) {
  const searchQuery = useRef('');
  return (
    <div
      className={`w-[100%] h-[69px] px-[50px] flex justify-between items-center rounded-[15px]  ${
        nightModeOff ? "bg-[#FEFEFE]" : "bg-[#1E2A47]"
      }`}
    >
      <img src='./assets/Combined Shape.svg' className="w-[24px] h-[24px]"></img>
      <input
        type="search"
        defaultValue={localStorage.getItem('query') ||  ""}
        onChange={(event)=>{
          searchQuery.current = event.target.value;
          localStorage.setItem('query',searchQuery.current);
        }}
        className={`w-[300px] h-[100%] px-[10px] ${nightModeOff ? "bg-[#FEFEFE]" : "bg-[#1E2A47]"} ${
          nightModeOff ? "text-[#4B6A9B]" : "text-[#FFFFFF]"
        } `}
      ></input>
      {error && <div className="text-[15px] font-bold text-[#F74646]">No results</div>}
      <button onClick = {()=>{
         setQuery(searchQuery.current)
      }} className={`w-[106px] h-[50px] rounded-[10px] bg-[#0079FF] text-[#FFF] font-700"
        } ` }>Search</button>
    </div>
  );
}
