interface userDataProp{
    imagePath:string,
    title:string | undefined |null,
}
export default function UserDataContainer({imagePath,title}:userDataProp){
    return (
        <div className="flex">
        <img src={imagePath} alt="icon"></img>
        <div className="text-[15px] text-[#4B6A9B] flex gap-[5px]">{title ? title : <div className="text-[#a5b4cd]">Not available</div>}</div>
      </div>
    )
}