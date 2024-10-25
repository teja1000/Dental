import Header from "../components/Header"
import BookingPage from "@/components/Appoinment"

const Booking=()=>{
  return(
    <div>
      <Header/>
      <div className="h-screen flex justify-center items-center">
        <BookingPage/>
      </div>
    </div>
  )
}

export default Booking