import React, { useEffect, useState } from "react";
import { api } from "@services/api";
import { MainLayout } from "@components/layouts";
import HomeSide from "../Home/HomeSide";
import FollowingMain from "./FollowingMain";
import {authors} from '../../../dummy-data/authors'

function Following() {
    let [user, setUser] = useState(authors[0]);
  
    if (!user) {
      return <p>Loading...</p>;
    }
    return <MainLayout Main={FollowingMain} Side={HomeSide}></MainLayout>;
}

export default Following