import React from 'react';
import './Home.css';
import Product from './Product';

function Home(){
    return(
        <div className="home">
            <div className="homeContainer">
                
                <img 
                    className="homeImage"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/cnnjpp/July21/Nord2/Nord_2_Jul_13th_1500x600._CB664675432_.jpg"
                    alt=""
                />

                <div className="homeRow">
                    <Product
                        id="12321341"
                        title="The lean Startup"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY218_.jpg"
                        rating={3}
                    />
                    <Product
                        id="49538094"
                        title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)"
                        price={239.00}
                        image="https://m.media-amazon.com/images/I/51ae8jtSakL._AC_UY218_.jpg"
                        rating={4}
                    />

                </div>

                <div className="homeRow">
                <Product
                    id="4903850"
                    title="OnePlus 9R 5G (Carbon Black, 8GB RAM, 128GB Storage)"
                    price={570.00}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41733yAnlzL._AC_SX184_.jpg"
                    rating={5}
                />
                <Product
                    id="23445930"
                    title="Organica ThinkSafe Natural Floor & Surface Cleaner Liquid"
                    price={10}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/717vfdREVtL._SX522_.jpg" />
                <Product
                    id="23445931"
                    title="CLYMB
                    Outdoor Sports Running Shoes for Mens Boy"
                    price={11}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/612CjsFEg-L._AC_UL320_.jpg"
                />
                </div>

                <div className="homeRow">
                <Product
                    id="23445932"
                    title="Lenovo IdeaCentre A340 21.5-inch FHD All-in-One Desktop (10th Gen Intel Core i3/8GB/1TB HDD/Windows 10"
                    price={600}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/8187XpGLLUL._AC_UL320_.jpg"
                />
                </div>
            </div>
        </div>
    );
}

export default Home;