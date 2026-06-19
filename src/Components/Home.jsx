import './Home.css';
import Furniture from '../assets/Furniture.jpg';
import makeup from '../assets/makeupBanner.jpg';
import sale from '../assets/sale.jpg';

import fruit from '../assets/Fruit.avif';
import discount from '../assets/Discount.avif';
import { Link } from 'react-router-dom';
import Review from './Review';




function Home() {
    return (
        <div>


            <div className="carousel">
                <div className="carousel-track">
                    <img src={Furniture} alt="Furniture" />
                    <img src={makeup} alt="makeup" />
                    <img src={fruit} alt="fruit" />
                    <img src={discount} alt="discount" />
                    <img src={sale} alt="sale" />

                </div>
            </div>
            <div className='tagLine'>
                Shop according to your Preference
            </div>
            <div className="category">
                <ul className='category-ul'>
                    <li className='beauty'><Link to="/beauty">Beauty</Link></li>
                    <li className='perfume'><Link to="/perfume">Perfume</Link></li>
                    <li className='furniture'><Link to="/furnitute">Furniture</Link></li>
                    <li className='groceries'><Link to="/groceries">Groceries</Link></li>


                </ul>
            </div>

            <div>
                <h1 style={{ 'textAlign': 'center', 'color': 'rgb(65, 64, 64)' }}>Reviews....</h1>
                <Review />

            </div>
           
        </div>
    )
}
export default Home;