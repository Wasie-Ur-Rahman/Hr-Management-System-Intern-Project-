import React from "react";
import { supabase } from "../../database/Database";
import { useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";

const Emp_Details = ({ appraisal}) => {
  console.log({ appraisal });
  const [response,setResponse]=useState();
  const user=supabase.auth.user()


    function errorfun() {
        Modal.error({
          title: "Unsuccessful",
          content: "Try Again",
        });
      }
    
      function success() {
        Modal.success({
          title: "Session Created",
          content: "Appraisal Created",
        });
      }
    const handle=async()=>{

        const { data, error } = await supabase
        .from('appraisals_response')
        .insert([
          { appraisal_id: appraisal.id, eid: user.id ,answer:response},
        ])

        if(error){
            errorfun()
        }
        else{
            success()
        }

    }

  return (
    <div>
      appraisal Id: <br />
      {appraisal.id} <br />
      appraisal created at <br />
      {appraisal.created_at} <br />

      <input
        type="text"
        id="text"
        name="text"
        onChange={(e) => setResponse(e.target.value)}
        className=" bg-slate-500 input peer placeholder-transparent rounded-md focus:ring-1 focus:ring-[#3D4E42] h-10 w-full border border-double  border-white focus:border-[#3D4E42]  outline-none   text-lg font-normal p-2 "
        placeholder="Your Feed Back"
        autoComplete="off"
        value={response}
        required
      />

      <button
        className="  bg-transparent   hover:tracking-tighter text-[#DBE3D6]   w-full h-20 font-bold border-none transition ease-in-out duration-500 text-lg hover:text-[#5EAC74]"
        onClick={handle}
      >
        Submit
      </button>

    </div>
  );
};
export default Emp_Details;

export async function getStaticPaths() {
  const { data: appraisal } = await supabase.from("appraisals").select("id");
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
  const { data: appraisal } = await supabase
    .from("appraisals")
    .select("*")
    .eq("id", id)
    .single();
  return {
    props: { appraisal},
  };
}
