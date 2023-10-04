import Link from 'next/link';

//useSWR allows the use of SWR inside function components
import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Projects() {

    //Set up SWR to run the fetcher function when calling "/api/staticdata"
    //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
    const { data, error } = useSWR('api/projectsdata', fetcher);

    //Handle the error state
    if (error) return <div className='h-[87vh]'>Failed to load</div>;
    //Handle the loading state
    if (!data) return <div className='animate-pulse'>Loading...</div>;
    //Handle the ready state and display the result contained in the data object mapped to the structure of the json file

    return (
        <section id="projects" className='w-full py-16'>
            <div className="flex flex-col items-center justify-center">
                <h1 className='text-3xl lg:text-4xl text-white underline uppercase my-5'>Projets</h1>
                <div className="flex flex-row flex-wrap justify-around w-[90vw] mx-5 my-8">
                    {data.projects.map(project =>
                        <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-[6px_6px_20px_10px_#00000024] m-4 w-[68vw] lg:w-[40vw] lg:h-80 lg:flex lg:delay-100 lg:duration-300 lg:hover:scale-105">
                            <div className="lg:w-1/2">
                                <img
                                    src={project.src}
                                    alt="Image"
                                    className="w-full h-auto lg:h-full"
                                />
                            </div>
                            {/* Card content */}
                            <div className="p-4 lg:w-1/2 flex flex-col">
                                <h2 className="text-xl font-semibold text-center mb-2">{project.title}</h2>
                                <p className="text-gray-600">
                                    {project.content}
                                </p>
                                <div className="mt-4">
                                    {project.tags.map(tag =>
                                        <span key={tag} className="bg-blue-200 text-blue-700 px-2 py-1 rounded-full text-xs mr-2">
                                            {tag}
                                        </span>
                                    )}
                                </div>
                                <div className="flex self-end justify-end p-4 text-right mt-auto">
                                    <Link href={project.url}>
                                        <a className="bg-[#3b8bc4] hover:bg-[#966fb3] text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 ease-in-out">
                                            Voir
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}