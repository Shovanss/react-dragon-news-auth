import { FaGoogle } from "react-icons/fa";
import q1 from './assets/qZone1.png'
import q2 from './assets/qZone2.png'

import q3 from './assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div >
            <div className="mb-6 px-4">
            <h3>Login With</h3> 
           <button className="btn">
           <FaGoogle />
           Login With Google
           </button>
           <button className="btn">
           <FaGoogle />
           Login With GitHub
           </button>
            </div>
          
           <div className="mb-6 px-4 space-y-6">
           <h3>Login With</h3> 
         <a className="flex mb-6" href="">
         <FaGoogle />
         <span>Facebook</span>
         </a>
         
         <a className="flex mb-6" href="">
         <FaGoogle />
         <span>Facebook</span>
         </a>
         
         <a className="flex mb-6" href="">
         <FaGoogle />
         <span>Facebook</span>
         </a>
         
        
         
        </div>
        <div>
            <h3>Q Zone</h3>
            <img src={q1} alt="" />
            <img src={q2} alt="" />
            <img src={q3} alt="" />
        </div>
        </div>
        
    );
};

export default RightSideNav;