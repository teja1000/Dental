import Header from "../components/Header"
import {Patient,Users} from "../components/patient"
import Heading from "../components/Heading"

const Reviews=()=>{
  return(
    <div>
      <Header/>
      <div className="bg-gray-100 h-screen">
        <Heading data="Reviews"/>
        <div className="h-screen flex justify-center content-start mt-10 gap-5">
          {
            Users.map((item,index)=>(
              <Patient 
                key={index}
                name={item.name}
                data={item.data}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Reviews