interface ContainerProps {
    nightModeOff:boolean
}
export default function Container({nightModeOff}:ContainerProps){
    return (
        <>
          <div className={`w-[100%] h-[444px] ${nightModeOff ? "bg-[#FEFEFE]":"bg-[#1E2A47]"}`}></div>
        </>
    )
}