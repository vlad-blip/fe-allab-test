import { Link } from "react-router-dom";

import Rating from "../Rating/Rating";
import Bookmark from "../Bookmark/Bookmark";
import location from "./Location.svg";

const Card: React.FC<{
  id: string;
  createdAt: string;
  pictures: string[];
  title: string;
  name: string;
  address: string;
}> = (props) => {
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

  const postDate = getPostedDate(props.createdAt);

  return (
    <div className='flex p-8 rounded-xl bg-white-300 xl:bg-white shadow'>
      <img 
        className='w-28 h-28 rounded-full flex-shrink-0 object-cover mr-8 mt-16 xl:mt-0 xl:mr-10' 
        src={props.pictures[0]}
        alt="Organization" />
      <div className='w-full xl:flex xl:flex-row-reverse xl:justify-between'>
        <div className='flex justify-between mb-6 xl:mb-0'>
          <Rating number={5} />
          <div className='xl:flex xl:flex-col xl:justify-between xl:items-end xl:w-max'>
            <Bookmark />
            <p className='text-2sm text-blue-100'>{postDate}</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <Link className='hover:underline' to={`jobs/${props.id}#`}>
            <h3 className='text-blue-500 text-lg'>{props.title}</h3>
          </Link>
          <p className='mt-2 text-base text-blue-100'>{props.name}</p>
          <p className='flex gap-4 items-center mt-2 text-base text-blue-100'>
            <img
              src={location}
              alt="Location icon"
            />
            <span>{props.address}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;