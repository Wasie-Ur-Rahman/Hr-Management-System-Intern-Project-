import { supabase } from "../database/Database";
import React from "react";
import "antd/dist/antd.css";
import AppraisalsList from "../components/List/AppraisalsList";
import { getLayout } from '../layout/AdminLayout';

export default function AppraisalLists({ appraisals }) {
  return (
    <div className='w-full h-full overflow-auto bg-white '>
    <div className=' flex flex-col  items-center justify-center  gap-11 w-full h-screen p-10  border-t-0 border-black border-l-0 border-[1px]'>
      
      <div className="flex flex-col h-full w-3/4  rounded-md  opacity-75  shadow-md ">
            <div className="flex flex-row justify-center  text-2xl font-semibold text-black rounded-md leading-loose h-20">
             APPRAISALS
            </div>

            {appraisals.map((appraisals) => (
                <div key={appraisals.id}>
                <AppraisalsList apr={appraisals} link={`/session/${appraisals.id}`}/>
                </div>
              ))}

          </div>
                    
 </div>
  </div>
  )
}
AppraisalLists.getLayout = getLayout
export async function getStaticProps() {
    const { data: appraisals, error } = await supabase
    .from('appraisals')
    .select('*')
  return {
    props: { appraisals },
  };
}

