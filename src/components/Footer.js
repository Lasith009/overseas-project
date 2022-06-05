import React from 'react'

function Footer() {
  return (
    
    <footer className="page-footer font-small text-white bg-dark pt-4">
    

      <div className="container-fluid text-center text-md-left">
    
        <div className="row">

          <div className="col-md-6 mt-md-0 mt-3">

            <h5>Amadeus IT Group</h5>
            <p>C. Salvador de Madariaga, 1
                <br></br>
                28027 Madrid
                <br></br>
                Spain.
            </p>
    
          </div>

          <div className="row">
            <p>Follow Us on </p>
            <div className='col'><a href="www.twitter.com"><img src="../../TwitterWhite.svg"/></a></div>
            <div className='col'><a href="www.youtube.com"><img src="../../YoutubeWhite.svg"/></a></div>
          </div>

    
          <hr className="clearfix w-100 d-md-none pb-3"/>
    
  

        </div>
      </div>

      <div className="footer-copyright py-3">

        <div className='text-md-left'>
            <label>Copyright © 2022 Amadeus Hotels. All rights reserved.</label> 
        </div>
        
        <div className='text-md-right'>
            <label>Photos by</label>
            <a href="/"> Felix Mooneeram</a> & 
            <a href="/"> Serge Kutuzov</a> on 
            <a href="/"> Unsplash</a> 
        </div>
        
      </div>
      
    
    </footer>
    

  )
}

export default Footer