import React, { useState } from 'react';
import auth from './firebaseConfig';

// firebase object 
import { 
        onAuthStateChanged,  
        signOut 
 } from 'firebase/auth';

const SignOut = () => {

    const [user, setUser] = useState("")

    // sign out function 
     const logOut = async () =>
     {
           await signOut(auth)
           setUser("utilisateur deconnecte")
           //document.getElementById("outer").click();
     }
    
     // grab current user 

    onAuthStateChanged(auth,(curentUser)=>
        {
             setUser(curentUser);
        }
    )

    return (
        <div>
                 <div>
                        <p>{user?.email}</p>
                 </div>
                 <div>
                         <button onClick={logOut}>
                                 Sign Out 
                         </button>
                         <a href="/" id="outer" hidden></a>
                 </div>
        </div>
    );
}

export default SignOut;
