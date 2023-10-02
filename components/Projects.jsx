//useSWR allows the use of SWR inside function components
import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Projects () {

//Set up SWR to run the fetcher function when calling "/api/staticdata"
//There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
const { data, error } = useSWR('api/projectsdata', fetcher);

//Handle the error state
if (error) return <div>Failed to load</div>;
//Handle the loading state
if (!data) return <div className='animate-pulse'>Loading...</div>;
//Handle the ready state and display the result contained in the data object mapped to the structure of the json file

    return (
        <section id="projects" className='w-full py-16'>
            <div className="flex flex-col items-center justify-center">
                <h1 className='text-3xl lg:text-4xl text-white underline uppercase my-5'>Projets</h1>
                <div className="flex flex-row flex-wrap justify-around w-[80vw] mx-5 my-8">
                    {data.projects.map(project =>
                        <div key={project.id} className="card lg:card-side bg-base-100 shadow-xl m-5 group lg:perspective lg:relative lg:w-[600px] lg:h-[300px] lg:overflow-hidden lg:transition-all lg:duration-700 lg:hover:rotate-y-180">
                            <div className="hidden sm:hidden lg:absolute lg:bg-base-100 lg:inset-0 lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center lg:transition-all lg:duration-100 lg:delay-200 lg:z-20 lg:hover:opacity-0">
                                <figure><img src={project.src} className="lg:w-[600px] lg:h-[300px] object-cover" alt="Album"/></figure>
                            </div>
                            <div className="lg:absolute lg:inset-0 lg:w-full lg:h-full lg:flex lg:justify-center lg:items-center lg:transition-all lg:z-10 lg:card-back">
                                <figure><img src={project.src} className="w-full h-full lg:w-[300px] lg:h-[300px] object-cover" alt="Album"/></figure>
                                <div className="card-body lg:h-full lg:delay-500 lg:duration-1000 lg:scale-0 lg:group-hover:scale-100">
                                    <h2 className="card-title">{project.title}</h2>
                                    <p>{project.content}</p>
                                    <div className="card-actions justify-end">
                                        <button className="hidden btn bg-[#219ebc] hover:bg-[#023047] border-none lg:delay-500 lg:duration-1000 lg:scale-0 lg:group-hover:scale-100">View More &#8594;</button>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}