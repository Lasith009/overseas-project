import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDebounce } from "@react-hook/debounce";



function Library() {
    const [searchQuery, setSearchQuery] = useState("");
    const [tvShows, setTvShows] = useState([]);

  
    const changeHandler = (e) => {
      e.preventDefault();
      if (e.target.value.trim() === "");

      setSearchQuery(e.target.value);
    };  
  
    const prepareSearchQuery = (query) => {
      const url = `http://api.tvmaze.com/search/shows?q=${query}`;
  
      return encodeURI(url);
    };
  
    

    const searchTvShow = async() => {
      if (!searchQuery || searchQuery.trim() === "") return;

  
      const URL = prepareSearchQuery(searchQuery);
      
      console.log("sds",URL);
      const response = await axios.get(URL).catch((err) => {
        
        console.log("Error: ", err);
      });
  
      if (response) {
        console.log("Response: ", response.data);
        if (response.data && response.data.length === 0);
  
        setTvShows(response.data);
        return;
      }  
    };

    useDebounce(searchQuery, 500, searchTvShow());

  

  return (
    <>
    <div className='ml-5'>
      <h1 className='text-uppercase'>Movie Library</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        <br></br>
        sed diam nonumy eirmod tempor invidunt ut labore et
        <br></br>
        dolore magna aliquyam erat, sed diam voluptua.
      </p>
    </div>
    
    <div className='bg-dark'>
      <div className='mx-5 py-5'>
        <div className='row'>
          <div className='col-sm'>
            <h3>Collect your favourites</h3>
          </div>

          <div className='col-sm'>
            <div className="form-inline">
            <div className="input-group border-0" style={{height:"50px"}}>
              <img className='px-3 border-0 rounded-left' src='../../SearchWhite.svg' style={{backgroundColor:"#ABB0B8", color:"white"}}/>
              <input 
              type="text" 
              value={searchQuery} 
              onChange={changeHandler} 
              className="form-control border-0 rounded-right" 
              placeholder="Search title and add to grid" 
              style={{backgroundColor:"#ABB0B8", color:"white", width:"200px"}} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"/>
              
              <div className="dropdown-menu w-100 p-2 row" aria-labelledby="dropdownMenuButton">
              {tvShows.map(show => 
              <label className='dropdown-item row' key={show.score}>
                <p className="card-title col">{show.show.name}</p>
                <p className="card-text col"> {show.show.rating.average}</p>
                {/* {show.show.image.medium} {show.show.name} {show.show.rating.average} */}
              </label>
              )}  
              </div>
            </div>
            </div>
          </div>
        </div>
        
      <hr className='bg-light' />
      
      <div className='row'>

        <div className="card col-sm m-5 bg-secondary" style={{width: "18rem"}}>
          <img className="card-img-top" src="../../Batman.jpg" style={{width: "100%", height: "100%", objectFit: "cover" }}/>
          <div className="card-body">
            <h5 className="card-title">Batman Returns</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, <br/> consetetur sadipscing elitr, sed diam <br/> nonumy eirmod tempor invidunt ut…</p>
          </div>
        </div>

        <div className="card col-sm m-5 bg-secondary" style={{width: "18rem"}}>
          {/* <div className='text-right'><a href=''><img src='../../CloseWhite.svg'/></a></div> */}
          <img className="card-img-top" src="../../WildWest.jpg" style={{width: "100%", height: "100%", objectFit: "cover" }}/>
          <div className="card-body">
            <h5 className="card-title">Wild Wild West</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, <br/> consetetur sadipscing elitr, sed diam <br/> nonumy eirmod tempor invidunt ut…</p>
          </div>
        </div>

        <div className="card col-sm m-5 bg-secondary" style={{width: "18rem"}}>
          {/* <div className='text-right'><a href=''><img src='../../CloseWhite.svg'/></a></div> */}
          <img className="card-img-top" src="../../Spiderman.jpg" style={{width: "100%", height: "100%", objectFit: "cover" }}/>
          <div className="card-body">
            <h5 className="card-title">The Amazing Spiderman</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, <br/> consetetur sadipscing elitr, sed diam <br/> nonumy eirmod tempor invidunt ut…</p>
          </div>
        </div>

      </div>
      
      
      </div>
    </div>
      
      <div className='m-5 pt-5'>
        <div className='row'>
          <div className='col-sm'>
           
              <form className='need-validation' method='post'  action=''>
                <div className="row">
                  <div className="col">
                    <label htmlFor="firstName">First Name *</label>
                    <input type="text" className="form-control bg-secondary border-0 text-light" id='firstName' required/>
                  </div>
                  <div className="col">
                    <label htmlFor="lastName">Last Name *</label>
                    <input type="text" className="form-control bg-secondary border-0 text-light" id='lastName' required/>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="userEmail">Email address *</label>
                  <input type="email" className="form-control bg-secondary border-0 text-light" id='userEmail' required/>
                </div>

                <div className="form-group">
                  <label htmlFor="telephone">Telephone</label>
                  <input type="text" className="form-control bg-secondary border-0 text-light" id='telephone' />
                </div>

                <div className="form-group">
                  <label htmlFor="msgArea">Message</label>
                  <textarea className="form-control bg-secondary border-0 text-light" id="msgArea" rows="3"></textarea>
                </div>

                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="agreement" />
                  <label className="form-check-label" htmlFor="agreement">I agree to the <a href="/"> Terms & Conditions</a></label>
                </div>

                <div className='form-group float-right'>
                  <button type="submit" className="btn  text-white" style={{width:"200px", height:"50px", backgroundColor:"#EDD01C"}}>Submit</button>
                </div>

              </form>
            
          </div>

          <div className='col-sm'>
            
              <iframe
                className='embed-responsive-item'
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48588.133010545425!2d-3.7152472!3d40.4363503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f35d4f0c269%3A0x754405946e8ca584!2sAmadeus%20IT%20Group!5e0!3m2!1sen!2slk!4v1654174584077!5m2!1sen!2slk"
                style={{width: "75%", height: "75%", border: 0 }}
                allowFullScreen
                loading="lazy"
                frameBorder="0"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            
          </div>
        </div>

      </div>
      </>
  )
}

export default Library