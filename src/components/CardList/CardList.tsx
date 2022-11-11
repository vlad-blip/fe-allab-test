import {useState, useEffect} from 'react';
import Card from '../Card/Card';

interface Job {
    id: string;
    name: string;
    email: string;
    phone: string;
    title: string;
    salary: string;
    address: string;
    benefits: string[];
    location: {
      lat: number;
      long: number;
    }
    pictures: string[];
    createdAt: string;
    updatedAt: string;
    description: string;
    employment_type: string[];
}

const CardList = () => {
    const [jobList, setJobList] = useState<Job[]>([]);

    useEffect(() => {
        fetch("https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu")
            .then((res) => res.json())
            .then((jobList) => setJobList(jobList));
        
    }, []);
    
    return (
        <ul className='flex flex-col gap-4 max-w-95v xl:max-w-75v mx-auto pt-4 pb-10'>
            {jobList.map((job) => {
                return (<Card key={job.id} {...job}/>)
            })}
        </ul>
    )
}

export default CardList;