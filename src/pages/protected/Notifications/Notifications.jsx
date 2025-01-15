import React, { useEffect, useState } from "react";
import { api } from "@services/api";
import { MainLayout } from "@components/layouts";
import HomeSide from "../Home/HomeSide";
import NotificationsMain from "./NotificationsMain";
import { authors } from "../../../dummy-data/authors";


function Followers() {
    let [user, setUser] = useState(authors[0]);
  
    if (!user) {
      return <p>Loading...</p>;
    }
    return <MainLayout Main={NotificationsMain} Side={HomeSide}></MainLayout>;
}

export default Followers
