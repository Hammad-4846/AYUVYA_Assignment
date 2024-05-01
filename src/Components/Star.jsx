import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import { AiOutlineStar } from "react-icons/ai"

import ReactStars from 'react-stars'


function Star({title, description}) {

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }
    return (
        <div className="star__component">
            <h2>{title}</h2>
            <p>{description}</p>
            <ReactStars
                count={5}
                onChange={ratingChanged}
                size={54}
                color2={'#ffd700'} />
        </div>
    )
}

export default Star