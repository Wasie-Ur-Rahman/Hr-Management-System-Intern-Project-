import React from "react";
import { useState } from "react";
import File_Selection from "../../components/Text_Fields/File_Selection";
import { supabase } from "../../database/Database";
import { createContext} from 'react';
import { Context } from "./Input_Text_Container";
import Name from "../../components/Navbar/Profile/Name";



const Input_Single_File_Container = ({cnic_back_saver  , SetCnicBack, cnic_front_saver , SetCnicFront })=>
{
 
  
    return(
     
      
  
  <div className="w-full flex  flex-col justify-evenly items-center h-32 mb-4 "  >
    {/* Cnic Front */}
     <File_Selection type={"file"} accept={"image/*"} id={"file_input"} palceholder={"Cnic Front"} value={cnic_front_saver} onChange={handle_cnic_front } name={"Cnic Front"} statement={"Please provide front side of your Cnic."}  />
     {/* Cnic Back */}
     <File_Selection type={"file"} accept={"image/*"} id={"file_input1"} palceholder={"Cnic Back"} value={cnic_back_saver} onChange={handle_cnic_back} name={"Cnic Back"} statement={"Please provide back side of your Cnic."}  />
  </div>

    )
    async function handle_cnic_front(e) {
      let file;
       let random_number =(Math.floor(Math.random() * 100000000000)  )
    
    
      if (e.target.files) {
       // e.target.files[0].name= random_number;
        //console.log("File_Name",e.target.files[0].name)
        file = e.target.files[0];
        console.log("File_Name",file)
      }
  
      const { data, error } = await supabase.storage
        .from("cnic.front")
        .upload("public/" + random_number, file, {
          cacheControl: "3600",
          upsert: false,
        });
      if (data) {
        console.log(data);
        const { publicURL } = supabase.storage
        .from("cnic.front")
        .getPublicUrl(`public/${random_number}`);
     
      cnic_front_saver = publicURL;
      SetCnicFront(cnic_front_saver)
      console.log(cnic_front_saver);
      } else if (error) {
        console.log(error);
      }
  
      //  const { publicURL } = supabase.storage.from('cnic.font').getPublicUrl("public/" +file?.name)
      
    }
  
  
    async function handle_cnic_back(e) {
      let file;
      let random_number1 =(Math.floor(Math.random() * 100000000000) )
      if (e.target.files) {
        file = e.target.files[0];
      }
  
      const { data, error } = await supabase.storage
        .from("cnic.back")
        .upload("public/" + random_number1, file, {
          cacheControl: "3600",
          upsert: false,
        });
      if (data) {
        console.log(data);
        const { publicURL } = supabase.storage
        .from("cnic.back")
        .getPublicUrl(`public/${random_number1}`);
      cnic_back_saver = publicURL;
      SetCnicBack(cnic_back_saver)
      console.log(cnic_back_saver)

      } else if (error) {
        console.log(error);
      }
  
      //  const { publicURL } = supabase.storage.from('cnic.font').getPublicUrl("public/" +file?.name)
     
    }
}
export default Input_Single_File_Container
