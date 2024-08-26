import Fade from 'react-reveal/Fade';






export default function Footer() {
    
  
    return (
    <div className="py-[150px] ">

<Fade bottom>
  <div className="flex justify-center items-center text-gray-700  gap-x-14 "> <a href="https://github.com/Myches" target="_blank" rel="noopener noreferrer" ><h2 className="hover:text-teal-500">GITHUB</h2></a> <a href="https://www.linkedin.com/in/michael-ebo-andorful" target="_blank" rel="noopener noreferrer" ><h2 className="hover:text-teal-500">LINKEDIN</h2></a></div>
  </Fade>
   <div className="h-[1px] flex-1 bg-teal-500  mt-8">
    </div> 

    <h1 className="mt-16 text-gray-700 flex justify-center items-center text-lg">@2023  Michael Andorful  </h1>
    </div>
    
    );
  }
  