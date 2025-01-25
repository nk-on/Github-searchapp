import { useEffect, useState } from "react";
import APIResponse from "../APIResponse";
import Stats from "./Stats";
import { statsData } from "../StatsData";
import UserDataContainer from "./userDataContainer";
import { userDataObj } from "../userData";
interface ContainerProps {
  nightModeOff: boolean;
}
export default function Container({ nightModeOff }: ContainerProps) {
  console.log(userDataObj)
  const query = "octocat";
  const [userData, setUserData] = useState<APIResponse | null>(null);
  const url = `https://api.github.com/users/${query}`;
  // async function fetchData() {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   console.log(data)
  //   setUserData({ ...data });
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <>
      <div
        className={`w-[100%] h-[444px] ${
          nightModeOff ? "bg-[#FEFEFE]" : "bg-[#1E2A47]"
        } p-[40px] flex`}
      >
        <div className="w-[30%] h-[100%]">
          <img
            src={userData?.avatar_url}
            className="w-[117px] h-[117px] rounded-[50%]"
          ></img>
        </div>
        <div className="w-[90%] flex flex-col gap-[15px]">
          <div className="w-[100%] flex justify-between">
            <div>
              <h1 className="text-[26px] text-[#2B3442] font-bold">{userData?.login}</h1>
              <p className="text-[#0079FF]">@{userData?.login}</p>
            </div>
            <p className="text-[#697C9A]">joined {new Date('2022-10-20T11:18:49Z').getDay()} {new Date('2022-10-20T11:18:49Z').getFullYear()}</p>
          </div>
          <div className="text-[#4B6A9B] w-[100%] md:w-[480px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
            volutpat mattis eros.
          </div>
          <div className="w-[90%] md:w-[480px] h-[85px] bg-[#F6F8FF] flex justify-between p-[20px]">
            {
              statsData.map((element)=>{
                return <Stats  title = {element.title} amount = {element.data}  />
              })
            }
          </div>
          <div className="md:grid grid-cols-2 gap-[50px]">
            {
             userDataObj.map((element)=>{
              return (
                <UserDataContainer imagePath={element.imagePath} title={element.title} />
              )
             })
            }
          </div>
        </div>
      </div>
    </>
  );
}
