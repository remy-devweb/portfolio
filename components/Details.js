import Link from "next/link"
import Image from "../node_modules/next/image"

export default function Details () {

    return (
        <>
            <div className="navbar bg-[#023047]">
                <div className="navbar-start">
                    <Link href={'/'}><a className="btn btn-sm lg:btn btn-outline text-white ">Back to Home</a></Link>
                </div>
                <h1 className="text-white navbar-center">Title</h1>
            </div>
            <div className="flex justify-center bg-[#778da9]">
                <div className="w-4/5 my-4 p-4 rounded-md bg-[#e0e1dd]">
                    <div className="flex flex-row">
                        <div className='basis-1/3 flex justify-center p-2'>
                            <Image
                            src={"/Tic_tac_toe.svg"}
                            alt="Image"
                            width={100}
                            height={100}
                            />
                        </div>
                        <div className="mx-2 p-2">
                        Le tic-tac-toe, aussi appelé « morpion » (par analogie avec le jeu de morpion) et « oxo » en Belgique, est un jeu
                        de réflexion se pratiquant à deux joueurs, tour par tour, dont le but est de créer le premier un alignement.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}