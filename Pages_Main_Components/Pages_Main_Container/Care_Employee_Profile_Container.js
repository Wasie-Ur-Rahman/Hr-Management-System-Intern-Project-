
import React from "react";
import List_div from "../../components/Profile/List_div";
import { supabase } from "../../database/Database";
const Care_Employee_Profile_Container =({employee}) =>
{

    return(
        <div> 
    
         <List_div statement={"Your Name"}   emp={employee.emp_fullname} />
 
        </div>
       
    )
}
export default Care_Employee_Profile_Container

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
