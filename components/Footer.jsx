import Image from "next/image"
import Link from "next/link"


export default function Footer() {
    return (
        <>
            <footer className="flex flex-col lg:flex-row justify-center items-center text-white bg-[#345ca8] dark:bg-[#023047] py-3 shadow">
                <p>&copy; {new Date().getFullYear()}</p>
                <p>&thinsp;- Tous droits réservés</p>
                <p>&thinsp;- Créé avec
                    <span className="mx-1">
                        <a
                            href="https://nextjs.org/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src="/next.svg"
                                title='Next.js'
                                alt="Image"
                                width={20}
                                height={20}
                                reponsive="true"
                            />
                        </a>
                    </span>
                </p>
            </footer>
        </>
    )
}