import React, { useState } from 'react'
import StarRating from './StarRating'
import './start.css'
const Start = () => {
    const [currRating,SetCurrRating]=useState(3)
    const handleRatChange=(newRate)=>{
        SetCurrRating(newRate)
    }
  return (
    <>
    <h2>Start Rating</h2>
        <StarRating size={5}
            rating={currRating}
            onChange={handleRatChange}
        />
        <p>
            Current Rating {currRating}
        </p>
    </>
  )
}

export default Start