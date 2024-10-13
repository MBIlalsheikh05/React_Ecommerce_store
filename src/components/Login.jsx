import React from 'react'

const Login = ({openSignUp}) => {
  return (
    <div>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <form>
        <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input type='email' className='w-full px-3 py-2 border' placeholder='Enter Your Email'></input>
        </div>
        <div className='mb-4'>
            <label className='block text-gray-700'>Password</label>
            <input type='password' className='w-full px-3 py-2 border' placeholder='Enter Your Password'></input>
        </div>
        <div className='mb-4 flex items-center justify-between'>
            <label className='inline-flex items-center'></label>
            <input type='checkbox' className='form-checkbox'></input>
            <span className='ml-2 text-gray-700'>Remember me</span>
            <a href='#' className='text-red-800'>Forgot Passwordd?</a>
        </div>
        <div className='mb-4'>
            <button type='submit' className='w-full bg-red-600 text-white py-2'>Login</button>
        </div>
      </form>
      <div className='text-center'>
      <span className='text-gray-700'>Don't Have an Account?</span>
      <button className='text-red-800' onClick={openSignUp}>Sign Up</button>
      </div>
    </div>
  )
}

export default Login
