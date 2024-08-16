import { Link } from "react-router-dom"

const Header=()=>{
  return(
    <div>
      <div className=" bg-gray-200 flex justify-between py-5">
        
          <div className="font-poppins font-semibold text-4xl  text-sky-600 pl-5">Light Dental</div>
        
        <div className="flex justify-between pr-10 pt-2">
       <Link to="/">   <div className="px-8 font-poppins text-2xl text-sky-500 font-medium">Home</div></Link>
        <Link to="/About">  <div className="px-8 font-poppins text-2xl text-sky-500 font-medium">About</div></Link>
        <Link to="/Services">  <div className="px-8 font-poppins text-2xl text-sky-500 font-medium">Services</div></Link>
         <Link to="/Reviews"><div className="px-8 font-poppins text-2xl text-sky-500 font-medium">Reviews</div></Link>
         <Link to="/Address"> <div className="px-8 font-poppins text-2xl text-sky-500 font-medium">Contact</div></Link>

        </div>

      </div>

    </div>
  )
}

export default Header