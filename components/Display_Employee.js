import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";
import Success from "./Success";
import Unsuccess from "./Unsuccess";
import { supabase } from "../database/Database";
export default function Display_Employee() {
  return (
    <div className=" flex flex-row h-fit w-screen bg-[#ECEBEB]  items-center relative justify-center top-36  ">
      <div className="flex flex-col rounded-t-lg max-h-fit w-[900px] bg-[#ECEBEB] shadow-md shadow-stone-800 items-center mx-96">
        <div className="flex flex-col rounded-lg h-fit w-11/12  b items-center">
          {/* <div className="flex flex-row h-16 w-full rounded-lg bg-slate-700 justify-center items-center font-semibold text-2xl"> <p>Add Employees</p></div> */}
          <div className="flex flex-col w-3/6 h-fit   items-center justify-start font-semibold text-base  ">
            <div className="flex flex-row rounded">
              <img src="/pr.svg" width={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
