import Image from "next/image"

//useSWR allows the use of SWR inside function components
import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Skills () {

//Set up SWR to run the fetcher function when calling "/api/staticdata"
//There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
const { data, error } = useSWR('api/skillsdata', fetcher);

//Handle the error state
if (error) return <div>Failed to load</div>;
//Handle the loading state
if (!data) return <div className='animate-pulse'>Loading...</div>;
//Handle the ready state and display the result contained in the data object mapped to the structure of the json file

    return (
        <section id="skills" className='w-full lg:w-2/5 pt-16'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl lg:text-4xl text-center text-white underline uppercase my-5'>Technologies</h1>
                <div className='flex flex-row flex-wrap justify-center w-[70vw] lg:w-[30vw] mt-8'>
                    {data.skills.map(skill =>
                        <a
                        key={skill.id}
                        href={skill.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center justify-around m-3"
                        >
                            <Image
                                src={skill.src}
                                alt="Image"
                                width={80}
                                height={80}
                                title={skill.title}
                                reponsive="true"
                                className="transition hover:scale-110 hover:delay-200 hover:ease-in"
                            />
                            <p className="text-white">{skill.name}</p>
                        </a>
                    )}
                </div>
            </div>
        </section>
    )
}