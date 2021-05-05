import {React, useState} from "react";
import { useForm } from "react-hook-form";
import api from "../api"

export default function CustomerPage() {
  const { register, handleSubmit } = useForm();
  const [value, setValue] = useState({})
  const onSubmit = (data) => {
    console.log(data)
    
    api.apiTaskRouter.getGrToken(data).then((res) => {
          console.log(res.data)
    })
    setValue({name: '', password: ''})  
  };

  const createTask = () => {
      api.apiTaskRouter.createTask().then((res) => {
          console.log(res)
      })
  }

  return (
     <div>
         <h1>Customer Page</h1>
    <form onSubmit={handleSubmit(onSubmit)}>


      <input value={value.name} {...register("Name", {required:true})} placeholder="First name" />
      <input value={value.password} {...register("Password", {required:true})} placeholder="Last name" />
      
       <br></br>
       <br></br>
      <button type="submit">Get Token</button>
      <button onClick={createTask}>Create Task</button>
      <button>Go Online</button>
      <button>Go Offline</button>
      <button>Accept</button>
      <button>Reject</button>
      <button>End Conference</button>
    </form>
    </div> 
  );
}


