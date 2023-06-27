import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import Input_Single_File_Container from "./Input_Single_File_Container";
import Input_Text_Container from "./Input_Text_Container";
import Input_Multiple_File_Container from "./Input_Multiple_File_Container";
import Main_Button_Container from "./Main_Button_Container";
const Main_Container = () => 
{
  return(
    <div >
         
         <Input_Text_Container/>
         <Input_Single_File_Container/>
         <Input_Multiple_File_Container/>
        <Main_Button_Container/>
    </div>
  )
}
export default Main_Container
