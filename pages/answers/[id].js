import React from "react";
import { supabase } from "../../database/Database";
import "antd/dist/antd.css";
 import AppraisalResponseList from "../../components/List/AppraisalResponseList";
 import { getLayout } from "../../layout/AdminLayout";

 export default function Answers_d  ({ appraisals_response}) {
    return (
      <div className='w-full h-full overflow-auto bg-white '>
      <div className=' flex flex-col  items-start justify-start  gap-11 w-full h-screen p-10  border-t-0 border-black border-l-0 border-[1px]'>
        
        <div className="flex flex-col h-full w-3/4  rounded-md  opacity-75  shadow-md ">
              <div className="flex flex-row justify-center  text-2xl font-semibold text-black rounded-md leading-loose h-20">
               APPRAISALS RESPONSE
              </div>
  
              {appraisals_response.map((appraisals_response) => (
                  <div key={appraisals_response.id}>
                  <AppraisalResponseList res={appraisals_response} link={`/view/${appraisals_response.id}`}/>
                  </div>
                ))}
  
            </div>
                      
   </div>
    </div>
      );
};
Answers_d.getLayout = getLayout
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
