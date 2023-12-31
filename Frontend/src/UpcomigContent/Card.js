// import React from "react";
 
// const Card = ({ item }) => {            
//            // destructuring props
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row justify-content-center">
//           {item.map((Val) => {
//             return (
//               <div
//               className="col-md-1 col-sm-1 card my-1 py-1 border-0"
//                 key={Val.id}
//               >
//                 <div className="card-img-top text-center">
//                   <img src={Val.img} alt={Val.title} className="photo w-75" />
//                 </div>
//                 <div className="card-body">
//                   <div className="card-title fw-bold fs-4">
//                     {Val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
//                     {Val.destination}
//                   </div>
//                   <div className="card-text"><b>Estimated Cost: </b>{Val.category}</div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };
// export default Card;

import React, { useState} from 'react'
import './Card.css'
import chatIcon from '../Images/chatIcon.jpg'
import { Link } from 'react-router-dom';
function Card()
 {
  const [showPopup, setShowPopup] = useState(false);
   
  
  return (
    <div className='space'>
          <div class="container">
          <div class="box">
            <Link to='/otp'>
          <img
            src={chatIcon}
            onMouseEnter={() => setShowPopup(true)}
            onMouseLeave={() => setShowPopup(false)}
            
            alt="Chat Icon"
          ></img>
          </Link>
          {showPopup && (
            <div className="popup">
              Wanna chat? Verify your phone number first.
            </div>
          )}
        </div>    
     </div>

<div class="container">
  <div class="box">what the </div>
</div>
<div class="container">
  <div class="box">what the</div>
</div>

<div class="container">
  <div class="box">what the </div>
</div>

<div class="container">
  <div class="box">what the </div>
</div>
<div class="container">
  <div class="box">what the </div>
</div>

    </div>
  )
}

export default Card