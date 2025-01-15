import React, { useEffect, useState } from 'react'
import { api } from "@services/api";
import { MainLayout } from "@components/layouts";
import ProfileSide from '../Profile/ProfileSide';
import ReadingListMain from './ReadingListMain';
import { authors } from '../../../dummy-data/authors';

function ReadingList() {
    let [user, setUser] = useState(authors[0]);
  
    if (!user) {
      return <p>Loading...</p>;
    }
    return  <MainLayout Main={(props)=><ReadingListMain {...props} user={user}/>} Side={(props)=><ProfileSide {...props} user={user}/>}/>;
}

export default ReadingList
