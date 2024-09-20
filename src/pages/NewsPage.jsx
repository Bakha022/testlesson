// Core
import { Component, Fragment } from 'react';
// Components
import CardNews from '../components/cardNews/';
import HeaderNews from '../components/headerNews';
import SubscribeForm from '../components/SubscribeForm/';
// Function
export default class NewsPage extends Component {
   render() {
      return (
         <Fragment>
            <HeaderNews />

            <section>
               <CardNews />
            </section>

            <div className='container mb-5'>
               <SubscribeForm
                  buttonColor={'#D80027'}
                  formColor={'#D6C5BB'}
                  inputColor={'#000000'}
                  textColors={'#000000'}
               />
            </div>
         </Fragment>
      );
   }
}
