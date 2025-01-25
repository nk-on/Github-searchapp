import { useEffect, useState } from "react";
import APIResponse from "../APIResponse";
import { data } from "react-router";
interface ContainerProps {
  nightModeOff: boolean;
}
export default function Container({ nightModeOff }: ContainerProps) {
  const query = "octocat";
  const [userData, setUserData] = useState<APIResponse | null>(null);
  const url = `https://api.github.com/users/${query}`;
  async function fetchData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    setUserData({ ...data });
  }
  useEffect(() => {
    fetchData();
  }, []);
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
            <div className="flex flex-col justify-center">
                <p>Repos</p>
                <h1>8</h1>
            </div>
            <div className="flex flex-col justify-center">
                <p>Followers</p>
                <h1>8</h1>
            </div>
            <div className="flex flex-col justify-center">
                <p>Following</p>
                <h1>8</h1>
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-[50px]">
            <div className="flex grid ">
              <img src="src/assets/Location.svg" alt="location"></img>
              <p className="text-[15px] text-[#4B6A9B]">San franciso</p>
            </div>
            <div className="flex">
              <img src="src/assets/Location.svg" alt="location"></img>
              <p className="text-[15px] text-[#4B6A9B]">San franciso</p>
            </div>
            <div className="flex">
              <img src="src/assets/Location.svg" alt="location"></img>
              <p className="text-[15px] text-[#4B6A9B]">San franciso</p>
            </div>
            <div className="flex">
              <img src="src/assets/Location.svg" alt="location"></img>
              <p className="text-[15px] text-[#4B6A9B]">San franciso</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
