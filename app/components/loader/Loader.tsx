'use client';

import {DotLoader } from "react-spinners";

const Loader = () => {
  return ( 
    <div
    className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <DotLoader
        size={50}
        color="red"
      />
    </div>
   );
}
 
export default Loader;