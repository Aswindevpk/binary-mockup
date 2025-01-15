import React ,{useState,useEffect} from "react";
import { Header1 } from "@components/ui";
import { api } from "@services/api";
import FollowersDetail from "./FollowersDetail";
import {authors} from '../../../dummy-data/authors'

function FollowersMain() {
  let [user, setUser] = useState(authors[0]);
  let [followers ,setFollowers] = useState(authors)


  if(!user){
    return <p>loading...</p>
  }
  if(!followers){
    return <p>loading...</p>
  }
  return (
    <>
      <div className="flex gap-1 pt-10 text-sm text-secondary">
        <span >Appuspk</span>
        <span >&gt;</span>
        <span >Followers</span>
      </div>
      <Header1 className="pt-1">Followers</Header1>
      <div className="flex flex-col gap-4 mt-6">
      {followers.map((follower)=>(
        <FollowersDetail username={follower.username} user_id={follower.id} img={follower.img} about={follower.about} />
      ))} 
      </div>
    </>
  );
}

export default FollowersMain;
