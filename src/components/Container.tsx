import { useEffect } from 'react';
import Stats from './Stats';
import UserDataContainer from './userDataContainer';
import APIResponse from '../APIResponse';
interface ContainerProps {
  nightModeOff: boolean;
  setUserData: React.Dispatch<React.SetStateAction<APIResponse | null>>;
  userData: APIResponse | null;
  query: string;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Container({
  nightModeOff,
  userData,
  setUserData,
  query,
  setError,
}: ContainerProps) {
  async function fetchData() {
    try {
      const url = `https://api.github.com/users/${query}`;
      const res = await fetch(url);
      if(!res.ok){
        throw new Error
      }
      const data = await res.json();
      setError(false);
      setUserData({ ...data });
    } catch(error) {
      setError(true);
    }
  }
  useEffect(() => {
    fetchData();
  }, [query]);
  return (
    <>
      <div
        className={`w-[100%] h-[444px] ${
          nightModeOff ? 'bg-[#FEFEFE]' : 'bg-[#1E2A47]'
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
              <h1
                className={`text-[26px] font-bold ${
                  nightModeOff ? 'text-[#2B3442]' : 'text-[#fff]'
                }`}
              >
                {userData?.login}
              </h1>
              <p className="text-[#0079FF]">@{userData?.login}</p>
            </div>
            <p className="text-[#697C9A]">
              joined {new Date('2022-10-20T11:18:49Z').getDay()}{' '}
              {new Date('2022-10-20T11:18:49Z').getFullYear()}
            </p>
          </div>
          <div className="text-[#4B6A9B] w-[100%] md:w-[480px]">
            {userData?.bio}
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
              imagePath={'src/assets/Location.svg'}
              title={userData?.location}
            ></UserDataContainer>
            <UserDataContainer
              imagePath={'src/assets/004-twitter.svg'}
              title={userData?.twitter_username}
            ></UserDataContainer>
            <UserDataContainer
              imagePath={'src/assets/002-url.svg'}
              title={userData?.blog}
            ></UserDataContainer>
            <UserDataContainer
              imagePath={'src/assets/Office.svg'}
              title={userData?.company}
            ></UserDataContainer>
          </div>
        </div>
      </div>
    </>
  );
}
