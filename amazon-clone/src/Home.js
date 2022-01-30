import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                    className='home__image' 
                    src="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg" alt="" />
                <div className="home__row">
                    <Product 
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
                        price={29.99} 
                        image='https://cdn.gramedia.com/uploads/items/9786022911340__w600_hauto.jpeg' 
                        rating='5.0'/>
                    <Product 
                        title='Anti-Termite Drug | Highly effective, highly concentrated termiticide is one of the best termite killers available' 
                        price={8.99} 
                        image='https://images.tokopedia.net/img/cache/900/VqbcmM/2021/12/9/4a8f51c4-e594-4048-bad2-c30f035b4bd8.jpg' 
                        rating='4.8'/>
                </div>

                <div className="home__row">
                    <Product 
                        title='Stand Mic / Standing Microphone' 
                        price={9.99} 
                        image='https://images.tokopedia.net/img/cache/900/VqbcmM/2020/10/9/8c5418c6-4714-42b2-b20d-fbfbe380c28a.jpg' 
                        rating='4.9'/>
                    <Product 
                        title='Sleeve Leather Cover Standing + Pouch' 
                        price={39.99} 
                        image='https://images.tokopedia.net/img/cache/900/VqbcmM/2021/3/6/88437502-fe87-4009-8b1c-1eeef4697b50.jpg' 
                        rating='4.8'/>
                    <Product 
                        title='Yonex Astrox Smash Original Badminton Racket' 
                        price={49.99} 
                        image='https://images.tokopedia.net/img/cache/900/product-1/2020/2/28/22694286/22694286_4ddf1e9f-feca-4707-a0db-2eaa57e02ebd_700_700' 
                        rating='4.8'/>
                </div>

                <div className="home__row">
                    <Product 
                        title='Car and Home Massage' 
                        price={12.99} 
                        image='https://images.tokopedia.net/img/cache/900/product-1/2018/6/6/296846065/296846065_d0e678a0-4e6b-4362-978d-778b027dfe71_700_700.jpg' 
                        rating='4.5'/>
                </div>
            </div>    
        </div>
    )
}

export default Home
