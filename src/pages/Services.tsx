import Header from "../components/Header"
import Heading from "../components/Heading"
import {Box, Data} from "../components/Box"

const Services = () => {
  return(
    <div>
      <Header/>
      <div className="bg-neutral-100 h-screen">
        <Heading data="Our Services"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pt-5">
          {Data.map((item, index) => (
            <Box 
              key={index}
              image={item.image}
              data={item.data}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services