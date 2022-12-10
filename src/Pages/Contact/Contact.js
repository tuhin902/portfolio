import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cdayg7r', 'template_wpunwrg', form.current, 'y68ULlHNDjGmDbmCA')
            .then((result) => {
                console.log(result.text);
                toast.success('email sent')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div >
            <h2 className='text-2xl font-bold text-center mt-5'>Contact Me</h2>
            <div className='my-16 p-16 w-full lg:w-1/2 mx-auto shadow-xl shadow-cyan-300 rounded-2xl'>
                <form className='flex flex-col justify-center ' ref={form} onSubmit={sendEmail}>
                    <input placeholder="Name" className="input input-bordered w-full  mb-2" type="text" name="user_name" />
                    <input placeholder="Email" className="input input-bordered w-full  mb-2" type="email" name="user_email" />
                    <textarea className="textarea textarea-bordered  mb-5" placeholder="Message" name="message" />
                    <input type="submit" className='btn' value="Send" />
                </form>
            </div>

        </div>
    );
};

export default Contact;