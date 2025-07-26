
import React, { useContext, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {

  const {signInUser}=useContext(AuthContext);

    const [showPass,setShowPass]=useState(false);
    const [loginError,setLoginError]=useState('');
    const [loginUser,setLoginUser]=useState(false);
    

    // user Login

    const handleLoginWithForm=(e)=>{
        e.preventDefault();
        setLoginError('');
        const email=e.target.email.value;
        console.log(email);
        const password=e.target.password.value;
        console.log(password);
        
        signInUser(email,password)
        .then(result=>{
          setLoginUser(result.user);
          console.log(result.user);

        })
        .catch(error=>{
          console.error(error);
          setLoginError(error.message);
        })


      }

    return (
        <div className='py-15 container mx-auto flex justify-center items-center '>
            <div className="card bg-base-100 w-full px-2 max-w-full lg:max-w-1/3 shrink-0 drop-shadow-xl">

<div className="card-body">
<div className="text-center max-w-3xl">
<h1 className="text-3xl font-bold">Login</h1>
<p className="py-6">
Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
quasi. In deleniti eaque aut repudiandae et a id nisi.
</p>
</div>
<form onSubmit={handleLoginWithForm} action="">
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


<div className='mt-2'>
  <Link to='/passwordReset' className="link link-hover text-sm">Forgot password?</Link>
  <span className='text-base ml-3'>Don't have an account ?  <Link to='/register' className="link link-hover text-green-500">Register</Link></span >
</div>

<button type='submit' className="btn btn-neutral mt-4 text-base">Login</button>
</fieldset>
{
loginError && <p className='text-red-600 text-sm'>{loginError}</p>
}
{
loginUser && <p className='text-green-600 text-sm'>Logged in</p>
}
</form>

</div>
</div>
        </div>
    );
};

export default Login;