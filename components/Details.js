import Link from "next/link"
import { useState } from "react"

export default function Details () {

    const [ value, setValue] = useState('')
    return (
        <>
            <div className="navbar bg-[#023047]">
                <div className="navbar-start">
                    <Link href={'/'}><a className="btn btn-sm lg:btn btn-outline text-white ">Back to Home</a></Link>
                </div>
                <h1 className="text-white navbar-center">Title</h1>
            </div>
            <div className="flex justify-center bg-[#778da9]">
                <div className="w-4/5 my-2 p-2 rounded-md bg-[#e0e1dd]">
                    <div>Project Detail</div>
                </div>
            </div>
        </>
    )
}