import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

function Login()
{
    const EMAIL = 'ejemplo@gmail.com';
    const PASSWORD = '1234';
    
    const navigate = useNavigate();
    const [access, setAccess] = useState(false);
    const [userData,SetUserData] = useState({email:"",password:""})
    const [error,setErrors] = useState({})
    function login(userData) {
        if (userData.password === PASSWORD && userData.email === EMAIL) {
           setAccess(true);
           navigate('/inicio');
        }  
        else window.alert("La contraseña introducida no es valida")}

        function HandleOnChange (e){
            console.log(e.target.name)
            const nombre = e.target.name;
            SetUserData({...userData,[nombre]: e.target.value});
            // console.log (userData)
            // setErrors(validate({...userData,[nombre]: e.target.value}))
        }
        function Handleclick(){
            navigate('/inicio')
        }
        
        function handleSubmit(e){
            e.preventDefault()
             login(userData) 

       
        }

return (
<div>
    <label style={{color:"black"}}>Email : </label> <input name="email" onChange={HandleOnChange}></input>
    <br></br>
    <label style={{color:"black"}} >Password: </label> <input name="password"  type  ="password"onChange={HandleOnChange}></input>
    <hr style={{margin:"15px"}}></hr>   
    <a1 style={{color:"red"}}>{error.email ? error.email: null} </a1>
    <br></br>
    <a1 style={{color:"red"}}>{error.password ? error.password: null} </a1>
    <br></br>
    <button type="submit" style={{margin:"5px"}} onClick={handleSubmit}> Enviar </button>
    </div>
);



}
export default Login;
