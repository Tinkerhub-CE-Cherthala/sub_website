import React,{useEffect,useState} from 'react'
import { Triangle } from 'react-loader-spinner'
import Navbar from './components/Navbar/Navbar';
import Front from './components/Frontp/Front';
import Event from './components/Events/Event';
import About from './components/About/About';
import Footer from './components/footer/Footer';

function Pages() {
  const [loading,setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
      setTimeout(()=>{
        setLoading(false)
      },2000)

  }, [])
  


  return (
    
  <div >
    
      
        { loading ?
       (<div className='loader'> <Triangle height="100"
        
       width="100"
         color='#fa9200'
         ariaLabel='loading'/> </div>) 
         : 
       (  
          
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
            {/* <Schedule />   */}
          <About /> 
          {/* <Footer />  */}
        </div>   
       
          </div>
         )
      }
  </div>
   )}    
  
  
  
    
export default Pages