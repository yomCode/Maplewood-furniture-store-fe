import React from 'react';
import { Link } from "react-router-dom";

// function MyComponent(props) {
//   const { icon } = props;
//   return (
//       <div>
//           {icon === 'heart' ? <FaHeart /> : <FaSmile /> }
//       </div>
//   )
// }

const SideBarElement = (props) => {
  //const { icon } = props;

  return (
    <Link to={props.to} className='flex align-middle py-3 hover:bg-zinc-100 ps-3 hover:text-gray-900 hover:font-bold-1000'>
      <p className='text-bold-1000 pt-1 h-10 font-bold text-3xl flex align-middle text-black'>{props.icon}</p>
      <span className='ms-4 pt-2 text-xl text-gray-800 font-light'>{props.name}</span>
    </Link>
  )
}

export default SideBarElement;