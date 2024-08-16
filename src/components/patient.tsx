import { FaUserAlt } from "react-icons/fa";
interface patientprops{
  name:string;
  data:string
}
export const Patient:React.FC<patientprops>=({name,data})=>{
  return(
    <div>
      <div className="size-80 bg-white shadow-lg flex flex-col items-center pt-6">
      <FaUserAlt className="size-16"/>
      <div className="text-xl font-bold pt-3 ">{name}</div>
      <div className="px-3">{data}</div>
      </div>

    </div>
  )
}



export const Users=[
  {
    name:"Kiron Kumar",
    data:"I have been a patient of Dr. Sahitya, who is an epitome of patience and efficiency. Though young, she has become an excellent doctor through her experience and keen observation. I am confident that she will be bestowed with great honors."
  },
  { name:"Anila Kumari",
    data:"I am a regular patient at Light Dental Clinic, owned by Dr. Sahitya. She is caring, patient, and highly efficient and knowledgeable in her procedures. I am very happy to be associated with her."

  },{
    name:"Deepak",
    data:"The dentist was very kind and helpful. She made my treatment as pleasant as possible. I would love to refer this place to my friends and family."
  }
]