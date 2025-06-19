import musica from '../Images/musica.png'
import SuCasa from '../Images/Su-Casa.png';
import kickstats from '../Images/kickstats.png';
import devlinks from '../Images/devlinks.png';
import fluxdevs from '../Images/fluxdev.png';
import kd from '../Images/kd.png';
import amazite from '../Images/amazite.png';
import reform from '../Images/reform.png';
import glam from '../Images/glam.png';
import Fade from 'react-reveal/Fade';
import "../App.css";





export default function Projects() {
    
  
    return (
      <div>
        <header  className="pt-[200px] flex items-center">
    <h2
      className="w-24 text-sm uppercase tracking-wider " >
      Projects
    </h2>
    
     <div className="h-[1px] flex-1 bg-teal-500 ">
    </div>
      </header >
        
<div className="mt-[100px] w-full mx-auto space-y-[200px]">


<Fade  bottom>
<div className='lg:flex-row flex flex-col'>
 <div className='lg:w-1/2 w-full space-y-2 md:flex-col md:justify-center md:items-center hover:scale-110 transition ease-in-out cursor-pointer group relative'>
 <img src={amazite} alt="img" className='border border-gray-400 '/>
  <div>Tech used  : <span className=' text-teal-300 p-2'>React Js</span>  <span className=' text-teal-400 p-2'>Typescript</span> </div>

 </div>

 <div className='flex flex-col items-center lg:w-1/2 w-full lg:mt-0 mt-8 space-y-4'>
  <h1 className='  mx-auto text-gray-500 text-2xl flex justify-center items-center'>AMAZITE ACADEMY</h1>
 <p className='  text-gray-500 md:w-[80%] w-full mx-auto'>A school's website that gives the digital info about the institution, providing essential information to students, parents and staff </p>
 <div className='md:flex-row md:space-x-12 flex flex-col md:space-y-0 space-y-2 '> <a className='bg-teal-500  p-4 border rounded-lg text-black border-black font-bold w-[150px] flex justify-center items-center hover:bg-gray-400' href="https://amaziteacademy.com/" target="_blank" rel="noopener noreferrer" >LIVE</a>
  <a className='bg-teal-500  p-4  border rounded-lg text-black border-black font-bold hover:bg-gray-400 w-[150px] flex justify-center items-center' href="https://github.com/FluxDevsTeam/Amazite_School" target="_blank" rel="noopener noreferrer">GITHUB</a>
  </div>
 </div>
</div>
</Fade>

<Fade  bottom> 
<div className=" lg:flex-row flex flex-col">
<div className='lg:w-1/2 w-full space-y-2 md:flex-col md:justify-center md:items-center hover:scale-110 transition ease-in-out cursor-pointer group relative'>
  <img src={reform} alt="img" className='border border-gray-400 '/>
  <div>Tech used  : <span className=' text-teal-300 p-2'>React</span>  <span className=' text-teal-400 p-2'>Typescript</span> </div>
 
</div>

<div className='flex flex-col items-center lg:w-1/2 w-full lg:mt-0 mt-8 space-y-4'>
  <h1 className='  text-gray-500 text-2xl  flex justify-center items-center'>Reform Teachers</h1>
  <p className='   text-gray-500  md:w-[80%] w-full mx-auto'>A dedicated website for educators  for professional development, resource sharing, and collaboration.</p>
 <div className='md:flex-row md:space-x-12 flex flex-col md:space-y-0 space-y-2'> <a className='bg-teal-500  p-4 border rounded-lg text-black border-black font-bold w-[150px] flex justify-center items-center hover:bg-gray-400' href="https://reformedteachers.netlify.app/" target="_blank" rel="noopener noreferrer">LIVE</a>
  <a className='bg-teal-500  p-4  border rounded-lg text-black border-black font-bold hover:bg-gray-400 w-[150px] flex justify-center items-center' href="https://github.com/FluxDevsTeam/reformed_teachers" target="_blank" rel="noopener noreferrer" >GITHUB</a>
  </div>
</div>
</div>
</Fade>



<Fade  bottom>
<div className='lg:flex-row flex flex-col'>
 <div className='lg:w-1/2 w-full space-y-2 md:flex-col md:justify-center md:items-center hover:scale-110 transition ease-in-out cursor-pointer group relative '>
 <img src={kd} alt="img" className='border border-gray-400 '/>
  <div>Tech used  : <span className=' text-teal-300 p-2'>React</span>  <span className=' text-teal-400 p-2'>Typescript</span> </div>
 
 </div>

 <div className='flex flex-col items-center lg:w-1/2 w-full lg:mt-0 mt-8 space-y-4'>
  <h1 className=' mx-auto text-gray-500 text-2xl flex justify-center items-center'>Kids Design Company</h1>
 <p className='  text-gray-500 w-full md:w-[80%] mx-auto'>A kids accessories ecommerce website that deals in various products related to infants</p>
 <div className='md:flex-row md:space-x-12 flex flex-col md:space-y-0 space-y-2 '> <a className='bg-teal-500  p-4 border rounded-lg text-black border-black font-bold w-[150px] flex justify-center items-center hover:bg-gray-400' href="https://kidsdesigncompany.com/" target="_blank" rel="noopener noreferrer" >LIVE</a>
  <a className='bg-teal-500  p-4  border rounded-lg text-black border-black font-bold hover:bg-gray-400 w-[150px] flex justify-center items-center' href="https://github.com/FluxDevsTeam/KidsDesignEcommerceFrontend" target="_blank" rel="noopener noreferrer">GITHUB</a>
  </div>
 </div>
</div>
</Fade>

<Fade  bottom>
<div className='lg:flex-row flex flex-col'>
 <div className='lg:w-1/2 w-full space-y-2 md:flex-col md:justify-center md:items-center hover:scale-110 transition ease-in-out cursor-pointer group relative'>
 <img src={devlinks} alt="img" className='border border-gray-400 '/>
  <div>Tech used  : <span className=' text-teal-300 p-2'>Next Js</span>  <span className=' text-teal-400 p-2'>Typescript</span> </div>
 
 </div>

 <div className='flex flex-col items-center lg:w-1/2 w-full lg:mt-0 mt-8 space-y-4'>
  <h1 className='  mx-auto text-gray-500 text-2xl flex justify-center items-center'>DEVLINKS</h1>
 <p className='  text-gray-500 w-full md:w-[80%] mx-auto'>A link-sharing web app built with Next js and Typescript that allows users to upload and share their details</p>
 <div className='md:flex-row md:space-x-12 flex flex-col md:space-y-0 space-y-2 '> <a className='bg-teal-500  p-4 border rounded-lg text-black border-black font-bold w-[150px] flex justify-center items-center hover:bg-gray-400' href="https://linksters.netlify.app/" target="_blank" rel="noopener noreferrer" >LIVE</a>
  <a className='bg-teal-500  p-4  border rounded-lg text-black border-black font-bold hover:bg-gray-400 w-[150px] flex justify-center items-center' href="https://github.com/Myches/linksters" target="_blank" rel="noopener noreferrer">GITHUB</a>
  </div>
 </div>
</div>
</Fade>

<Fade  bottom> 
<div className=" lg:flex-row flex flex-col">
<div className='lg:w-1/2 w-full space-y-2 md:flex-col md:justify-center md:items-center hover:scale-110 transition ease-in-out cursor-pointer group relative'>
  <img src={glam} alt="img" className='border border-gray-400 '/>
   <div>Tech used  : <span className=' text-teal-300 p-2'>React</span>  <span className=' text-teal-400 p-2'>Typescript</span> </div>
 
</div>

<div className='flex flex-col items-center lg:w-1/2 w-full lg:mt-0 mt-8 space-y-4'>
  <h1 className='  text-gray-500 text-2xl  flex justify-center items-center'>GLAM CART</h1>
  <p className='   text-gray-500 w-full md:w-[80%] mx-auto'>A beauty ecommerce web app created using react and typescript, that displays make-up  products as well as its details and allows users to search products and add products to cart  .</p>
 <div className='md:flex-row md:space-x-12 flex flex-col md:space-y-0 space-y-2 '> <a className='bg-teal-500  p-4 border rounded-lg text-black border-black font-bold w-[150px] flex justify-center items-center hover:bg-gray-400' href="https://glamcart.netlify.app/" target="_blank" rel="noopener noreferrer">LIVE</a>
  <a className='bg-teal-500  p-4  border rounded-lg text-black border-black font-bold hover:bg-gray-400 w-[150px] flex justify-center items-center' href="https://github.com/Myches/Glam-Cart.git" target="_blank" rel="noopener noreferrer" >GITHUB</a>
  </div>
</div>
</div>
</Fade>

<Fade  bottom>
<div className='lg:flex-row flex flex-col'>
 <div className='lg:w-1/2 w-full space-y-2 md:flex-col md:justify-center md:items-center hover:scale-110 transition ease-in-out cursor-pointer group relative'>
 <img src={musica} alt="img" className='border border-gray-400 '/>
  <div>Tech used  : <span className=' text-teal-300 p-2'>React</span>  <span className=' text-teal-400 p-2'>Typescript</span> </div>

 </div>

 <div className='flex flex-col items-center lg:w-1/2 w-full lg:mt-0 mt-8 space-y-4'>
  <h1 className=' mx-auto text-gray-500 text-2xl flex justify-center items-center'>MUSICA</h1>
 <p className='  text-gray-500 w-full md:w-[80%] mx-auto'>A music player created using Spotify's Api with a fully functional playback</p>
 <div className='md:flex-row md:space-x-12 flex flex-col md:space-y-0 space-y-2 '> <a className='bg-teal-500  p-4 border rounded-lg text-black border-black font-bold w-[150px] flex justify-center items-center hover:bg-gray-400' href="https://musicaspotifyplayer.netlify.app/" target="_blank" rel="noopener noreferrer" >LIVE</a>
  <a className='bg-teal-500  p-4  border rounded-lg text-black border-black font-bold hover:bg-gray-400 w-[150px] flex justify-center items-center' href="https://github.com/Myches/Musica.git" target="_blank" rel="noopener noreferrer">GITHUB</a>
  </div>
 </div>
</div>
</Fade>



</div>

</div>
 
    );
  }
  
  
    