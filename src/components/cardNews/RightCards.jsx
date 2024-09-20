// Core
import React, { Component } from 'react';
// Components
import img1 from '../../assets/images/comunity.png';
import {
   default as img2,
   default as img3,
} from '../../assets/images/great.png';
import img4 from '../../assets/images/office.png';
import img5 from '../../assets/images/plastation.png';
import img7 from '../../assets/images/plastation2.png';
import img6 from '../../assets/images/play.png';
import styles from './Cards.module.css';
// Data
const data = [
   {
      btnText: 'John smash',
      color: '#FF8484',
      image: img1,
      mini: '.5min',
      title: 'Lorem Ipsum is simply dummy text dummy text ? ',
   },
   {
      btnText: 'John smash',
      color: '#2351F5',
      image: img2,
      mini: '.5min',
      title: 'Lorem Ipsum is simply dummy text dummy text ? ',
   },
   {
      btnText: 'John smash',
      color: '#FF7C32',
      image: img3,
      mini: '.5min',
      title: 'Lorem Ipsum is simply dummy text dummy text ? ',
   },
   {
      btnText: 'John smash',
      color: '#2351F5',
      image: img4,
      mini: '.5min',
      title: 'Lorem Ipsum is simply dummy text dummy text ? ',
   },
   {
      btnText: 'John smash',
      color: '#23A54F',
      image: img5,
      mini: '.5min',
      title: 'Lorem Ipsum is simply dummy text dummy text ? ',
   },
   {
      btnText: 'John smash',
      color: '#2351F5',
      image: img6,
      mini: '.5min',
      title: 'Lorem Ipsum is simply dummy text dummy text ? ',
   },
   {
      btnText: 'John smash',
      color: '#9921C3',
      image: img7,
      mini: '.5min',
      title: 'Lorem Ipsum is simply dummy text dummy text ? ',
   },
];
// Function
export class LittleCard extends Component {
   render() {
      return (
         <div className={styles['cards-container']}>
            {data.map((item, index) => (
               <div key={index} className={styles['right__card']}>
                  <div className={styles['right__card-img']}>
                     <img src={item.image} alt='hello' />
                  </div>
                  <div className={styles['right__card-items']}>
                     <div className={styles['card-btns']}>
                        <button
                           className={styles['card-button']}
                           style={{ backgroundColor: `${item.color}` }}
                        >
                           {item.btnText}
                        </button>
                        <button className={styles['card-button']}>
                           {item.mini}
                        </button>
                     </div>
                     <h4 className={styles['right__card-header']}>
                        {item.title}
                     </h4>
                  </div>
               </div>
            ))}
         </div>
      );
   }
}
export default LittleCard;
