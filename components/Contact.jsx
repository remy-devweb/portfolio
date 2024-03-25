// For handling input states
import { useState, useRef } from 'react';

import Image from 'next/image';

// reCaptcha
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

// For display toasts  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Contact() {

    //with the useref hook you can do it easily
    const form = useRef(null);


    // Input states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // reCaptcha
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleSubmitForm =
        (e) => {
            e.preventDefault();
            if (!executeRecaptcha) {
                console.log("Execute recaptcha not yet available");
                return;
            }
            executeRecaptcha().then((gReCaptchaToken) => {
                submitForm(gReCaptchaToken);
            });
        };

    // Form submit handler
    const submitForm = async (token) => {

        const res = await fetch('/api/submit-form', {
            method: 'POST',
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message, token }),
        });
        // Success if status code is 200
        switch (res.status) {
            case 200:
                toast('Thank you for contacting us!', { type: 'success' });
                setEmail(''),
                    setName(''),
                    setMessage('')
                break;
            case 405:
                toast('Error submitting the form.', { type: 'error' });
                break;
            case 500:
                toast('An error has occurred, please try again later.', { type: 'error' });
                break;
            default:
                toast('Sorry, an error occurred.', { type: 'error' });
        }
    };

    return (
        <section id="contact" className='w-full min-h-[87vh] pt-16 bg-[#345ca8] dark:bg-[#023047]'>
            <div className="flex flex-col items-center justify-center">
                <h1 className='text-3xl lg:text-4xl text-white underline uppercase my-5'>Contactez-Moi</h1>
                <div className="lg:w-[30vw]">
                    <ToastContainer />
                    <form className='my-8 flex flex-col items-center justify-center' ref={form} onSubmit={handleSubmitForm}>
                        <div className='relative my-4 w-full'>
                            <input id="email" name='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                                className='
                                peer 
                                border-b-2 
                                border-gray-300 
                                w-full
                                lg:w-[30vw]
                                rounded
                                placeholder-transparent 
                                focus:outline-none 
                                focus:border-[#ffb703]
                                '
                                placeholder='email'>
                            </input>
                            <label htmlFor='email'
                                className='
                                absolute 
                                left-1 
                                -top-5
                                text-gray-600 
                                text-sm 
                                transition-all
                                peer-placeholder-shown:text-base
                                peer-placeholder-shown:text-gray-400
                                peer-placeholder-shown:top-0
                                peer-focus:-top-5
                                peer-focus:text-white
                                peer-focus:text-sm
                                '
                            >Email</label>
                        </div>
                        <div className='relative my-4 w-full'>
                            <input id="name" name='name' type='text' value={name} onChange={(e) => setName(e.target.value)} required
                                className='
                                peer 
                                border-b-2 
                                border-gray-300 
                                w-full
                                lg:w-[30vw]
                                rounded
                                placeholder-transparent 
                                focus:outline-none 
                                focus:border-[#ffb703]
                                '
                                placeholder='name'>
                            </input>
                            <label htmlFor='name'
                                className='
                                absolute 
                                left-1 
                                -top-5
                                text-gray-600 
                                text-sm 
                                transition-all
                                peer-placeholder-shown:text-base
                                peer-placeholder-shown:text-gray-400
                                peer-placeholder-shown:top-0
                                peer-focus:-top-5
                                peer-focus:text-white
                                peer-focus:text-sm
                                '
                            >Nom</label>
                        </div>
                        <div className='relative my-4 w-full'>
                            <textarea id="message" name='message' type='text' value={message} onChange={(e) => setMessage(e.target.value)} required
                                className='
                                peer 
                                border-b-2 
                                border-gray-300 
                                w-full
                                lg:w-[30vw]
                                min-h-[12vh]
                                rounded
                                placeholder-transparent 
                                focus:outline-none 
                                focus:border-[#ffb703]
                                '
                                placeholder='Message'>
                            </textarea>
                            <label htmlFor='message'
                                className='
                                absolute 
                                left-1 
                                -top-5
                                text-gray-600 
                                text-sm 
                                transition-all
                                peer-placeholder-shown:text-base
                                peer-placeholder-shown:text-gray-400
                                peer-placeholder-shown:top-0
                                peer-focus:-top-5
                                peer-focus:text-white
                                peer-focus:text-sm
                                '
                            >Message</label>
                        </div>
                        <button type="submit" className="btn btn-md w-full bg-[#ffb703] hover:bg-[#fb8500] my-5 text-white">Envoyer</button>
                    </form>
                    <p className='text-white text-sm text-center pb-5'>( Ce formulaire a été intégré avec
                        <span className="mx-1">
                            <a
                                href="https://www.notion.so/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    src="/notion.png"
                                    title='Notion'
                                    alt="Image"
                                    width={20}
                                    height={20}
                                    reponsive="true"
                                />
                            </a>
                        </span>
                        API )
                    </p>
                </div>
            </div>
        </section>
    )
}