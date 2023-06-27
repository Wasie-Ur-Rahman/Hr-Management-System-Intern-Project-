import React from "react";
import { useState } from "react";
import File_Selection from "./File_Selection";
import { supabase } from "../../database/Database";
import { createContext} from 'react';
let cnic_front_saver;
let cnic_back_saver;

export const Context1 = createContext({
  cnic_front_saver: null,
  cnic_back_saver: null,
})
const Input_Single_File_Container = ()=>
{
  
    return(
  <div className="w-full flex  flex-col justify-evenly items-center h-32 "  >
    {/* Cnic Front */}
     <File_Selection type={"file"} accept={"image/*"} id={"file_input"} palceholder={"Cnic Front"} onChange={handle_cnic_front} name={"Cnic Front"} statement={"Please provide front side of your Cnic."}  />
     {/* Cnic Back */}
     <File_Selection type={"file"} accept={"image/*"} id={"file_input1"} palceholder={"Cnic Back"} onChange={handle_cnic_back} name={"Cnic Back"} statement={"Please provide back side of your Cnic."}  />
  </div>
    )
}
export default Input_Single_File_Container
async function handle_cnic_front(e) {
    let file;

    if (e.target.files) {
      file = e.target.files[0];
    }

    const { data, error } = await supabase.storage
      .from("cnic.front")
      .upload("public/" + file?.name, file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (data) {
      console.log(data);
    } else if (error) {
      console.log(error);
    }

    //  const { publicURL } = supabase.storage.from('cnic.font').getPublicUrl("public/" +file?.name)
    const { publicURL } = supabase.storage
      .from("cnic.front")
      .getPublicUrl(`public/${file.name}`);
    console.log(publicURL);
    cnic_front_saver = publicURL;
  }


  async function handle_cnic_back(e) {
    let file;

    if (e.target.files) {
      file = e.target.files[0];
    }

    const { data, error } = await supabase.storage
      .from("cnic.back")
      .upload("public/" + file?.name, file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (data) {
      console.log(data);
    } else if (error) {
      console.log(error);
    }

    //  const { publicURL } = supabase.storage.from('cnic.font').getPublicUrl("public/" +file?.name)
    const { publicURL } = supabase.storage
      .from("cnic.back")
      .getPublicUrl(`public/${file.name}`);
    console.log(publicURL);
    cnic_back_saver = publicURL;
  }