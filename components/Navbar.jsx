import Link from "next/link"

import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {

    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [navbar, setNavbar] = useState(false);
    const ref = useRef(false);

    useEffect(() => {
        setMounted(true)
        setTheme('light')
    }, [])

    const handleChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    if (!mounted) {
        return null
    }

    return (
        <>
            <nav className="w-full bg-[#345ca8] dark:bg-[#023047] shadow sticky top-0 z-10">
                <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <div className="flex items-center justify-between">
                                <Link href={'/'}>
                                    <a>
                                        <h2 className="text-2xl text-white font-bold">Accueil</h2>
                                    </a>
                                </Link>
                                <label className="swap swap-rotate mx-6">
                                    {/* <!-- this hidden checkbox controls the state --> */}
                                    <input ref={ref} id="swaper" type="checkbox" onChange={(handleChange)} />
                                    {/* <!-- sun icon --> */}
                                    <svg className="swap-on fill-yellow-400 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                    </svg>
                                    {/* <!-- moon icon --> */}
                                    <svg className="swap-off fill-indigo-800 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                    </svg>
                                </label>
                            </div>
                            <div className="flex flex-row">
                                <div className="md:hidden">
                                    <button
                                        className="p-2 text-gray-700"
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-white transform rotate-180 transition-transform duration-300"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-white transform rotate-180 transition-transform duration-300"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                        className={`flex-1 justify-self-center pb-4 md:block md:pb-0 md:mt-0  ${
                            navbar ? 'block absolute top-16 left-0 w-full bg-[#345ca8] dark:bg-[#023047] text-white py-6 px-6 rounded-b-lg shadow-md transform translate-y-0 transition-transform duration-300 ease-in' : 'hidden'
                                }`}
                        >
                            <ul className="lg:menu lg:menu-horizontal items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-white">
                                    <Link href={'/technologies'}>
                                        <a className='hover:text-black hover:bg-[#ffb703] hover:rounded'>Technologies</a>
                                    </Link>
                                </li>
                                <li className="text-white">
                                    <Link href={'/projects'}>
                                        <a className='hover:text-black hover:bg-[#ffb703] hover:rounded'>Projets</a>
                                    </Link>
                                </li>
                                <li className="text-white">
                                    <Link href={'/about'}>
                                        <a className='hover:text-black hover:bg-[#ffb703] hover:rounded'>A Propos</a>
                                    </Link>
                                </li>
                                {/* <li className="text-white">
                                    <Link href={'/hobbies'}>
                                        <a className='hover:text-black hover:bg-[#ffb703] hover:rounded'>Hobbies</a>
                                    </Link>
                                </li> */}
                                <li className="text-white">
                                    <Link href={'/contact'}>
                                        <a className='hover:text-black hover:bg-[#ffb703] hover:rounded'>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}