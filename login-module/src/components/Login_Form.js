import React, { useState } from 'react'
import "./Login_Form.css"

import { useDispatch } from 'react-redux'
import { setClient, setAdmin } from  "../features/users/userSlice"

function Login_Form() {

    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()

    const loginHandler = (event) => {
        event.preventDefault();

        if(username === "admin"){
            dispatch(setAdmin({
                    username: username, password: password, role: "admin"
                })
            )
            alert("Admin")
        }
        else{
            dispatch(setClient({
                    username: username, password: password, role: "client"
                })
            )
            alert("Client")
        }
    }

    return (
        <div className= "login">
            <h1 className= "login__heading"> Log In </h1>
            
            <form className="login__form" onSubmit= {loginHandler}>
                <div className= "form__elements">
                    <input placeholder= "Username" type="text" value= {username} onChange= {(e) => setUsername(e.target.value)} required />
                </div>

                <div className= "form__elements">
                    <input id="email" placeholder= "Password" type="password" value= {password} onChange= {(e) => setPassword(e.target.value)} required /> 
                </div>

                <button id="submit_button" type="submit" class="btn btn-outline-info"> Log in </button>
            </form>
       
        </div>
    )
}

export default Login_Form
