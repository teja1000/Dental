import Header from "../components/Header"
import { LuPhoneOutgoing } from "react-icons/lu";
import GoogleMap from "../components/Google map";
import { IoTimeOutline } from "react-icons/io5";
import Heading from "../components/Heading";

const Address=()=>{
  return(
    <div>
      <Header/>
      <div className=" bg-stone-200">
        <Heading data="Address"/>
        <div className="flex  h-screen  justify-center items-center">
          <div className="flex flex-col size-72 rounded-lg  items-center justify-center bg-blue-500 shadow-lg">
            <LuPhoneOutgoing className="size-16 "/>
            <div className=" font-bold text-3xl text-white pt-5">Phone Number</div>
            <div className="font-bold text-3xl text-white pt-5">+91 8639701618</div>
          </div>
          <div className="px-10">
            <GoogleMap/>
          </div>
          <div className="flex flex-col size-72 rounded-lg  items-center justify-center bg-blue-500 shadow-lg">
            <IoTimeOutline className="size-16 "/>
            <div className=" font-bold text-3xl text-white pt-5">Timing</div>
            <div className="font-bold text-3xl text-white pt-5">9 A.M - 9 P.M</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address