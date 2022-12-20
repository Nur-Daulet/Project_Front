import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/show_one_car.css'
import pic from '../img/porche.jpg'
import Aside from './Aside';

const auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbWdhcjIwMDNAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTY3OCIsImlhdCI6MTY2Nzk4NTk5MiwiZXhwIjoxNjY3OTg5NTkyfQ.ZI0v7R10t4mX8Qa7eN7ZDhY7E2ZINbhbjT2qBFqyS3w"


const api = axios.create({
  baseURL:'http://localhost:5000/car/'
})
//post/63697acf8ec098675175b396
function OneCar() {
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    api.get('/post/636bb71d2a71190cc5858362')
       .then(res =>{
      console.log(res.data)
      const a = res.data
      //console.log(a.length)
      setPosts(res.data)
      
    })
    {/*,
      headers:{
        Authorization:auth
      }*/}
  },[])

  return (
    <div className='Main'>
     
      {/* { <p>{ posts[0].make }</p> */
        // posts.map((item,index)=>{
        //   <p>{item.make}</p>
        // })
        // <p>{Object.values(posts)
        // .map(index=>{
        //   <p>{index}</p>
        // })
      /* {Array.from(posts).map((obj)=>{
        return (<div>{obj}</div>);
      })}  */
      
      /* {
        Array.from(posts).forEach((obj,index)=>{
          <div key={index}>{index}</div>
        })

        } */}

      <div className='car-inf'>
      <div className='center'>
        <div>
          <h1 className='Title'>2001 Porsche 911 Turbo Coupe</h1>
          <p>~29,300 Miles, 6-Speed Manual, Mostly Unmodified, Orient Red Metallic</p>
        </div>
        <img src={pic} alt="photo" height="600px" width="900px"></img>
        <table>
          <tbody>
            <tr>
              <td className = "table_name">Make</td>
              <td className = "table_value">{posts.make}</td>
              <td className = "table_name">Engine</td>
              <td className = "table_value">{posts.engine}</td>
            </tr>
            <tr>
              <td className = "table_name">Model</td>
              <td className = "table_value">{posts.model}</td>
              <td className = "table_name">Drivetrain</td>
              <td className = "table_value">{posts.drivetrain}</td>
            </tr>
            <tr>
              <td className = "table_name">Mileage</td>
              <td className = "table_value">{posts.mileage}</td>
              <td className = "table_name">Transmission</td>
              <td className = "table_value">{posts.transmission}</td>
            </tr>
            <tr>
              <td className = "table_name">VIN</td>
              <td className = "table_value">{posts.vin}</td>
              <td className = "table_name">Body Style</td>
              <td className = "table_value">{posts.bodyStyle}</td>
            </tr>
            <tr>
              <td className = "table_name">Title Status</td>
              <td className = "table_value">{posts.titleStatus}</td>
              <td className = "table_name">Exterior Color</td>
              <td className = "table_value">{posts.exteriorColor}</td>
            </tr>
            <tr>
              <td className = "table_name">Location</td>
              <td className = "table_value">{posts.location}</td>
              <td className = "table_name">Interior Color</td>
              <td className = "table_value">{posts.interiorColor}</td>
            </tr>
            <tr>
              <td className = "table_name">Seller</td>
              <td className = "table_value">{posts.seller}</td>
              <td className = "table_name">Date of release</td>
              <td className = "table_value">{posts.date}</td>
            </tr>
          </tbody>        
        </table>
        <div>
          <h2>Doug's take</h2>
          <p>The Audi RS7 is a truly impressive car, touting gorgeous styling, all-wheel drive, and big power from its twin-turbocharged V8. This example benefits from the Dynamic and Driver Assistance packages — and it boasts a Bang & Olufsen sound system and a truly upscale interior (like many Audi RS products). This RS7 also comes with virtually no modifications, some encouraging service documentation, and a clean, accident-free Carfax report showing mostly warm-weather California and Arizona ownership until 2020, further broadening its appeal.</p>
        </div>
        <div class="detail-section detail-highlights">
          <h4>Highlights</h4>
           <div class="detail-body">
            <p>THIS… is a 2014 Audi RS7, finished in Ibis White with a black interior.</p>
            <ul>
              <li>The attached Carfax history report shows no accidents or mileage discrepancies in this RS7’s past. It also shows that this Audi was registered in California and Arizona until 2020.</li>
              <li>Factory equipment includes Dynamic and Driver Assistance Packages, 21-inch wheels, LED headlights, a sunroof, heated and power-adjustable front seats, an Audi MMI Navigation Plus system with MMI Touch, automatic climate control, and a Bang &amp; Olufsen advanced sound system, among others listed below.</li>
              <li>Modifications reported by the seller are limited to 15-millimeter spacers and window tint.</li><li>Audi introduced the "Type 4G8" A7 in 2010, and the range-topping RS7 variant arrived in 2013. In addition to power upgrades, Audi also added a myriad of high-performance equipment such as 15-inch front brake rotors with 6-piston calipers, Quattro all-wheel-drive with torque vectoring, and a locking center differential, among other RS-specific features.</li>
              <li>Power comes from a "TFSI" 4.0-liter twin-turbocharged V8, rated at 560 horsepower and 516 lb-ft of torque. Output is sent to all four wheels via an 8-speed automatic transmission and Audi's Quattro permanent all-wheel-drive system.</li>
            </ul>
           </div>
        </div>
        <div class="detail-section detail-equipment">
          <h4>Equipment</h4>
          <div class="detail-body">
            <p>A build sheet is provided in the photo gallery, and a partial list of notable equipment includes:</p>
            <ul>
              <li>Dynamic Package (red painted brake calipers, delete adaptive air suspension, Audi Dynamic Steering, sport exhaust with black tailpipes, sport suspension with Dynamic Ride Control)</li>
              <li>Driver Assistance Package (Audi Adaptive Cruise Control with Stop and Go, Audi Pre-Sense Plus, Audi Active Lane Assist, corner-view camera)</li>
              <li>21-inch wheels</li>
              <li>Quattro permanent all-wheel-drive system</li>
              <li>LED headlights</li>
              <li>Power-operated sunroof</li>
              <li>Rear spoiler</li>
              <li>Heated and power-adjustable front seats</li>
              <li>Audi MMI Navigation Plus system with MMI Touch</li>
              <li>Automatic climate control</li>
              <li>Bang &amp; Olufsen advanced sound system</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Aside/>
    </div>
  );
}

export default OneCar