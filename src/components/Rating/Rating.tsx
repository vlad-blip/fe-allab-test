import React from "react";
import IconRating from "../IconRating/IconRating";

const Rating: React.FC<{number: number}> = ({number}) => {
    return(
        <div className='flex items-center gap-px xl:mx-10'>
            {[...Array(number)].map((el, index) => <IconRating key={index} />)}
        </div>
    );
}
export default Rating;