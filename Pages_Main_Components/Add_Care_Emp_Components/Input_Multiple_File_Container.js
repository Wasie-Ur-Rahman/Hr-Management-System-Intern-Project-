import React from "react";
import { useState } from "react";
import { supabase } from "../../database/Database";
import Multiple_File_Selection from "../../components/Text_Fields/Multiple_File_Selection";
import { createContext } from "react";
import { GoTrueClient } from "@supabase/supabase-js";
const data_saver = [];
const data_saver_1 = [];
const check = false;
const check1=false;
  
const Input_Multiple_File_Container = ({url_saver=[], url_saver_1=[] , Seturlsaver ,Seturl1saver}) =>
{
    return(
    
        <div className= "w-full flex  flex-col justify-evenly items-center h-28 my-12  " >
            {/* Certification */}
            <Multiple_File_Selection  type={"file"} accept={".pdf"} id={"file_input2"} placeholder={"Certification"} onChange={handle_certification} name={"Certification"} statement={"Please provide Certification in pdf form."}/>

           {/* Degree */}
            <Multiple_File_Selection  type={"file"} accept={".pdf"} id={"file_input3"} placeholder={"Degree"} onChange={handle_degree} name={"Degree"} statement={"Please provide Degree's in pdf form."}/>
        </div>
        
    )
    async function handle_certification(e) {
      url_saver=[];
      let capture = [];
      console.log(e.target.files);
      console.log("Hello");
      console.log(e.target.files.length);
      const file = [];
     
      for (let i = 0; i < e.target.files.length; i++) {
        if (e.target.files) {
          file[i] = e.target.files[i];
          console.log(123);
          console.log(file[i]);
        }
      }
      console.log(2456);
      console.log(file);
  
      for (let i = 0; i < e.target.files.length; i++) {
        let random_number =(Math.floor(Math.random() * 100000000000)  )
        capture[i]=random_number;
        const { data, error } = await supabase.storage
          .from("certification")
          .upload("public/" + random_number, file[i], {
            cacheControl: "3600",
            upsert: false,
          });
        data_saver[i] = data;
        if (data) {
          //console.log(data);
          console.log(986);
          console.log(data_saver[i]);
check=true;
        } 
        else if (error) {
          console.log(error);
          check=false;
        }

        if(check===true)
        {
        for (let i = 0; i < e.target.files.length; i++) {
          const { publicURL } = supabase.storage
            .from("certification")
            .getPublicUrl("public/" + capture[i]);
          url_saver[i] = publicURL;
          Seturlsaver(url_saver)
          console.log("url_saver",url_saver);
          console.log(33333);
        }
        
        console.log("Now",url_saver)
      }
      else
      {
        console.log("wrong")
      }
      }
     // console.log(data_saver);
  
      //
  
     
    }
  
  
    async function handle_degree(e) {
      console.log(e.target.files);
      console.log("Hello");
      console.log(e.target.files.length);
      const file = [];
      let capture = [];
      url_saver_1=[];
  
      for (let i = 0; i < e.target.files.length; i++) {
        let random_number =(Math.floor(Math.random() * 100000000000)  )
        capture[i]=random_number;
        if (e.target.files) {
          file[i] = e.target.files[i];
          console.log(123);
          console.log(file[i]);
        }
      }
      console.log(2456);
      console.log(file);
  
      for (let i = 0; i < e.target.files.length; i++) {
        let random_number =(Math.floor(Math.random() * 100000000000)  )
        const { data, error } = await supabase.storage
          .from("degree")
          .upload("public/" + random_number, file[i], {
            cacheControl: "3600",
            upsert: false,
          });
        data_saver_1[i] = data;
        if (data) {
          //console.log(data);
          console.log(986);
          console.log(data_saver_1[i]);
          check1=true;
        } else if (error) {
          console.log(error);
          check1=false;
        }
      }
     
      if(check1===true)
      {
      for (let i = 0; i < e.target.files.length; i++) {
        const { publicURL } = supabase.storage
          .from("degree")
          .getPublicUrl("public/" + capture[i]);
        url_saver_1[i] = publicURL;
        Seturl1saver(url_saver_1)
        console.log("url_saver_1",url_saver_1);
        console.log(33333);
      }
      console.log(url_saver_1);
    }
    else
    {
      console.log("wrong")
    }
  }
}
export default Input_Multiple_File_Container
