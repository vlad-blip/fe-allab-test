import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageNotFound from "../PageNotFound/PageNotFound";
import Map from "../../components/Map/Map";
import { Link } from "react-router-dom";
import { ArrowLeftThin } from "../../components/Arrows/Arrows";
import Options from "../../components/Options/Options";
import styles from "./JobDetailed.module.css";

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

const JobDetailed = () => {
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState<Job>();
  const { id } = useParams();

  const getJob = (jobs: []) => {
    const parsedJobs = jobs.filter((job: Job) => job.id === id);
    setJob(parsedJobs[0]);
  };

  const getPostedDate = (date: string) => {
    const oneDay = 1000 * 60 * 60 * 24;
    const postedDate = new Date().getTime() - new Date(date).getTime();
    const formatedDate = Math.round(postedDate / oneDay);

    if (formatedDate <= 14){
        return `Posted ${formatedDate} days ago`;
    } else if(formatedDate <= 31) {
        const weeks = Math.round(formatedDate / 4);
        return `Posted ${weeks} weeks ago`;
    } else if(formatedDate <= 365) {
        const months = Math.round(formatedDate / 12);
        return `Posted ${months} months ago`;
    } else {
        const years = Math.round(formatedDate / 365);
        return `Posted ${years} years ago`;
    }
  };

  const parseStr = (str: string) => {
    const strArr = str.split("\n");
    const removedWhitespace = strArr.map((el) => el.trim());
    const parsedStr = removedWhitespace.filter((line) => line != "");

    const regex = new RegExp(/(.+[A-Z]+:)+/gi);
    const headings = parsedStr.filter((el) => regex.test(el));
    const content = parsedStr.filter((el) => !headings.includes(el));

    return {
      headings,
      content,
    };
  };

  const url =
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((jobs) => {
        setJobs(jobs);
        getJob(jobs);
      })
      .catch((error) => alert(error));
  }, []);

  if (job) {
    const description = parseStr(job.description);
    const postDate = getPostedDate(job.createdAt);
    return (
      <main className={styles.main}>
        <div className='w-11/12 mx-auto mt-10 pb-16 xl:mt-24 xl:pb-96 xl:w-3/4'>
          <div className='xl:grid xl:grid-cols-detailed gap-x-32'>
            <div className='relative'>
              <div>
                <div className='xl:flex xl:items-center xl:justify-between xl:border-b xl:border-blue-800'>
                  <h1
                    className='text-[2.8rem] font-bold text-blue pb-4 mb-8 border-b border-blue-800 xl:border-b-0 xl:mb-0 xl:pb-0'
                  >
                    Job Details
                  </h1>
                  <div>
                    <a className='text-[1.6rem] text-blue relative inline-flex gap-4 items-center' href="#">
                      <span
                        className={`inline-block w-8 xl:w-12 h-8 xl:h-12 bg-no-repeat bg-center ${styles.link_icon_save}`}
                      ></span>
                      Save to my list
                    </a>
                    <a className='ml-8 text-[1.6rem] text-blue relative inline-flex gap-4 items-center' href="#">
                      <span
                        className={`inline-block w-8 xl:w-12 h-8 xl:h-12 bg-no-repeat bg-center ${styles.link_icon_share}`}
                      ></span>
                      Share
                    </a>
                  </div>
                </div>
                <a className='hidden xl:block text-[1.2rem] font-semibold px-12 py-7 uppercase text-white bg-blue w-max rounded-xl hover:bg-blue-400 xl:mt-16 xl:mx-auto' href="#">
                  Apply now
                </a>
              </div>
              <div className={styles.details__heading_container}>
                <h2 className={`font-bold text-[2.4rem] text-blue ${styles.heading_secondary}`}>{job.title}</h2>
                <span className={`font-light text-[1.3rem] text-blue-300 ${styles.details__posted}`}>
                  {postDate}
                </span>
                <div className={`justify-self-end text-right xl:flex xl:self-start xl:flex-col-reverse xl:items-start${styles.details__salary}`}>
                  <p className='text-[1.8rem] text-blue'>
                    Bruto, per year
                  </p>
                  <p className='text-[2rem] font-bold text-blue'>
                    &euro; {job.salary}
                  </p>
                </div>
              </div>
              <p className='text-[1.8rem] leading-10 text-blue-300'>
                {description.content[0]}
              </p>
              <div className='mt-16'>
                <h3 className='font-bold text-[2rem] text-blue mb-10'>
                  {description.headings[0]}
                </h3>
                <p className='text-[1.8rem] text-blue-300'>
                  {description.content[1]}
                </p>
              </div>
              <div className='my-12'>
                <h3 className='font-bold text-[2rem] text-blue mb-10'>
                  {description.headings[1]}
                </h3>
                <p className='text-[1.8rem] text-blue-300'>
                  {description.content[2]}
                </p>
              </div>
              <a className='block text-[1.2rem] font-semibold px-12 py-7 uppercase text-white bg-blue w-max rounded-xl hover:bg-blue-400 xl:mt-16 xl:mx-auto' href="#">
                Apply now
              </a>
              <div className='mt-52 xl:mt-36 mb-24 flex flex-col xl:flex-col-reverse gap-24 xl:gap-36'>
                <div>
                  <h1 className='text-[2.8rem] font-bold text-blue pb-4 mb-8 border-b border-blue-800 xl:pb-0'>Attached images</h1>
                  <div className='flex gap-4 overflow-auto max-h-48'>
                    {job.pictures.map((picture, index) => {
                      return (
                        <img
                          key={index}
                          className='rounded-xl object-cover'
                          src={picture}
                        />
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h1 className='text-[2.8rem] font-bold text-blue pb-4 mb-8 border-b border-blue-800 xl:pb-0'>Additional info</h1>
                  <div className='mb-8'>
                    <h4 className='text-[1.8rem] text-blue-300 mb-4'>Employment type</h4>
                    <Options type="employment" data={job.employment_type} />
                  </div>
                  <div>
                    <h4 className='text-[1.8rem] text-blue-300 mb-4'>Benefits</h4>
                    <Options type="benefits" data={job.benefits} />
                  </div>
                </div>
              </div>
              <Link to=".." className='py-6 px-8 absolute -left-36 -bottom-40 invisible xl:visible inline-flex gap-8 rounded-xl text-[1.2rem] uppercase font-semibold bg-white-400 text-blue'>
                <ArrowLeftThin /> Return to job board
              </Link>
            </div>
            <div>
              <h3 className='text-[2.8rem] font-bold text-blue pb-4 mb-8 border-b border-blue-800 xl:pb-0 xl:hidden'>Contacts</h3>
              <div className={styles.contacts}>
                <div className='py-12 px-24 h-2/4 text-[1.6rem] text-white-400'>
                  <p className='font-bold'>
                    Department name.<br /> 
                    {job.name}.
                  </p>
                  <p>
                    {job.address}
                  </p>
                  <p className='text-white-500'>
                    {job.phone},<br/>
                    {job.email}
                  </p>
                </div>
                <div className='h-2/4'>
                  <Map location={job.location} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  return null;
};

export default JobDetailed;