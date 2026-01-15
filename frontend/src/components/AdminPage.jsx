import {useState,useEffect} from 'react';
import axios from 'axios';
import './AdminPage.css';
import { useNavigate } from 'react-router-dom';
export default function AdminPage(){
    const navigate=useNavigate();
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
    },[]);


    const handle=async(all)=>{
        navigate('/AdminCompleteProfile',{state:{harsh:all}});
    }

    return(
        <>
        <h1 className="admin-title">This is Admin Page</h1>
              <div className="admin-wrapper">
        {
            data.map((all,index)=>(
                <div className="admin-card" key={index}>
                    <p>Name:{all?.name}</p>
                    <p>Gmail:{all?.gmail}</p>
                    <p>Identity:{all?.identity}</p>
                    <p>Status:{all?.status}</p>
                    <div  className="admin-btns">
                    <button onClick={()=>handle(all)}>Complete Employee Profile</button>
                </div>
                </div>
            ))
        }
        </div>
        </>
    );
}