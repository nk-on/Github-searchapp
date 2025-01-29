interface HeaderProps {
  nightModeOff: boolean;
  setNightModeOff: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Header({ nightModeOff, setNightModeOff }: HeaderProps) {
  return (
    <div className={`w-[100%] flex justify-between items-center ${!nightModeOff && "text-[#FFF]"}`}>
      <h1 className="font-bold text-[26px]">devfinder</h1>
      <span className="flex gap-[5px] text-[13px]">
        {nightModeOff ? "Dark" : "Light"}{" "}
        <img
          src={nightModeOff ? "../public/assets/NightIcon.svg" : "../public/assets/DayIcon.svg"}
          alt="ModeIcon"
          onClick={()=>{
            setNightModeOff(!nightModeOff);
            localStorage.setItem('nightMode',JSON.stringify(!nightModeOff));
          }}
          className="cursor-pointer w-[20px] h-[20px]"
        ></img>
      </span>
    </div>
  );
}