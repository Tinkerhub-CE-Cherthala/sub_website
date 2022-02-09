import React from "react";
import './Form.css';

function Form(){
    return(
    <>

<img class="wave" src="img/wave.png" alt=""/>
	<div class="container-fluid">
		
		<div class="login-content">
			<form action="index.html">
				<img src="images/logo thick 1.png" alt=""/>
				<h2 class="title">ZEALOUS 3.0</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>NAME</h5>
           		   		<input type="text" class="input"/>
           		   </div>
					  
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-mail-bulk"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>EMAIL</h5>
           		    	<input type="text" class="input"/>
            	   </div>
            	</div>
				<div class="input-div pass">
					<div class="i"> 
						 <i class="fas fa-mobile"></i>
					</div>
					<div class="div">
						 <h5>PH NO</h5>
						 <input type="text" class="input"/>
				 </div>
			  </div>
			  <div class="input-div pass">
				<div class="i"> 
					 <i class="fas fa-school"></i>
				</div>
				<div class="div">
					 <h5>COLLEGE</h5>
					 <input type="text" class="input"/>
			 </div>
		  </div>
			  <div class="input-div pass">
				<div class="i"> 
					 <i class="fas fa-usb"></i>
				</div>
				<div class="div">
					 <h5>SEMESTER</h5>
					 <input type="mail" class="input"/>
			 </div>
		  </div>
		  
	  <div class="input-div ">
           		   <div class="i"> 
           		    	<i class="fas fa-sign"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>BRANCH</h5>
           		    	<input type="radio" class=""/>
					

            	   </div>
            	</div>
            
            	<input type="submit" class="btn" value="REGISTER"/>
			
            </form>
        </div>
    </div>
    <script type="text/javascript" src="js/main.js"></script>

       </> 
        );
    }
export default Form;