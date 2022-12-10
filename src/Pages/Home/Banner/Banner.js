import React from 'react';
import logo from '../../../asset/tuhin.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 rounded-2xl shadow-lg shadow-cyan-300 mt-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Hi i am Md Sarwar Zaman Tuhin,</h1>
                    <p className="py-6">I am a web developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong under-standing of web standards and best practices, and I am passionate about creating websites that users will find easy to use and visually appealing.</p>
                    <div>

                        <a href="https://drive.google.com/file/d/1FTqoCiODMQq7J8H1-4Aiv7PajH0TxkbM/view?usp=share_link" download="Resume"><button className='btn'> Resume</button></a>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <img className='rounded' src={logo} alt="" />
                </div>


            </div>
        </div>
    );
};

export default Banner;