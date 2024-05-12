import { useState } from "react";
import { FaStar } from 'react-icons/fa';

function StarRating({ numberOfStars = 10}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleRating = (index) => {
        setRating(index);
    }

    const starArray = [...Array(numberOfStars)];

    return (
        <div className="StarRating">
            <h1>Rating: {rating === 0 ? "None": rating}</h1>
            <div className="RatingZone">
                {starArray.map((_, index)=>(
                    <FaStar onClick={()=>{handleRating(index + 1)}}
                        onMouseEnter={()=>{setHover(index + 1)}}
                        onMouseLeave={()=>{setHover(0)}}
                        color={index < rating || index < hover ? "yellow" : "black"}
                        key={index}/>
                ))}
            </div>
        </div>
    );
}

export default StarRating;