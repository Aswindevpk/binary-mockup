import React, { useEffect, useState } from "react";
import { api } from "@services/api";
import { MainLayout } from "@components/layouts";
import HomeSide from "../Home/HomeSide";
import FollowersMain from "./FollowersMain";
import {authors} from '../../../dummy-data/authors'

function Followers() {
    let user = authors[0];

  
    if (!user) {
      return <p>Loading...</p>;
    }
    return <MainLayout Main={FollowersMain} Side={HomeSide}></MainLayout>;
}

export default Followers
