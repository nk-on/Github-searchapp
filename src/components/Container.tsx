import { useEffect, useRef } from 'react';
import Stats from './Stats';
import UserDataContainer from './userDataContainer';
import APIResponse from '../APIResponse';
interface ContainerProps {
  nightModeOff: boolean;
  setUserData: React.Dispatch<React.SetStateAction<APIResponse | null>>;
  userData: APIResponse | null;
  query: string | null;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Container({
  nightModeOff,
  userData,
  setUserData,
  query,
  setError,
}: ContainerProps) {
  const date = useRef(new Date())
  async function fetchData():Promise<void> {
    try {
      const url = `https://api.github.com/users/${query}`;
      console.log(query)
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error();
      }
      const data = await res.json();
      setError(false);
      setUserData({ ...data });
      date.current = new Date(data.created_at);
    } catch  {
      setError(true);
    }
  }
  useEffect(() => {
    fetchData();
  }, [query]);
  return (
    <>
      <div
        className={`w-[100%] h-[444px] rounded-[15px] ${
          nightModeOff ? 'bg-[#FEFEFE]' : 'bg-[#1E2A47]'
        } p-[40px] flex gap-[10px]`}
      >
        <div className="w-[30%] h-[100%]">
          <img
            src={userData?.avatar_url}
            className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto rounded-full object-cover"
          ></img>
        </div>
        <div className="w-[90%] flex flex-col gap-[15px]">
          <div className="w-[100%] flex justify-between">
            <div>
              <h1
                className={`text-[26px] font-bold ${
                  nightModeOff ? 'text-[#2B3442]' : 'text-[#fff]'
                }`}
              >
                {userData?.login}
              </h1>
              <p className="text-[#0079FF]">@{userData?.login}</p>
            </div>
            <div className="text-[#697C9A] flex justify-between w-[166px]">
              <p>joined {date.current.getDay()}{' '}</p> <p>{date.current.toLocaleString('en-US',{month:'short'})}</p>
              <p>{date.current.getFullYear()}</p>
            </div>
          </div>
          <div className="text-[#4B6A9B] w-[100%] md:w-[480px]">
            {userData?.bio ? (
              userData?.bio
            ) : (
              <div>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros.
              </div>
            )}
          </div>
          <div
            className={`w-[90%] md:w-[480px] h-[85px] flex justify-between p-[20px] ${
              nightModeOff ? 'bg-[#F6F8FF]' : 'bg-[#141D2F]'
            } ${nightModeOff ? 'text-[#2B3442]' : 'text-[#FFFFFF]'}`}
          >
            <Stats
              title="Repos"
              amount={Number(userData?.public_repos)}
            ></Stats>
            <Stats
              title="Followers"
              amount={Number(userData?.followers)}
            ></Stats>
            <Stats
              title="Following"
              amount={Number(userData?.following)}
            ></Stats>
          </div>
          <div
            className={`md:grid grid-cols-2 gap-[50px] ${
              nightModeOff ? 'text-[#4B6A9B]' : 'text-[#FFF]'
            }`}
          >
            <UserDataContainer
              imagePath={'./assets/Location.svg'}
              title={userData?.location}
            ></UserDataContainer>
            <UserDataContainer
              imagePath={'./assets/004-twitter.svg'}
              title={userData?.twitter_username}
            ></UserDataContainer>
            <UserDataContainer
              imagePath={'../assets/002-url.svg'}
              title={userData?.blog}
            ></UserDataContainer>
            <UserDataContainer
              imagePath={'./assets/Office.svg'}
              title={userData?.company}
            ></UserDataContainer>
          </div>
        </div>
      </div>
    </>
  );
}
