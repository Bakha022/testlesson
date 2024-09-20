// Core
import React, { Component } from 'react';
// Components
import imgContent1 from '../../assets/images/allone.png';
import imgContent2 from '../../assets/images/alltwoo.png';
import styles from './Cards.module.css';
import LeftCards from './LeftCards';
import RightCards from './RightCards';
// Function
export class NewsCard extends Component {
   render() {
      return (
         <div className={styles['cards']}>
            <div className='container'>
               <div className={styles['items_cards']}>
                  <div className={styles['cards__left']}>
                     <LeftCards
                        btnText='John smash'
                        btnMini='.5min'
                        header='Lorem Ipsum is simply dummy text dummy text '
                        image={imgContent1}
                        text1="
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries,"
                        text2='Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
                     />
                     <div className={styles['line']}></div>
                     <LeftCards
                        btnText='John smash'
                        btnMini='.5min'
                        header='Lorem Ipsum is simply dummy text dummy text '
                        image={imgContent2}
                        text1="
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries,"
                        text2='Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
                     />
                  </div>
                  <div className={styles['card__right']}>
                     <RightCards></RightCards>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
export default NewsCard;
