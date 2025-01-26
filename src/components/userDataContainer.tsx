interface userDataProp{
    imagePath:string,
    title:string | undefined |null,
}
export default function UserDataContainer({imagePath,title}:userDataProp){
    return (
        <div className="flex">
        <img src={imagePath} alt="icon"></img>
        <p className="text-[15px] text-[#4B6A9B]">{title}</p>
      </div>
    )
}