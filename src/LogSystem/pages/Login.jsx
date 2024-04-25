import { useState , useEffect } from 'react'

// imports icon images 



// firebase object 
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth} from "../../firebase.config"


const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    useEffect(()=> {
        if (localStorage.getItem("check")) {
            window.location.href = "/"
        }
    })
    const submit = (e) => {

        e.preventDefault()
     signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
        const user = userCredential.user;
        console.log("user details", user);
        localStorage.setItem("check" , true)
        window.location.href="/"
     })
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Se connecter à votre compte
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" onSubmit={submit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    style={{outline : "1px solid", paddingLeft : "5px"}}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={email} onChange={e=> setemail(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mot de passe
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-amber-300 hover:text-amber-600">
                                        mot de passe oublié
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    style={{outline : "1px solid", paddingLeft : "5px"}}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={password} onChange={e=>setpassword(e.target.value)}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-amber-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Connexion
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        pas de compte ? {' '}
                        <a href="/register" className="font-semibold leading-6 text-amber-300 hover:text-amber-600">
                            s'inscricre
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Login;
