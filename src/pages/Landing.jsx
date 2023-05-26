import React from 'react';
import Social from '../components/Social';

import Input from '../components/Input';
import Button from '../components/Button';
import { BsFacebook } from "react-icons/bs";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Landing = () => {
  return (
    <div className='w-[90%] md:w-[40%] mx-auto flex flex-col items-center justify-center mt-10'>
        <h3 className='font-bold'>To Continue, Login To Spotify Now</h3>
        <Social Icon={BsFacebook} text="Sign In with Facebook" classNames="bg-[#3B5998] text-white" />
        <Social Icon={BsApple} text="Sign In with Facebook" classNames="bg-black text-white" />
        <Social Icon={FcGoogle} text="Sign In with Facebook" classNames="text-black" />

        <div className='flex items-center mt-10'>
            <span className='border-2 w-28 border-r-[#878787] mr-4' />
            <h3>OR</h3>
            <span className='border-2 w-28 border-r-[#878787] ml-4' />
        </div>

        <div className='mt-5 w-full'>
            <div className='mt-5'>
                <label htmlFor="username" className='font-bold'>Username Or Email</label>
                <Input placeholder="Email Address or Email" />
            </div>

            <div className='mt-5'>
                <label htmlFor="password" className='font-bold'>Password</label>
                <Input placeholder="Password" inputType="password" />
            </div>

            <div className='mt-5'>
                <p>Forgot Your Password?</p>
            </div>

            <div className='mt-5 flex items-center justify-between'>
                <div className='flex'>
                    <input type="checkbox" className='mr-2 accent-[#1FD760] text-white' />
                    <p>Remember Me</p>
                </div>
                <Button text="Sign In" />
            </div>

            <div className='border-b border-1 border-[#878787] mt-10' />
            
            <div className='mt-5 w-full pb-10'>
                <Button text="Sign Up For Spotify" outline />
            </div>
        </div>
    </div>
  )
}

export default Landing;