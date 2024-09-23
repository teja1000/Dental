import Button from "./Button"
import { Link } from "react-router-dom"
const Quote=()=>{
  return(
    <div className="flex items-center h-screen pl-20">
      <div > 
      <div className="text-sky-600 text-6xl font-poppins font-semibold">ALLOW US TO</div>
        <div className="text-sky-600 text-6xl font-poppins font-semibold py-3">MAKE YOUR</div>
        <div className="text-sky-600 text-6xl font-poppins font-semibold">SMILE BRIGHTER.</div>

        <div className="pt-5 text-xl text-gray-600 font-medium">Light Dental Clinc Can Help You Get The Smile You've Always Wanted.</div>
        <div className=" text-xl text-gray-600 font-medium">We Offer Cosmetic Dentistry,Root Canal Therapy,Cavity Inspections.</div>
        <div className=" text-xl text-gray-600 font-medium mb-3">And More.</div>
        <Link to="/Appoinment">
        <Button/>
        </Link>

        
       </div>

      
      
      
      

    </div>
  )
}

export default Quote