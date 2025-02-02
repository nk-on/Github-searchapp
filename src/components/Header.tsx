import { useEffect } from "react";

interface HeaderProps {
  nightModeOff: boolean;
  setNightModeOff: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Header({ nightModeOff, setNightModeOff }: HeaderProps) {
  useEffect(()=>{
    localStorage.setItem('nightMode',JSON.stringify(nightModeOff));
  },[nightModeOff]);
  return (
    <div className='w-[100%] flex justify-between items-center dark:text-[#FFF]'>
      <h1 className="font-bold text-[26px]">devfinder</h1>
      <span className="flex gap-[5px] text-[13px]">
        {nightModeOff ? "Dark" : "Light"}{" "}
        <img
          src={nightModeOff ? "./assets/NightIcon.svg" : "./assets/DayIcon.svg"}
          alt="ModeIcon"
          onClick={()=>{
            setNightModeOff(!nightModeOff);
          }}
          className="cursor-pointer w-[20px] h-[20px]"
        ></img>
      </span>
    </div>
  );
}