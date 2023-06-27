
import React, { useContext ,useState,useEffect} from "react";
import "antd/dist/antd.css";
import  { Context } from "../database/authContext";
import Home from "../components/Home";
import Emp from '../components/Emp'
import { useRouter } from "next/router";


export default  function Index({}) {

  const router =useRouter();
  const { user, role, uuid ,emp} = useContext(Context)

  useEffect(()=> {
    if(user===null){
      router.push('/login')
    }
    if(role==='employee'){
      router.push('/Emp')
    }
    if(role==='admin'){
      router.push('/Adm')
    }
      
  })

  return (
    <div>
       Loading
     </div>
  );
}

