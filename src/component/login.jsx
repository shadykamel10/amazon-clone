/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/GlobalState";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { userLogin } from "../app/feature/userSlice";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
// state
const {User} =useAuth()
const[user,setUser]=useState({identifier:"",password:""})

  // handeller
  const handellSignin = (e)=> {
    e.preventDefault()
    
    dispatch(userLogin(user))
    navigate("/")
  }

  const onChangeHandler = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setUser({...user,[name]:value})
  }




  return (
    <div className="w-1/4 mx-auto mt-10">
      <Link to="/">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.4A2al1UdhMnHCFtravCLNQHaCP&pid=Api&P=0&h=220"
          alt=""
          className="w-32 ml-20"
        />
      </Link>
      <div className="border-2 border-gray-500 mt-5 p-4 w-full rounded-md shadow-lg">
        <h1 className="text-3xl font-bold mt-10 ">sign in </h1>
        <form className="ml-5" >
          <h3 className="text-lg mb-2 font-bold mt-5">email</h3>
          <input
            type="email"
            name="identifier"
            onChange={onChangeHandler}
            value={user.identifier}
            className="border-2 w-full rounded-md border-black p-1"
          />
          <h3 className="text-lg mb-2 font-bold">Password</h3>
          <input
            value={user.password}
            name="password"
            type="password"
            onChange={onChangeHandler}
            className="border-2 w-full rounded-md border-black p-1"
          />
          <button onClick={handellSignin} className="border-2 border-black w-full rounded-md bg-yellow-600 text-black font-bold  p-2 mt-5 block">
            sign in
          </button>
          <button  className="border-2 border-black w-full rounded-md bg-[#eee] text-black font-bold  p-2 mt-5 block">
            create your amazon account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

