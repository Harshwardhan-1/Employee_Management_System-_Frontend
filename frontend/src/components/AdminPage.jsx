import {useState,useEffect} from 'react';
import axios from 'axios';
export default function AdminPage(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        const fetch=async()=>{
            try{
const response=await axios.get('https://employee-management-system-backend-k455.onrender.com/api/all/approval',{withCredentials:true});
if(response.data.message=== 'pending request'){
    setData(response.data.data);
}
            }catch(err){
                if(err.response?.data?.message=== 'no result to show'){
                    alert('no result to show');
                }
            }
        }
        fetch();
    });
    return(
        <>
        <h1>This is Admin Page</h1>
        {
            data.map((all,index)=>(
                <div key={index}>
                    <p>Name:{all?.name}</p>
                    <p>Gmail:{all?.gmail}</p>
                    <p>Identity:{all?.identity}</p>
                    <p>Status:{all?.status}</p>
                </div>
            ))
        }
        </>
    );
}