import React from "react";
import { supabase } from "../../database/Database";
import { useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";

const answers = ({ appraisals_response}) => {
    return (
        <div>
          <div className="flex flex-col h-[65vh] w-3/4  rounded-md  bg-[#DBE3D6] opacity-75 shadow-md shadow-[#DBE3D6] ">
            <div className="flex flex-row justify-center bg-[#DBE3D6]  text-2xl font-semibold text-black rounded-md leading-loose h-20">
              Appraisal
            </div>
    
            {appraisals_response.map((appraisals_response) => (
              <a key={appraisals_response.id} href={`/view/${appraisals_response.id}`}>
                <a className="h-20 text-base flex flex-row">
                  {appraisals_response.id} {appraisals_response.eid} {appraisals_response.answer}
                </a>
              </a>
            ))}
            
    
            <div className="flex flex-col h-full w-full  items-center "></div>
          </div>
        </div>
      );
};
export default answers;

export async function getStaticPaths() {
  const { data: appraisal } = await supabase.from("appraisals_response").select("id");
  const paths = appraisal.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const { data: appraisals_response } = await supabase
    .from("appraisals_response")
    .select("*")
    .eq("id", id)
  return {
    props: { appraisals_response},
  };
}
