import Image from "next/image"
import Profil from "../public/photo-profil.png"

export default function About () {
    return (
        <section id="about" className='w-full py-16 bg-[#345ca8] dark:bg-[#023047]'>
            <div className="flex flex-col items-center justify-center">
                <h1 className='text-3xl lg:text-4xl text-white underline uppercase my-5'>A Propos</h1>
                <div className="flex flex-col lg:flex-row items-center w-[70vw] m-5">
                    <div className="avatar my-4 lg:mx-4">
                        <div className="w-36 mask mask-hexagon">
                            <Image
                                src={Profil}
                                alt="avatar"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-white">
                        Je m&apos;appelle Rémy DEIDIER, je suis développeur Web et Mobile diplômé de la Web@cadémie by Epitech, et je suis à la recherche d’un poste orienté <span className="font-semibold uppercase">front-end </span>
                        qui me permettrait de mettre en œuvre mes nouvelles compétences et de continuer à les faire grandir.<br/>
                        Que ce soit pour de l&apos;intégration ou du développement, je suis déterminé à dépasser mes limites et à apprendre au quotidien.
                        </p>
                    </div>
                </div>
                <div>
                    <a href="/CV_Developpeur_Web_Remy_Deidier.pdf" download target="_blank" rel="noreferrer">
                        <button type="submit" className="btn btn-md btn-wide bg-[#ffb703] hover:bg-[#fb8500] border-none my-5 text-white">Télécharger mon CV</button>
                    </a>
                </div>
                <div className="flex flex-col justify-center w-[80vw] py-6 lg:py-12">
                    <h2 className="text-2xl lg:text-3xl text-center text-white underline uppercase my-8">Education et Experience</h2>
                    <div className="w-[80vw] my-5">
                        <div className="relative">
                            {/* <!-- Vertical middle line--> */}
                            <div className="absolute hidden w-px h-full transform -translate-x-1/2 bg-[#ffb703] lg:block left-1/2"></div>
                            <div className="space-y-12 lg:space-y-8">
                                {/* <!-- Right section --> */}
                                <div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center justify-end w-full mx-auto">
                                            <div className="w-full lg:w-1/2 lg:pl-24">
                                                <div className="p-4 bg-white rounded-xl">
                                                    <h3 className="text-2xl font-bold mb-2">C-Koya Tech</h3>
                                                    <p className="text-xl font-semibold mb-2">Développeur Web</p>
                                                    <p>- Formation sur le projet interne en React et Symfony.<br/>
                                                    - Traitement des tickets et des retours de projets clients.<br/>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="absolute flex items-center justify-center w-28 h-8 
                                            transform -translate-x-1/2 -translate-y-4 
                                            bg-[#ffb703] border-2 border-white rounded-full left-1/2 sm:translate-y-0">
                                            <span className="text-white">2023</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Left section --> */}
                                <div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center justify-start w-full mx-auto">
                                            <div className="w-full lg:w-1/2 lg:pr-24">
                                                <div className="p-4 bg-white rounded-xl">
                                                    <h3 className="text-2xl font-bold mb-2">Ati4Group</h3>
                                                    <p className="text-xl font-semibold mb-2">Développeur Web Font-End</p>
                                                    <p>- Refonte d&apos;un site vitrine pour un festival de Musique, avec Prismic, Gatsby &
                                                    GaphQL . Contenu entièrement dynamique.<br/>
                                                    - Refonte d&apos;un site e-commerce de vente de tissu, en Magento 2, à l&apos;aide de
                                                    Tailwind.css.<br/>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="absolute flex items-center justify-center w-28 h-8 
                                            transform -translate-x-1/2 -translate-y-4 
                                            bg-[#ffb703] border-2 border-white rounded-full left-1/2 sm:translate-y-0">
                                            <span className="text-white">2022</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Right section --> */}
                                <div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center justify-end w-full mx-auto">
                                            <div className="w-full lg:w-1/2 lg:pl-24">
                                                <div className="p-4 bg-white rounded-xl">
                                                    <h3 className="text-2xl font-bold mb-2">MAGENTO ACADEMY</h3>
                                                    <p className="text-xl font-semibold mb-2">Développeur Web</p>
                                                    <p>- Rappel des bonnes pratique PHP<br/>
                                                    - Initiation au CMS Magento 2<br/>
                                                    - Formation plus avancée sur Magento 2 (Back & Front)<br/>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="absolute flex items-center justify-center w-28 h-8 
                                            transform -translate-x-1/2 -translate-y-4 
                                            bg-[#ffb703] border-2 border-white rounded-full left-1/2 sm:translate-y-0">
                                            <span className="text-white">2021 - 2022</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Left section --> */}
                                <div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center justify-start w-full mx-auto">
                                            <div className="w-full lg:w-1/2 lg:pr-24">
                                                <div className="p-4 bg-white rounded-xl">
                                                    <h3 className="text-2xl font-bold mb-2">HUMANIS (Collectif) -Alternance</h3>
                                                    <p className="text-xl font-semibold mb-2">Développeur Web</p>
                                                    <p>- Développement d’une application mobile en ReactNative<br/>
                                                    - Réalisation du backoffice de gestion de l’application en React<br/>
                                                    - Migration du CRM de gestion vers une version plus récente en
                                                    Laravel et Vue.js<br/>
                                                    - Analyse du besoin client et réalisation d’un cachier des charges<br/>
                                                    - Travail en équipe à l’aide de Trello et Github<br/>
                                                    - Rédaction de comptes rendus hebdomadaires<br/>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="absolute flex items-center justify-center w-28 h-8 
                                            transform -translate-x-1/2 -translate-y-4 
                                            bg-[#ffb703] border-2 border-white rounded-full left-1/2 sm:translate-y-0">
                                            <span className="text-white">2018 - 2020</span>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Right section --> */}
                                <div>
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center justify-end w-full mx-auto">
                                            <div className="w-full lg:w-1/2 lg:pl-24">
                                                <div className="p-4 bg-white rounded-xl">
                                                    <h3 className="text-2xl font-bold mb-2">WEB@CADEMIE by EPITECH</h3>
                                                    <p className="text-xl font-semibold mb-2">Développeur Web et Mobile</p>
                                                    <p>Formation sur deux ans avec adaptation et autonomie :<br/>
                                                    - Pédagogie Epitech<br/>
                                                    - Capacité à apprendre de nouveaux langages rapidement<br/>
                                                    - Projets réalisés en solo ou en équipe<br/>
                                                    - Gestion et organisation de projets<br/>
                                                    - Initiation à la méthode agile et au Git Workflow<br/>
                                                    - Conception et Gestion de Base de Données<br/>
                                                    - Présentations et compte-rendu pour chaque projet<br/>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="absolute flex items-center justify-center w-28 h-8 
                                            transform -translate-x-1/2 -translate-y-4 
                                            bg-[#ffb703] border-2 border-white rounded-full left-1/2 sm:translate-y-0">
                                            <span className="text-white">2017 - 2019</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}