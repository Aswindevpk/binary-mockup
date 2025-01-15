import React, { useState,useEffect } from "react";
import { api } from "@services/api";
import AboutEdit from "./AboutEdit";
import AboutView from "./AboutView";
import AboutBlank from "./AboutBlank";
import { FollowStat } from '@components'
import { authors } from "../../../../dummy-data/authors";

const About = () => {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  let [user, setUser] = useState(authors[0]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {user.about && edit === false && (
        <AboutView about={user.about} setEdit={setEdit} />
      )}
      {edit && <AboutEdit setEdit={setEdit} setUser={setUser} user={user} />}
      {user.about == null ||
        (user.about === "" && edit === false && (
          <AboutBlank setEdit={setEdit} />
        ))}
      <FollowStat/>
    </>
  );
};

export default About;
