import Image from "next/image"

//useSWR allows the use of SWR inside function components
import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Tools() {

    //Set up SWR to run the fetcher function when calling "/api/staticdata"
    //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
    const { data, error } = useSWR('api/toolsdata', fetcher);

    //Handle the error state
    if (error) return <div>Failed to load</div>;
    //Handle the loading state
    if (!data) return <span className="loading loading-spinner loading-lg"></span>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
k
    return (
        <section id="tools" className='w-full lg:w-2/5 py-16'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-3xl lg:text-4xl text-center text-white underline uppercase my-5'>Outils</h1>
                <div className='flex flex-row flex-wrap justify-center w-[90vw] lg:w-[50vw] mt-8'>
                    {data.tools.map(tool =>
                        <a
                            key={tool.id}
                            href={tool.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-col items-center justify-around m-3"
                        >
                            <Image
                                src={tool.src}
                                alt="Image"
                                width={80}
                                height={80}
                                title={tool.title}
                                reponsive="true"
                                className="transition hover:scale-110 hover:delay-200 hover:ease-in"
                            />
                            <p className="text-white">{tool.name}</p>
                        </a>
                    )}
                </div>
            </div>
        </section>
    )
}