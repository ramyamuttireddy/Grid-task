import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './grid'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

   <div>
    <Grid></Grid>
   </div>
      
      {/* <div className='flex flex-col justify-center items-center '>
        
        <div className='grid grid-rows-4 grid-cols-4 gap-[1rem]'>
              
    
           <div className="bg-[#f9eee1] row-span-2 p-10 ">
            <h2 className='text-[33px] leading-8 font-sans font-medium'>
            Create and schedule content <span className='text-[#7650dc] rounded-[10px]'>quicker.</span>
            </h2>
            <img src="src/assets/illustration-create-post.webp" alt="" className='mt-[22px]'/>
           </div>
           
        
           <div className='bg-[#7650dc] col-span-2 p-10'>

            <h1 className='text-[45px] text-center'>Social Media
              <span>10x</span>
              Faster with AI
              </h1> 
              <img src="src/assets/illustration-five-stars.webp" alt="" className='w-[280px]' />
              <p>Over 4,000 5-star reviews</p>
           </div>

           <div className='bg-[#474255] row-span-3'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           </div>


           <div className='bg-[#f9eee1] row-span-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           </div>
           
           <div className='bg-[#7650dc] row-span-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           </div>

           <div className='bg-[#1c1828] row-span-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           </div>

           <div className='bg-[#f9eee1] '>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           </div>
           
           <div className='bg-[#7650dc] col-span-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           </div>

        
        </div>

      </div> */}
      
    </>
  )
}

export default App
