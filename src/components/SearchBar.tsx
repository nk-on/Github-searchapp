import { useRef } from "react";
interface SearchBarProps {
  nightModeOff: boolean;
  setQuery:React.Dispatch<React.SetStateAction<string>>
}
export function SearchBar({ nightModeOff ,setQuery }: SearchBarProps) {
  console.log(nightModeOff);
  const searchQuery = useRef('')
  return (
    <div
      className={`w-[100%] h-[69px] px-[50px] flex  items-center rounded-[15px]  ${
        nightModeOff ? "bg-[#FEFEFE]" : "bg-[#1E2A47]"
      }`}
    >
      <img src='src/assets/Combined Shape.svg' className="w-[24px] h-[24px]"></img>
      <input
        type="search"
        onChange={(event)=>{
          searchQuery.current = event.target.value;
        }}
        className={`w-[90%] h-[100%] px-[10px] ${nightModeOff ? "bg-[#FEFEFE]" : "bg-[#1E2A47]"} ${
          nightModeOff ? "text-[#4B6A9B]" : "text-[#FFFFFF]"
        } `}
      ></input>
      <button onClick = {()=>{
         setQuery(searchQuery.current)
      }} className={`w-[106px] h-[50px] rounded-[10px] bg-[#0079FF] text-[#FFF] font-700"
        } ` }>Search</button>
    </div>
  );
}
