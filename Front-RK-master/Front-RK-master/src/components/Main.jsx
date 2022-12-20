import axios from 'axios';
import { useEffect, useState } from 'react';
import {NavLink} from "react-router-dom"
import '../css/Main.css'
import Aside from './Aside'

import pic from '../img/audi.jpg'
import pic2 from '../img/porche.jpg'

const api = axios.create({
  baseURL:'http://localhost:5000/car/'
})

//post/63697acf8ec098675175b396
function Main() {
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    api.get('/post/63697acf8ec098675175b396')
       .then(res =>{
      console.log(res.data)
      const a = res.data
      //console.log(a.length)
      setPosts(res.data)
      
    })
  },[])

  return (
    <div className='Main'>
      <div className='into-main'>
      <h1>Auctions</h1>
      <div className='car-info'>
      <div className='audi'>
            <div class="LazyLoad is-visible">
              <div class="ratio">
                  <div class="preload-wrap  loaded">
                    <img src={pic} alt="photo" height="220px" width="332px"></img>
                  </div>
              </div>
            </div>
            <div class="auction-title">
                <NavLink to="/Audi">Audi RS7 2014</NavLink>
                <p class="auction-subtitle">560-hp Twin-Turbo V8, Dynamic and Driver Assistance Packages, Western-Owned</p>
                <p class="auction-loc">Millersville, MD 21108</p>
            </div>
      </div>
      
      <div className='audi'>
            <div class="LazyLoad is-visible">
              <div class="ratio">
                  <div class="preload-wrap  loaded">
                    <img src={pic2} alt="photo" height="220px" width="332px"></img>
                  </div>
              </div>
            </div>
            <div class="auction-title">
                <NavLink to="/Porsche">2001 Porsche 911 Turbo Coupe</NavLink>
                <p class="auction-subtitle">6-Speed Manual, Mostly Unmodified, Orient Red Metallic</p>
                <p class="auction-loc">MD 21108</p>
            </div>
      </div>
      </div>
      </div>
      <Aside />
      </div>
  );
}

export default Main
