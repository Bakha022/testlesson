// Core
import React, { Component } from 'react';
// Components
import styles from './Cards.module.css';
// Function
export class CardsPage extends Component {
   render() {
      const { image, btnText, btnMini, header, text1, text2 } = this.props;
      return (
         <div className={styles['card']}>
            <div className={styles['card__images']}>
               <img src={image} alt='hi' />
            </div>
            <div className={styles['card-btns']}>
               <button className={styles['card-button']}>{btnText}</button>
               <button className={styles['card-button']}>{btnMini}</button>
            </div>
            <h3 className={styles['card__header']}>{header}</h3>
            <p className={styles['card__text']}>{text1}</p>
            <p className={styles['card__text']}>{text2}</p>
         </div>
      );
   }
}
export default CardsPage;
