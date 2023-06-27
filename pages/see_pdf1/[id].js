

import React from "react";
import { supabase } from "../../database/Database";




const See_pdf1  = ({employee } ) =>
{
    console.log({employee});
   
     return(
        <div className="flex flex-col w-screen h-screen font-extrabold text-3xl items-center ">
            {"Degree's"}
            <embed
    src={employee.degree[0]}
    type="application/pdf"
    frameBorder="0"
    scrolling="auto"
    height="100%"
    width="100%"
></embed>
        </div>
     )
}
export default See_pdf1

export async function getStaticPaths() 
{
    const {data:employee} = await supabase.from("employees").select('id');
   const paths= employee.map(({id}) =>({
        params :
        {
            id:id.toString(),
        },
    }));

    return {
       paths ,
       fallback : false
      }


};

 export async function getStaticProps({params : {id}})
{
  
    const {data:employee} = await supabase.from ('employees').select('*').eq('id',id).single()
    return {
        props: { employee }, 
      }
}
