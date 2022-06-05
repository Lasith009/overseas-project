import React from 'react'

function Banner() {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" id="video">
                <video className="d-block w-100" id="video" title='banner video' muted autoPlay="autoplay"  loop="loop" preload="auto" disablePictureInPicture  controlsList="nodownload">
                    <source src="../../HeaderVideo.mp4"></source>
                </video>
            </div>           
        </div>
        <hr className="border-top bg-white"/>
    </div>
  )
}

export default Banner