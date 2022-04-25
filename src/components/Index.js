import React, { StrictMode,useEffect,useState} from 'react'
import './Index.css'
import Event from './Events/Event'
// import Schedule from './Schedule/Schedule'
import Navbar from './Navbar/Navbar'
import About from './About/About'
import Footer from './footer/Footer'
import Front from './Frontp/Front'
// import Preconnect from './Preconnect/Preconnect'
import { Triangle } from 'react-loader-spinner'
// import Particlesbg from './Background/Particlesbg'
// import pin from '../images/pin.png';




export default function Index() {
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
      setTimeout(()=>{
        setLoading(false)
      },2000)

  }, [])
  


  return (
    
  <div   className='bgmain'>
    
      
       { loading ?
       <div className='loader'> <Triangle height="100"
        
       width="100"
         color='#fa9200'
         ariaLabel='loading'/> </div> 
         : 
       ( 
          <StrictMode>
            <div>


         <Navbar />
{/* 
          <div >
          
            <img src={pin} alt='map' className='themap' />
          
        </div>   */}

          
      
        
         <div className='head'>
         <Front />
         </div>
       <div className='main'>
         <Event />
           {/* <Schedule />  */}
         <About />
         <Footer />
       </div>  
       
          </div>
         </StrictMode>
         )
}
        
        </div>
  
  )
  
}
