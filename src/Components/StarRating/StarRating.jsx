import React, { useState } from 'react'
// import './start.css'
const StarRating = ({rating,onChange,size=5}) => {
    const [hoverRate,setHoverRate]=useState(0)
    rating=Math.floor(rating)

const handleHover=(hoverRate)=>{
  if(onChange) setHoverRate(hoverRate)
}

  return (
    <div className='startRating'>
    {
        Array(size).fill("").map((_,index)=>{
            const starVal=index+1;
            let starClass="star";
            {/* console.log(starVal) */}
            if(hoverRate>=starVal){
                starClass+=" hover"
            }else if(rating>=starVal){
             
                starClass+=" active"
            }
          return  (<span key={index} className={starClass}
            onClick={()=>onChange(starVal)}
            onMouseEnter={()=>{ if (onChange) handleHover(starVal)}}
            onMouseLeave={()=>{if (onChange) handleHover(0)}}
            >&#9733;</span>)
        })
    }
    </div>
  )
}

export default StarRating