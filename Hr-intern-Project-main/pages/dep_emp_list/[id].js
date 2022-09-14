
import React from "react";
import { supabase } from "../../database/Database";
let data_e;
var checking;


const Dep_Emp_Details  = ({employee ,department1} ) =>
{
    console.log({employee});
    console.log({department1});
     return(
        <div>
            Employee Id:  <br/>
            {employee.id} <br/>
            Employee Name  <br/> 
            {employee.emp_fullname} <br/>
            Employee Address Home  <br/> 
            {employee.personal_email} <br/>
            Employee Department  <br/> 
         {department1.dep_name} <br/> 
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
 export default Dep_Emp_Details

// export async function getStaticPaths() 
// {
//     const {data:employee} = await supabase.from("employees").select('id');
//    const paths= employee.map(({id}) =>({
//         params :
//         {
//             id:id.toString(),
//         },
//     }));

//     return {
//        paths ,
//        fallback : false
//       }


// };

 export async function getServerSideProps({params : {id}})
{
    let i=0;
    const {data:employees1} = await supabase.from ('employees').select('emp_id').eq('id',id).single()
    let data_pass = employees1;
    console.log(data_pass);
    const {data:department} = await supabase.from ('department_employees').select('dep_id').eq('emp_id',data_pass.emp_id).single()
    console.log("Hell",department);
    let did = department;
    console.log(did);
    const {data:department1} = await supabase.from ('departments').select('dep_name').eq('dep_id',did.dep_id).single()
    console.log("11",department1);
    const {data:employee} = await supabase.from ('employees').select('*').eq('id',id).single()
    return {
        props: { employee ,department1}, 
      }
}
