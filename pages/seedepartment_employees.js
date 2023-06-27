
import { supabase } from '../database/Database'
import React from "react";
import 'antd/dist/antd.css';
import DepartmentEmpList from'../components/List/DepartmentEmpList'
import { getLayout } from '../layout/AdminLayout';

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
  console.log(Final,"Final")
  console.log(EMP,"Emp")
  return (
    <div className='w-full h-full overflow-auto bg-white '>
    <div className=' flex flex-col  items-center justify-start  gap-11 w-full h-screen p-10  border-t-0 border-black border-l-0 border-[1px]'>
      
      <div className="flex flex-col h-full w-3/4  rounded-md  opacity-75  shadow-md ">
            <div className="flex flex-row justify-center  text-2xl font-semibold text-black rounded-md leading-loose h-20">
             Department Employees
            </div>

           
            {Final.map((Final, index ) => {
              
              return <a key={index}  href={`/dep_emp_list/${checker_extreme++}`}>
                 <div className="each flex hover:shadow-lg select-none p-5 rounded-md border-gray-300 border mb-3 hover:border-gray-500 cursor-pointer">
                    <div className="left">
                        <div className="header text-gray-800 font-semibold text-2xl">{`${Final[2]}`}</div>
                        <div className="desc text-gray-600">{`${Final[4]}`} </div>
                    </div>
                    <div className="right m-auto mr-0">
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokelinecap="round" strokelinejoin="round" strokewidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>
                    </div>
                </div>
                
            </a>
            })}

          </div>
                    
 </div>
  </div>
  );
} 

Seedepartment_emp.getLayout = getLayout


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