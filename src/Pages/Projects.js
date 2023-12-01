import musica from '../Images/musica.png'
import SuCasa from '../Images/Su-Casa.png';
import kickstats from '../Images/kickstats.png';
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
<div className=" lg:flex-row flex flex-col">
<div className='lg:w-1/2 w-full md:flex md:justify-center md:items-center hover:scale-110 transition ease-in-out cursor-pointer group relative'>
  <img src={glam} alt="img" className='border border-gray-400 '/>
  <div class="hidden group-hover:block absolute top-0 left-0 bg-gray-500 text-black p-4 w-[550px] h-[278px] hover:scale-110 transition ease-in-out font-bold ">
    <h1 className='absolute top-[25%] left-[40%] text-gray-950 text-lg '>TECH USED:</h1>
    <Fade  bottom>  <h1 className='absolute top-[40%] left-[20%] textbtn text-xl'>REACT + TYPESCRIPT + MAKE-UP API</h1></Fade>
  </div>
</div>

<div className='flex flex-col items-center lg:w-1/2 w-full lg:mt-0 mt-8'>
  <h1 className=' mb-8  text-gray-500 text-2xl  flex justify-center items-center'>GLAM CART</h1>
  <p className='   text-gray-500  w-[80%] mx-auto'>A beauty ecommerce web app created using react and typescript, that displays make-up  products as well as its details and allows users to search products and add products to cart  .</p>
 <div className='md:flex-row md:space-x-12 flex flex-col md:space-y-0 space-y-8 mt-[80px]'> <a className='bg-teal-500  p-4 border rounded-lg text-black border-black font-bold w-[150px] flex justify-center items-center hover:bg-gray-400' href="https://glamcart.netlify.app/" target="_blank" rel="noopener noreferrer">LIVE</a>
  <a className='bg-teal-500  p-4  border rounded-lg text-black border-black font-bold hover:bg-gray-400 w-[150px] flex justify-center items-center' href="https://github.com/Myches/Glam-Cart.git" target="_blank" rel="noopener noreferrer" >GITHUB</a>
  </div>
</div>
</div>
</Fade>

<Fade  bottom>
<div className='lg:flex-row flex flex-col'>
 <div className='lg:w-1/2 w-full hover:scale-110 transition ease-in-out cursor-pointer md:flex md:flex-col md:justify-center md:items-center group relative'>
 <img src={musica} alt="img" className='border border-gray-400 '/>
 <div class="hidden group-hover:block absolute top-0 left-0 bg-gray-500 text-black p-4 w-[550px] h-[278px] hover:scale-110 transition ease-in-out font-bold ">
    <h1 className='absolute top-[25%] left-[40%] text-gray-950 text-lg'>TECH USED :</h1>
    <Fade  bottom>  <h1 className='absolute top-[40%] left-[20%] textbtn text-xl'>REACT + TAILWIND +  SPOTIFY API</h1></Fade>
  </div>
 </div>

 <div className='flex flex-col items-center lg:w-1/2 w-full lg:mt-0 mt-8'>
  <h1 className=' mb-8 mx-auto text-gray-500 text-2xl flex justify-center items-center'>MUSICA</h1>
 <p className='  text-gray-500 w-[80%] mx-auto'>A music player created using Spotify's Api with a fully functional playback</p>
 <div className='md:flex-row md:space-x-12 flex flex-col md:space-y-0 space-y-8 mt-[80px]'> <a className='bg-teal-500  p-4 border rounded-lg text-black border-black font-bold w-[150px] flex justify-center items-center hover:bg-gray-400' href="https://musicaspotifyplayer.netlify.app/" target="_blank" rel="noopener noreferrer" >LIVE</a>
  <a className='bg-teal-500  p-4  border rounded-lg text-black border-black font-bold hover:bg-gray-400 w-[150px] flex justify-center items-center' href="https://github.com/Myches/Musica.git" target="_blank" rel="noopener noreferrer">GITHUB</a>
  </div>
 </div>
</div>
</Fade>


<Fade  bottom>
<div className='lg:flex-row flex flex-col'>
 <div className='lg:w-1/2 w-full hover:scale-110 transition ease-in-out cursor-pointer md:flex md:flex-col md:justify-center md:items-center group relative'>
 <img src={kickstats} alt="img" className='border border-gray-400 '/>
 <div class="hidden group-hover:block absolute top-0 left-0 bg-gray-500 text-black p-4 w-[550px] h-[278px] hover:scale-110 transition ease-in-out font-bold ">
    <h1 className='absolute top-[25%] left-[40%] text-gray-950 text-lg'>TECH USED :</h1>
    <Fade  bottom>  <h1 className='absolute top-[40%] left-[20%] textbtn text-xl'>REACT + TAILWIND +  SCOREBAT API</h1></Fade>
  </div>
 </div>

 <div className='flex flex-col items-center lg:w-1/2 w-full lg:mt-0 mt-8'>
  <h1 className=' mb-8 mx-auto text-gray-500 text-2xl flex justify-center items-center'>KICKSTATS</h1>
 <p className='  text-gray-500 w-[80%] mx-auto'>An English Premier League dashboard that displays the fixtures,top scorers,top assists,league table,match highlights as well as livescores</p>
 <div className='md:flex-row md:space-x-12 flex flex-col md:space-y-0 space-y-8 mt-[80px]'> <a className='bg-teal-500  p-4 border rounded-lg text-black border-black font-bold w-[150px] flex justify-center items-center hover:bg-gray-400' href="https://kickstats.netlify.app" target="_blank" rel="noopener noreferrer" >LIVE</a>
  <a className='bg-teal-500  p-4  border rounded-lg text-black border-black font-bold hover:bg-gray-400 w-[150px] flex justify-center items-center' href="https://github.com/Myches/EPL-Dashboard.git" target="_blank" rel="noopener noreferrer">GITHUB</a>
  </div>
 </div>
</div>
</Fade>

<Fade  bottom> 
<div className=" lg:flex-row flex flex-col">
<div className='lg:w-1/2 w-full md:flex md:justify-center md:items-center hover:scale-110 transition ease-in-out cursor-pointer group relative'>
  <img src={SuCasa} alt="img" className='border border-gray-400 '/>
  <div class="hidden group-hover:block absolute top-0 left-0 bg-gray-500 text-black p-4 w-[550px] h-[278px] hover:scale-110 transition ease-in-out font-bold ">
    <h1 className='absolute top-[25%] left-[40%] text-gray-950 text-lg '>TECH USED :</h1>
    <Fade  bottom>  <h1 className='absolute top-[40%] left-[20%] textbtn text-xl'>REACT + TAILWIND + BAYUT API</h1></Fade>
  </div>
</div>

<div className='flex flex-col items-center lg:w-1/2 w-full lg:mt-0 mt-8'>
  <h1 className=' mb-8  text-gray-500 text-2xl  flex justify-center items-center'>Su-Casa</h1>
  <p className='   text-gray-500  w-[80%] mx-auto'>A landing page for a real estate website that displays properties for sale and for rent</p>
 <div className='md:flex-row md:space-x-12 flex flex-col md:space-y-0 space-y-8 mt-[80px]'> <a className='bg-teal-500  p-4 border rounded-lg text-black border-black font-bold w-[150px] flex justify-center items-center hover:bg-gray-400' href="https://su-casa.netlify.app/" target="_blank" rel="noopener noreferrer">LIVE</a>
  <a className='bg-teal-500  p-4  border rounded-lg text-black border-black font-bold hover:bg-gray-400 w-[150px] flex justify-center items-center' href="https://github.com/Myches/Su-Casa.git" target="_blank" rel="noopener noreferrer" >GITHUB</a>
  </div>
</div>
</div>
</Fade>


</div>

</div>
 
    );
  }
  
  
    