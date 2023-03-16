import React, { useState } from 'react'

function Card({id,image,info,price,name,removeTour}) {
    const [readMore, setReadMore] = useState(false);
    const description = readMore ? info: `${info.substring(0,200)}....`

    

    function readMoreHandler()
    {
        setReadMore(!readMore)
    }

    
  return (
    <div className="card">
     <img src={image} alt="Image" className="image" />
     <div className="tour-info">
     <div className="tour-deatils">
        <h4 className="tour-price">₹{price}</h4>
        <h4 className="tour-name">{name}</h4>
     </div>
     <div className="description">
        {description}
        <span className="read-more" onClick={readMoreHandler}>
            {readMore ? "Show Less" : "Read More"}
        </span>
     </div>
     </div>
     <button className="btn-red" onClick={()=> removeTour(id)}>
        Not Interested
     </button>
    </div>
  )
}

export default Card