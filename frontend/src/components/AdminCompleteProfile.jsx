import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function AdminCompleteProfile(){
    const[name,setName]=useState("");
    const [gmail,setGmail]=useState("");
    const [department,setDepartment]=useState("");
    const [designation,setDesignation]=useState("");
    const [salary,setSalary]=useState("");
    const location=useLocation();
    const harsh=location.state?.harsh;



    const handle=async(e)=>{
        e.preventDefault();
        const send={name,gmail,department,designation,salary};
        try{
const response=await axios.post('https://employee-management-system-backend-k455.onrender.com/api/make/makeProfile',send,{withCredentials:true});
if(response.data.message=== 'employee created successfull'){
    alert('successfully created');
}
        }catch(err){
            if(err.response?.data?.message=== 'provide proper detail'){
                alert('provide proper detail');
            }else if(err.response?.data?.message=== 'user already exist'){
                alert('user already exist');
            }
        }
    }
    return(
        <>
        <div>
            <h1>Fill Employee Detail</h1>
            <p>{harsh?.name}</p>
            <p>{harsh?.gmail}</p>
            <form onSubmit={handle}>
<input type="text" placeholder="Enter Employee Name Here" value={name} onChange={(e)=>setName(e.target.value)} />
<input type="email" placeholder="Enter Employee Gmail Here" value={gmail} onChange={(e)=>setGmail(e.target.value)} />
<input type="text" placeholder="Enter Employee Department Here" value={department} onChange={(e)=>setDepartment(e.target.value)} />
<input type="text" placeholder="Enter Employee Designation Here" value={designation} onChange={(e)=>setDesignation(e.target.value)}/>
<input type="text" placeholder="Enter Employee Salary Here" value={salary} onChange={(e)=>setSalary(e.target.value)} />
<button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
}