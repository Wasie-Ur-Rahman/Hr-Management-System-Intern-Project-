
import React from "react";
import { supabase } from "../../database/Database";




const Emp_Details  = ({employee } ) =>
{
    console.log({employee});
   
     return(
        <div>
            Employee Id:  <br/>
            {employee.id} <br/>
            Employee Name  <br/> 
            {employee.emp_fullname} <br/> 
            Employee Address Home  <br/> 
            {employee.personal_email} <br/>
            Employee Cnic  <br/> 
            {employee.emp_cnic} <br/>
            Employee Qualification  <br/> 
             {employee.emp_qualification}  <br/>
             Employee Skills  <br/> 
              {employee.emp_skills}  <br/> 
              Employee Degree  <br/> 
              {employee.degree}  <br/> 
              Employee Certification  <br/> 
              {employee.certification}  <br/>
              Employee Cnic Front  <br/> 
               {employee.cnic_front}  <br/>
               Employee Cnic Back  <br/> 
                {employee.cnic_back}   <br/>
                Employee Departure Date  <br/> 
                 {employee.departure_on}  <br/> 
                 Employee Joined Date  <br/> 
                 {employee.joined_on} <br/> 
                 Employee Address Home  <br/> 
                 {employee.addr_home} <br/> 
                 Employee Address Mail  <br/> 
                 {employee.addr_mail}
        </div>
     )
}
export default Emp_Details

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
