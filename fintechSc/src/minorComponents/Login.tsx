// Login.js

import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../config/firebase';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //Use tracvked history to redirect
    const navigate = useNavigate();
    console.log(auth?.currentUser?.email)
    //Email sign-in
    const signIn = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log('Loggeed in successfully: ', response.user)
            navigate('/profile')
        } catch (error) {
            console.error(error)
        }
    }
    //Google sign-in
    const signInWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, googleProvider)
            console.log('Logged in successfully: ', response.user)
            //Redirection upon success
            navigate('/profile')
        } catch (error) {
            console.error(error)
        }
    }
    //log out
    const logOut = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.error(error)
        }
    }

 return (
    <div>
        <input type="email" placeholder='Email..' onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Password..' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={signIn}>Sign In</button>
        <button onClick={signInWithGoogle}>Sign In with Google</button>
        <button onClick={logOut}>Log Out</button>
    </div>
 )
}

export default Login;
