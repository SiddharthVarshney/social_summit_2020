import React, { Component } from 'react'
import Styles from './css/Carousel.module.css'
import Image1 from './images/img1.jpeg'
import Image2 from './images/img2.jpeg'
import Image3 from './images/img3.jpeg'
import Image4 from './images/img4.jpeg'
import Image5 from './images/img5.jpg'
import Image6 from './images/img6.jpeg'
import Image7 from './images/img7.jpeg'
import Image8 from './images/img8.jpeg'

class Carousel extends Component {
  constructor(){
    super();
    this.state ={
      width: window.innerWidth
    }

  }
render() {  
  return (  
 <div className={Styles.container}>

    { this.state.width > 768 ?
    
        <div className={Styles.desktopOnly}> 
           <div className={Styles.wraper1}>
               <div className={Styles.imgCard}>
					       <figure className={Styles.effectImgCard}>
					          <img src={Image1} className={Styles.img} alt="" style={{width:"500px",height:"300px"}}/>
						        <figcaption className={Styles.imgCaption}>
						          <label className={Styles.header}> Social <span style={{fontWeight:"bold"}}>Summit</span></label>
							        <p className={Styles.description}>
                         Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,
                         sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua. 
                     </p>
					      	</figcaption>			
					      </figure>
              </div>          
            
              <div className={Styles.imgCard}>
					       <figure className={Styles.effectImgCard}>
					          <img src={Image2} className={Styles.img}alt="" style={{width:"500px",height:"300px"}}/>
						        <figcaption className={Styles.imgCaption}>
						          <label className={Styles.header}>Social <span style={{fontWeight:"bold"}}>Summit</span></label>
							        <p className={Styles.description}>
                         Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,
                         sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua. 
                     </p>
					      	</figcaption>			
					      </figure>
              </div>     

              <div className={Styles.imgCard}>
					       <figure className={Styles.effectImgCard}>
					          <img src={Image3} className={Styles.img}alt="" style={{width:"500px",height:"300px"}}/>
						        <figcaption className={Styles.imgCaption}>
						          <label className={Styles.header}>Social <span style={{fontWeight:"bold"}}>Summit</span></label>
							        <p className={Styles.description}>
                         Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,
                         sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua. 
                     </p>
					      	</figcaption>			
					      </figure>
              </div>          
         </div > 
         <div className={Styles.wraper2}>
              <div className={Styles.imgCard}>
					       <figure className={Styles.effectImgCard}>
					          <img src={Image4} className={Styles.img} alt="" style={{width:"500px",height:"451px"}}/>
						        <figcaption className={Styles.imgCaption}>
						          <label className={Styles.header}>Social <span style={{fontWeight:"bold"}}>Summit</span></label>
							        <p className={Styles.description}>
                         Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,
                         sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua. 
                     </p>
					      	</figcaption>			
					      </figure>
              </div>      
            
              <div className={Styles.imgCard}>
					       <figure className={Styles.effectImgCard}>
					          <img src={Image5} className={Styles.img}alt="" style={{width:"500px",height:"451px"}}/>
						        <figcaption className={Styles.imgCaption}>
						          <label className={Styles.header}>Social <span style={{fontWeight:"bold"}}>Summit</span></label>
							        <p className={Styles.description}>
                         Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,
                         sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua. 
                     </p>
					      	</figcaption>			
					      </figure>
              </div>      
         </div>
  
         <div className={Styles.wraper3}>
            <div className={Styles.imgCard}>
					       <figure className={Styles.effectImgCard}>
					          <img src={Image6} className={Styles.img}alt="" style={{width:"500px",height:"300px"}}/>
						        <figcaption className={Styles.imgCaption}>
						          <label className={Styles.header}>Social <span style={{fontWeight:"bold"}}>Summit</span></label>
      						  
							        <p className={Styles.description}>
                         Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,
                         sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua. 
                     </p>
					      	</figcaption>			
					      </figure>
              </div>      

              <div className={Styles.imgCard}>
					       <figure className={Styles.effectImgCard}>
					          <img src={Image7} className={Styles.img}alt="" style={{width:"500px",height:"300px"}}/>
						        <figcaption className={Styles.imgCaption}>
						          <label className={Styles.header}>Social <span style={{fontWeight:"bold"}}>Summit</span></label>
							        <p className={Styles.description}>
                         Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,
                         sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua. 
                     </p>
					      	</figcaption>			
					      </figure>
              </div>      

              <div className={Styles.imgCard}>
					       <figure className={Styles.effectImgCard}>
					          <img src={Image8} className={Styles.img}alt="" style={{width:"500px",height:"300px"}}/>
						        <figcaption className={Styles.imgCaption}>
						          <label className={Styles.header}>Social <span style={{fontWeight:"bold"}}>Summit</span></label>
							        <p className={Styles.description}>
                         Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,
                         sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua. 
                     </p>
					      	</figcaption>			
					      </figure>
              </div>      
            </div>
      </div>  : null 
  }    
    
{/* for mobile screen */}
 { this.state.width < 768 ?

     <div className={Styles.mobileOnly}> 
          <div className={Styles.wraper1}>
               <div className={Styles.imgCard}>
					       <figure className={Styles.effectImgCard}>
					          <img src={Image1} className={Styles.img} alt="" style={{width:"150px",height:"100px"}}/>
						        <figcaption className={Styles.imgCaption}>
						          <label className={Styles.header}> Social <span style={{fontWeight:"bold"}}>Summit</span></label>
							       
					      	</figcaption>			
					      </figure>
              </div>          
            
              <div className={Styles.imgCard}>
					       <figure className={Styles.effectImgCard}>
					          <img src={Image2} className={Styles.img}alt="" style={{width:"150px",height:"100px"}}/>
						        <figcaption className={Styles.imgCaption}>
						          <label className={Styles.header}>Social <span style={{fontWeight:"bold"}}>Summit</span></label>
							       
					      	</figcaption>			
					      </figure>
              </div>     

              <div className={Styles.imgCard}>
					       <figure className={Styles.effectImgCard}>
					          <img src={Image3} className={Styles.img}alt="" style={{width:"150px",height:"100px"}}/>
						        <figcaption className={Styles.imgCaption}>
						          <label className={Styles.header}>Social <span style={{fontWeight:"bold"}}>Summit</span></label>
							       
					      	</figcaption>			
					      </figure>
              </div>          
        </div >

        <div className={Styles.wraper2}>
              <div className={Styles.imgCard}>
					       <figure className={Styles.effectImgCard}>
					          <img src={Image4} className={Styles.img}alt="" style={{width:"150px",height:"151px"}}/>
						        <figcaption className={Styles.imgCaption}>
						          <label className={Styles.header}>Social <span style={{fontWeight:"bold"}}>Summit</span></label>
							       
					      	</figcaption>			
					      </figure>
              </div>      
            
              <div className={Styles.imgCard}>
					       <figure className={Styles.effectImgCard}>
					          <img src={Image5} className={Styles.img}alt="" style={{width:"150px",height:"151px"}}/>
						        <figcaption className={Styles.imgCaption}>
						          <label className={Styles.header}>Social <span style={{fontWeight:"bold"}}>Summit</span></label>
 
					      	</figcaption>			
					      </figure>
              </div>      
         </div>
  
         <div className={Styles.wraper3}>
            <div className={Styles.imgCard}>
					       <figure className={Styles.effectImgCard}>
					          <img src={Image6} className={Styles.img}alt="" style={{width:"150px",height:"100px"}}/>
						        <figcaption className={Styles.imgCaption}>
						          <label className={Styles.header}>Social <span style={{fontWeight:"bold"}}>Summit</span></label>
      						  
							       
					      	</figcaption>			
					      </figure>
              </div>      

              <div className={Styles.imgCard}>
					       <figure className={Styles.effectImgCard}>
					          <img src={Image7} className={Styles.img}alt="" style={{width:"150px",height:"100px"}}/>
						        <figcaption className={Styles.imgCaption}>
						          <label className={Styles.header}>Social <span style={{fontWeight:"bold"}}>Summit</span></label>
							       
					      	</figcaption>			
					      </figure>
              </div>      

              <div className={Styles.imgCard}>
					       <figure className={Styles.effectImgCard}>
					          <img src={Image8} className={Styles.img}alt="" style={{width:"150px",height:"100px"}}/>
						        <figcaption className={Styles.imgCaption}>
						          <label className={Styles.header}>Social <span style={{fontWeight:"bold"}}>Summit</span></label>
							       
					      	</figcaption>			
					      </figure>
              </div>      
            </div>
       </div> : null
  } 
        
</div> 

    );
  }
}

export default Carousel
