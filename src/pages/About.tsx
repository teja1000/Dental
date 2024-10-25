import Header from "../components/Header"

const About=()=>{
  return(
    <div>
      <Header/>
      <div className="flex h-screen px-20">
        <div className="w-1/2 flex items-center">
          <img 
            src="https://img.perceptpixel.com/jitjcnzd/Dental/WhatsApp_Image_2024-08-10_at_09.36.11_480261f0.jpg"/>
        </div>
        <div className="ml-10 flex flex-col text-left">
          <div className="text-3xl font-medium text-violet-600 pt-20">About us</div>
          <div className="text-5xl font-bold text-violet-800 pt-5">Dr. Sahitya ,BDS</div>
          <div className="text-xl text-slate-950  pt-8">Light Dental Clinic believes in affordable dental treatment for all.</div>
          <div className="text-xl text-slate-950  pt-5">We provide the most advanced treatments available in the market.</div>
          <div className="text-xl text-slate-950 pt-5">Gets the job done without making you go through any hassle or discomfort.</div>
        </div>
      </div>
    </div>
  )
}

export default About