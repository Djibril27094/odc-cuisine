import React, { useState } from 'react';
import SignOut from './signOut';
import  './loginSignUp.css'

// imports icon images 

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

// firebase object 
  import { 
            createUserWithEmailAndPassword, 
            onAuthStateChanged, 
            signInWithEmailAndPassword, 
            signOut 
         } from 'firebase/auth';
  import auth from './firebaseConfig';
import { documentId } from 'firebase/firestore';
 

const LoginSignUp = ({option}) => {

    const [action, setAction] = useState(option);
    // user data 
    const [userName,setUserName] = useState("")
    const [registerEmail,setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [logEmail,setLogEmail] = useState("")
    const [logPassword, setLogPassword] = useState("")
   

    // register function 
    const registerHandle = async () =>
    {
         
        try{
          
            const user = await createUserWithEmailAndPassword(auth,registerEmail, registerPassword)
            console.log(user)
            alert("utilisateur enregistre")
            document.getElementById("homePath").click();

             // changé l'etat des button 
             setAction("Login");


         } catch(error)
         {
              console.log(error.message)
         }

        
    }

    const loginHandle = async () =>
    {
         
        try{
          
            const user = await signInWithEmailAndPassword(
                auth,
                logEmail, 
                logPassword
            );
            console.log(user)
            alert("utilisateur connecte")
            document.getElementById("homePath").click();

            // change l'etat button 
            setAction("Sign Up");

         } catch(error)
         {
              console.log(error.message)
         }

    }

    return (

        <div className='container'>

            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

             <div className="inputs">
                 {
                    action === "Login"? <div> </div> :
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input 
                            type="text" placeholder='votre nom '
                            onChange={
                                        (e)=>{ 
                                                setUserName(e.target.value)
                                                console.log("register : "+userName)
                                        }    
                            }
                        
                        />
                    </div>
                 }
                
                 <div className="input">
                      <img src={email_icon}  alt="" />
                      <input type="email"  placeholder='votre Email ' 
                        onChange={
                            action==="Sign Up"? 
                            (e)=>{
                                  setRegisterEmail(e.target.value)
                                  //console.log(registerEmail)
                            } 
                            :
                            (e)=>{
                                    setLogEmail(e.target.value)
                                    //console.log(logEmail)
                            }
                        }
                      />
                 </div>
                 <div className="input">
                      <img src={password_icon} alt="" />
                      <input type="password" placeholder='votre Mot de Passe'
                            onChange={
                                action==="Sign Up"? 
                                (e)=>{
                                      setRegisterPassword(e.target.value)
                                      //console.log(registerPassword)
                                } 
                                :
                                (e)=>{
                                        setLogPassword(e.target.value)
                                        //console.log(logPassword)
                                }
                            }

                      />
                 </div>
                  {
                     action==="Sign Up"? <div> </div> :   
                     <div className="forgot-password"> Mot de Passe oublié cliquez <span> ici </span> </div>
                  }
                
                 <div className="submit-container">
                     <div className=
                                    {
                                        action==="Login"?"submit gray" : "submit"
                                    }
                           onClick={registerHandle}

                     >
                        Sign Up 
                    </div>
                     <div className=
                                    {
                                        action==="Sign Up"?"submit gray": "submit"
                                    }
                         

                            onClick={loginHandle}              

                     >
                        Log In
                        
                    </div>
                    <a href="./home.jsx" id="homePath"> accueil </a>  
                 </div>
             </div>

        </div>

       

           
    );
}

export default LoginSignUp;
