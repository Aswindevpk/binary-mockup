import React, { useEffect, useState } from "react";
import { api } from "@services/api";
import { MainLayout } from "@components/layouts";
import ProfileMain from "./ProfileMain";
import ProfileSide from "./ProfileSide";
import { authors } from "../../../dummy-data/authors";

const Profile = () => {
  let [user, setUser] = useState(authors[0]);

  if (!user) {
    return <p>Loading...</p>;
  }
  return  <MainLayout Main={(props)=><ProfileMain {...props} user={user}/>} Side={(props)=><ProfileSide {...props} user={user}/>}/>;
};

export default Profile;
