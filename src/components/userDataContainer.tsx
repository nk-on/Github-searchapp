interface userDataProp{
    imagePath:string,
    title:string | undefined |null,
    containsLink:boolean
}
export default function UserDataContainer({imagePath,title,containsLink}:userDataProp){
    const renderTitle = ()=>{
        if(title){
            return containsLink ? <a href={title} target="_blank">{title}</a> : <div>{title}</div>
        }else{
            return <div className="text-[#a5b4cd]">Not available</div>
        }
    }
    return (
        <div className="flex">
        <img src={imagePath} alt="icon"></img>
        <div className="text-[15px] text-[#4B6A9B] flex gap-[5px]">{
            renderTitle()
        }</div>
      </div>
    )
}