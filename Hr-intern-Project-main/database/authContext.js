
import { createContext, useEffect, useState ,useContext} from 'react';
import { supabase } from './Database';


export const Context = createContext({
    user: null,
    role: null,
    uuid: null,
})
const RoleType={
  admin:"admin",
  employee:"employee"
}
const Provider=({children})=>{

  const [user,setUser]=useState(supabase.auth.user())
  const [role,setRole]=useState(RoleType)
  const [uuid,setUuid]=useState(null)
  

        useEffect(()=>{
          const getUserRole=async()=>{
              const currentUser=supabase.auth.user()
              if(currentUser){
                      const { data: employees, error } = await supabase
                        .from("employees")  
                        .select("*")
                        .eq("emp_id", currentUser.id)
                        .single();

                        setUuid(currentUser.id)
                      if (employees) {
                        setRole(RoleType.employee);
                        setUser(currentUser)
                      } else {
                        setRole(RoleType.admin);
                        setUser(currentUser)
                      }
              }
          } 
          getUserRole()
          supabase.auth.onAuthStateChange(()=>{
            getUserRole()
          })
        },[])

        const exposed={
          user,
          role,
          uuid,
        }
    return(
        <Context.Provider value={exposed}>
         {children} 
        </Context.Provider>
    )
}

//export const useUser=()=> { useContext(Context) }

export default Provider

 