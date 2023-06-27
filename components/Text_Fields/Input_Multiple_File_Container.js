import React from "react";
import { useState } from "react";
import { supabase } from "../../database/Database";
import Multiple_File_Selection from "./Multiple_File_Selection";
import { createContext } from "react";
const data_saver = [];
const url_saver = [];
const url_saver_1 = [];
const data_saver_1 = [];
export const Context2 = createContext({
    url_saver: null,
     url_saver_1: null,
  })
  
const Input_Multiple_File_Container = ({}) =>
{
    return(
        <div className= "w-full flex  flex-col justify-evenly items-center h-28 my-12 " >
            {/* Certification */}
            <Multiple_File_Selection  type={"file"} accept={".pdf"} id={"file_input2"} placeholder={"Certification"} onChange={handle_certification} name={"Certification"} statement={"Please provide Certification in pdf form."}/>

           {/* Degree */}
            <Multiple_File_Selection  type={"file"} accept={".pdf"} id={"file_input3"} placeholder={"Degree"} onChange={handle_certification} name={"Degree"} statement={"Please provide Degree's in pdf form."}/>
        </div>
    )
}
export default Input_Multiple_File_Container
async function handle_certification(e) {
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
      const { data, error } = await supabase.storage
        .from("certification")
        .upload("public/" + file[i]?.name, file[i], {
          cacheControl: "3600",
          upsert: false,
        });
      data_saver[i] = data;
      if (data) {
        //console.log(data);
        console.log(986);
        console.log(data_saver[i]);
      } else if (error) {
        console.log(error);
      }
    }
    console.log(data_saver);

    //

    for (let i = 0; i < e.target.files.length; i++) {
      const { publicURL } = supabase.storage
        .from("certification")
        .getPublicUrl("public/" + file[i]?.name);
      url_saver[i] = publicURL;
      console.log(url_saver[i]);
      console.log(33333);
    }
    console.log(url_saver);
  }


  async function handle_degree(e) {
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
      const { data, error } = await supabase.storage
        .from("degree")
        .upload("public/" + file[i]?.name, file[i], {
          cacheControl: "3600",
          upsert: false,
        });
      data_saver_1[i] = data;
      if (data) {
        //console.log(data);
        console.log(986);
        console.log(data_saver_1[i]);
      } else if (error) {
        console.log(error);
      }
    }
    console.log(data_saver_1);

    for (let i = 0; i < e.target.files.length; i++) {
      const { publicURL } = supabase.storage
        .from("degree")
        .getPublicUrl("public/" + file[i]?.name);
      url_saver_1[i] = publicURL;
      console.log(url_saver_1[i]);
      console.log(33333);
    }
    console.log(url_saver_1);
  }