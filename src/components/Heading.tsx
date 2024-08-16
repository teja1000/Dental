interface head{
  data:String
}

const Heading:React.FC<head>=({data})=>{
  return(
    <div>
      <div className="text-6xl text-sky-600 font-roboto text-center font-bold pt-10">{data}</div>

    </div>
  )
}

export default Heading