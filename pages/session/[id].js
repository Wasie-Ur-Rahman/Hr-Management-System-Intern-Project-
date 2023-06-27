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
  
      <div >
    <div className='absolute w-full h-full bg-white '>
   <div className=' flex flex-col  items-start justify-start  gap-11 w-full h-full p-10   border-black  border-[1px]'>
     
     <div className="flex flex-col h-full w-full  rounded-md  opacity-75 justify-center items-center shadow-md ">
           <div className="flex flex-row justify-center  text-2xl font-semibold text-black rounded-md leading-loose h-20">
             APPRAISAL 
           </div>
           <div className="flex flex-col  rounded-lg h-3/4 w-1/2 justify-center bg-[#ECEBEB] items-center shadow-md shadow-stone-800   ">
     
     <div className="flex flex-col h-full w-[413px]  justify-evenly items-center  ">
       {"Appraisal Id "}
       
       <div className=" text-base text-[#8a8a8a] font-bold">
         {appraisal.id}
       </div>
       <hr className="w-[33vh] h-0.5 bg-gray-300 my-2" />
       {"Appraisal Created At "}
       
       <div className=" text-base text-[#8a8a8a] font-bold">
         { appraisal.created_at}
       </div>
       <hr className="w-[33vh] h-0.5 bg-gray-300 my-2" />

           </div>

           <div className= {`relative w-80   flex-row text-[#313132] h-32   "`}>
            <input   type= "text" id="apr_res"  name="apr_res" onChange= {(e) => setResponse(e.target.value)} value={response} placeholder="FeedBack" maxLength={50} pattern={"[A-Za-z\s]{1,50}"}  className=" input peer placeholder-transparent rounded-md focus:ring-1  focus:ring-[#4E4E4E] h-10 w-full border border-double  border-zinc-900 focus:border-[#4E4E4E]  outline-none   text-lg font-normal p-3  "/>
            <label className=" absolute left-0 -top-5 text-black text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm">
                {"Feed Back"}
              </label>
              <p className=" invisible peer-invalid:visible text-red-800 text-sm  ">
                {"Please Provide Valid FeedBackc"}
              </p>
              

        </div>
       
        <button
        className="  bg-transparent   hover:tracking-tighter text-[#949494]   w-32 h-20 font-bold border-none transition ease-in-out duration-500 text-lg hover:text-[#000000]"
        onClick={handle}
      >
        Submit
      </button>
           </div>
           
           </div>
           </div>
           </div>



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
