import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../firebase/firebase.config';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Register = () => {

    const [registerError,setRegisterError]=useState('');
    const [registeredUser,setRegisteredUser]=useState(null);
     const [showPass,setShowPass]=useState(false);
    // user registration
    const handleRegister=(e)=>{
        e.preventDefault();
        setRegisterError('');
        const email=e.target.email.value;
        console.log(email);
        const password=e.target.password.value;
        console.log(password);
        const termsAccept=e.target.terms.checked;
        console.log(termsAccept);
        
        if(password.length < 6 ){setRegisterError('Password should be at least 6 characters');
            return ;
        }
        else if(!/[A-Z]/.test(password)){
          setRegisterError('Your password must have at least one Capital Letter');
          return;
        }
        else if(!termsAccept){
          setRegisterError('Please accept our terms policy');
          return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            setRegisteredUser(user)
            // ...
        })
        .catch((error) => {
            setRegisterError(error.message);
            console.log(error.message);
            // ..
        });
    }

    return (


        <div className='py-15 container mx-auto flex justify-center items-center'>
            
            
            <div className="card bg-base-100 w-full px-2 max-w-full lg:max-w-1/3 drop-shadow-xl  ">

     <div className="card-body">
     <div className="text-center max-w-full lg:max-w-3xl ">
     <h1 className="text-3xl font-bold">Register Now</h1>
     <p className="py-6">
       Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
       quasi. In deleniti eaque aut repudiandae et a id nisi.
     </p>
   </div>
       <form onSubmit={handleRegister} action="">
       <fieldset  className="fieldset ">

         <div className='space-y-2'>
         <label className="label text-lg">Email</label>
         <input name='email' type="email " className="input w-full text-base" placeholder="Email" required />

         </div>
         <div className='relative space-y-1'>
         <label className="label text-lg">Password</label>
         <input name='password' type={showPass?"text":"password"} className="input w-full text-base
         " placeholder="Password" required /><span onClick={()=>setShowPass(!showPass)} className='absolute text-lg
          right-2 bottom-4 cursor-pointer z-10'> {
           showPass ? <IoMdEyeOff/>: <IoMdEye className='text-amber-500'/>
         } </span>
         </div>

         <div className='space-y-2 space-x-2'>
         <input name='terms' type="checkbox" className="checkbox w-4 h-4 rounded-sm validator border-gray-200 " title="Required" />
         <label className="label text-lg" htmlFor='terms'>I agree with your <a>terms and condition</a> </label>
         </div>
         <button type='submit' className="btn btn-neutral mt-4 text-base">Register</button>
       </fieldset>
       {
           registerError && <p className='text-red-600 text-sm'>{registerError}</p>
       }
       {
           registeredUser && <p className='text-green-600 text-sm'>User Registration Successfull</p>
       }
       </form>
       
     </div>
   </div>
        </div>
    );
};

export default Register;