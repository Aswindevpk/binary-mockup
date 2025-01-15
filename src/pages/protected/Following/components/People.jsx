import React, { useState,useEffect } from "react";
import UserDetail from "./UserDetail";
import { api } from "@services/api";
import {authors} from '../../../../dummy-data/authors'

function People() {
  let [user, setUser] = useState(authors[0]);
  let [followingUsers ,setFollowingUsers] = useState(authors)


  if(!user){
    return <p>loading...</p>
  }
  if(!followingUsers){
    return <p>loading...</p>
  }

  return (
    <div className="follow-people-list">
      {followingUsers.map((following)=>(
        <UserDetail username={following.username} user_id={following.id} img={following.img} about={following.about} />
      ))} 
    </div>
  );
}

export default People;
