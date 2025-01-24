import { useEffect, useState } from "react";
import APIResponse from '../APIResponse'
interface ContainerProps {
  nightModeOff: boolean;
}
export default function Container({ nightModeOff }: ContainerProps) {
  const query = "octocat";
  const [userData, setUserData] = useState<APIResponse | null>(null);
  const url = `https://api.github.com/search/users?q=${query}`;
  async function fetchData() {
    const res = await fetch(url);
    const data = await res.json();
    setUserData({...data.items[0]});
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div
        className={`w-[100%] h-[444px] ${nightModeOff ? "bg-[#FEFEFE]" : "bg-[#1E2A47]"}`}
      >
        <div className="flex w-[90%]">
            <img src={userData?.avatar_url} className="w-[117px] h-[117px] rounded-[50%]"></img>
            <div>
                
            </div>
        </div>
      </div>
    </>
  );
}
