import axios from 'axios';
import { useEffect, useState } from 'react';
import {NavLink} from "react-router-dom"
import '../css/Aside.css'

import pic from '../img/1.png'
import pic2 from '../img/2.png'
import pic3 from '../img/3.png'
import pic4 from '../img/4.png'
import pic5 from '../img/5.png'
import pic6 from '../img/6.png'

//post/63697acf8ec098675175b396
function Aside() {
  return (
    <div className='Aside'>
         <div className="first">
            <div className="car-mini">
                <img src={pic} alt="photo" height="112px" width="218px"></img>
                <div class="metadata">
                    <div class="auction-title">
                        <h5>2019 Mazda MX-5 Miata Grand Touring</h5>
                        <p class="auction-subtitle"> ~16,500 Miles, 6-Speed Manual, Eternal Blue, Mostly Unmodified</p>
                        <ul class="highlights">
                            <li>Accident-free Carfax history report</li>
                            <li>Brown soft top</li>
                            <li>Apple CarPlay/Android Auto compatibility kit</li>
                        </ul>
                        <p class="auction-loc">Malvern, PA 19355</p>
                    </div>
                </div>
            </div>
            <div className="car-mini">
                <img src={pic2} alt="photo" height="112px" width="218px"></img>
                <div class="metadata">
                    <h5>1995 Audi S6 Avant</h5>
                    <p>5-Speed Manual, Turbo 5-Cylinder, 3rd Row Seating, Some Modifications</p>
                    <ul class="highlights">
                        <li>Electronic locking rear differential</li>
                        <li>Custom-made coilovers</li>
                        <li>18-inch Private Kup wheels</li>
                        </ul>
                        <p class="auction-loc">Raleigh, NC 27609</p>
                </div>
            </div>
            <div className="car-mini">
                <img src={pic3} alt="photo" height="112px" width="218px"></img>
                <div class="metadata">
                    <h5>2019 Mazda MX-5 Miata Grand Touring</h5>
                    <p>~16,500 Miles, 6-Speed Manual, Eternal Blue, Mostly Unmodified</p>
                    <ul class="highlights">
                        <li>Accident-free Carfax history report</li>
                        <li>Brown soft top</li>
                        <li>Apple CarPlay/Android Auto compatibility kit</li>
                    </ul>
                    <p class="auction-loc">Malvern, PA 19355</p>
                </div>
            </div>
         </div>
         <div className="second">
         <div className="car-mini">
                <img src={pic4} alt="photo" height="112px" width="218px"></img>
                <div class="metadata">
                    <h5>2015 BMW 328i xDrive Sports Wagon</h5>
                    <p class="auction-subtitle"> M Sport and Technology Packages, Coral Red Interior, AWD</p>
                    <ul class="highlights">
                        <li>Accident-free Carfax history report</li>
                        <li>Cold Weather Package</li>
                        <li>Mostly unmodified</li>
                    </ul>
                    <p class="auction-loc">South Windsor, CT 06074</p>
                </div>
            </div>
            <div className="car-mini">
                <img src={pic5} alt="photo" height="112px" width="218px"></img>
                <div class="metadata">
                    <h5>2000 Lexus LX 470</h5>
                    <p>V8 Power, 4WD, Locking Center Differential, Off-Road Modifications</p>
                    <ul class="highlights">
                        <li>Dobinsons front bumper</li>
                        <li>OME lift kit</li>
                        <li>16-inch wheels</li>
                    </ul>
                    <p class="auction-loc">Hagerstown, MD 21740</p>
                </div>
            </div>
            <div className="car-mini">
                <img src={pic6} alt="photo" height="112px" width="218px"></img>
                <div class="metadata">
                    <h5>2022 Chevrolet Corvette Stingray Convertible</h5>
                    <p>499 Miles, 3LT Trim, V8 Power, Performance Exhaust</p>
                    <ul class="highlights">
                        <li>Mostly unmodified</li>
                        <li>Rapid Blue over Tension/Twilight Blue</li>
                        <li>Magnetic selective ride control</li>
                    </ul>
                    <p class="auction-loc">Bethlehem, NH 03574</p>
                </div>
            </div>
         </div>
    </div>
  );
}

export default Aside