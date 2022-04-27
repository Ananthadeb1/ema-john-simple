import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart , setCart] = useCart(products);
    const hendleRemoveProduct = product=>{
        const rest = cart.filter(pd => pd.id !==product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="review-item-container">
                {
                    cart.map(Product => <ReviewItem
                    key={Product.id}
                    Product = {Product}
                    hendleRemoveProduct ={hendleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/inventory'> Proaid chackout</Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;