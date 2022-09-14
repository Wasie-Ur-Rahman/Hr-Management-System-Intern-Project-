import { supabase } from "../database/Database";
import React from "react";
import { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import { useRouter } from "next/router";
export default function AppraisalLists({ appraisals }) {
  console.log({ appraisals });


  return (
    <div>
      <div className="flex flex-col h-[65vh] w-3/4  rounded-md  bg-[#DBE3D6] opacity-75 shadow-md shadow-[#DBE3D6] ">
        <div className="flex flex-row justify-center bg-[#DBE3D6]  text-2xl font-semibold text-black rounded-md leading-loose h-20">
          Appraisal
        </div>

        {appraisals.map((appraisals) => (
          <a key={appraisals.id} href={`/session/${appraisals.id}`}>
            <a className="h-20 text-base flex flex-row">
              {appraisals.id} {appraisals.created_at}
            </a>
          </a>
        ))}
        

        <div className="flex flex-col h-full w-full  items-center "></div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
    const { data: appraisals, error } = await supabase
    .from('appraisals')
    .select('*')
  return {
    props: { appraisals },
  };
}
