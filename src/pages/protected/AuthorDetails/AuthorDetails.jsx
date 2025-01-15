import React, { useEffect, useState } from "react";
import { MainLayout } from "@components/layouts";
import AuthorDetailsMain from "./AuthorDetailsMain";
import AuthorDetailsSide from "./AuthorDetailsSide";
import { useParams } from "react-router-dom";
import { api } from "@services/api";
import {authors} from '../../../dummy-data/authors'


function AuthorDetails() {
  const { id } = useParams();
  let [author, setAuthor] = useState(authors[0]);
  let [loading,setLoading] = useState(false);



  if(loading){
    return <div>loading..</div>
  }

  return <MainLayout Main={(props)=><AuthorDetailsMain {...props} author={author} id={id}/>} Side={(props)=><AuthorDetailsSide {...props} author={author}/>}></MainLayout>;

}

export default AuthorDetails;
