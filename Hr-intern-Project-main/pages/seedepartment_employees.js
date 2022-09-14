
import { supabase } from '../database/Database'
import React from "react";
import  { useState } from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from "next/router";
let data_e;
var  increment = 0 ;
var increment1=0;
let check =false;
var checking;
let i=0;
let checker_extreme=0;
let display;
export default function Seedepartment_emp({  Final,EMP }) {

  checker_extreme=EMP[i].id;
  return (
    <div>
      <div className="flex flex-col h-[65vh] w-3/4  rounded-md  bg-[#DBE3D6] opacity-75 shadow-md shadow-[#DBE3D6] ">
        <div className="flex flex-row justify-center bg-[#DBE3D6]  text-2xl font-semibold text-black rounded-md leading-loose h-20">
          SEE DEPARTMENT EMPLOYEES
        </div>

                        
         {Final.map((value, index ) => {
      return <a key={index}  href={`/dep_emp_list/${checker_extreme++}`}>{value}</a>
    })}

     
      </div>
    </div>
  );
} 




export async function getStaticProps() {
    


    let EMP = [];
    const DP = [];

    let Final = [];
    if(check===false)
    {
        const {data, error1 } = await supabase.from ('department_employees').select('*')
        increment1=0
       // increment1=increment1-1;
      //  console.log(increment1)
   
        data_e= data 
      
        check=true;
        checking=data.length;
    }
   
 
 
   
   
    //data_e= data 
    //increment=data.length
  


   
    for(let i=0;i<checking;i++ )
    {

   const {data: dep, error } = await supabase
   .from('departments')
   .select(`
     *
   `).eq('dep_id',(data_e[i]).dep_id).single() ; 
  // console.log(dep);
   DP.push(dep)
    }
//    console.log(dep)
//   console.log(dep)
 //console.log("1");
//console.log(increment1);
for(let i=0;i<checking;i++ )
    {
   const {data: empl, error2 } = await supabase
   .from('employees')
   .select(`
     *
   `).eq('emp_id',(data_e[i]).emp_id).single() ;
 //  console.log(empl); 
        EMP.push(empl)
    }


const arr = EMP.map(EMP => EMP.id);
 console.log(arr);
const arr2 = EMP.map(EMP => EMP.emp_fullname);
 console.log(arr2);
const arr3 = DP.map(DP => DP.dep_name);
console.log(arr3);
 
checker_extreme= EMP[i].id;
console.log("Checker" , checker_extreme)

  for (let i = 0; i< checking; i++) {
    for(let j = 0; j< 9; j++) {
        Final[i] = [];
    }
}

let j=0;
for(let v=0; v<checking;v++)
{

for(j=0;j<1;j++)
{
    Final[v][0]=arr[v];
    Final[v][1]="     ";
    Final[v][2]=arr2[v];
    Final[v][3]="     ";
    Final[v][4]=arr3[v];
    Final[v][5]="     ";
    
}

}
    return {
      props: { Final  ,EMP },
    };
  }