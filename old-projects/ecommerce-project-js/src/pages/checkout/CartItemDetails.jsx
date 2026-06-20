import { useState } from 'react';
import { formatMoney } from '../../utils/money';
import dayjs from 'dayjs';
import axios from 'axios';
import { DeliveryOptions } from './DeliveryOptions';



export function CartItemDetails({ cartItem, deliveryOptions, loadCart }) {
    const [updated, setUpdated] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);

    const selectedDeliveryOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId;

                    });

                    const deleteCartItem = async () => {
                        await axios.delete(`/api/cart-items/${cartItem.productId}`);

                        await loadCart();
                    };
    const changeUpdated = async () => {
        if (updated) {
        await axios.put(`/api/cart-items/${cartItem.productId}`, {
            quantity: Number(quantity) 
        });
        
        await loadCart();
        
        setUpdated(false);
        } else {
            setUpdated(true);
        }
    };

    const changeQuantity = (event) => {
            const quantitySelected = Number(event.target.value);
            setQuantity(quantitySelected);
    };

    const keyPressed = (event) => {
        if (event.key === 'Enter') {
            changeUpdated();
        }

        if (event.key === 'Escape') {
            setQuantity(cartItem.quantity);
            setUpdated(false);
        }
    };


    return (
        <div key={cartItem.productId}
            className="cart-item-container">
            <div className="delivery-date">
                Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM, D')}
            </div>

            <div className="cart-item-details-grid">
                <img className="product-image"
                    src={cartItem.product.image} />

                <div className="cart-item-details">
                    <div className="product-name">
                        {cartItem.product.name}
                    </div>
                    <div className="product-price">
                        {formatMoney(cartItem.product.priceCents)}
                    </div>
                    <div className="product-quantity">
                        <span>
                            Quantity:
                            {updated && <input type="text" style={{ "width": 50 }} value={quantity} onChange={changeQuantity} onKeyDown={keyPressed} />}
                            <span className="quantity-label" >{cartItem.quantity}</span>
                        </span>
                        <span className="update-quantity-link link-primary" onClick={changeUpdated} >
                            Update
                        </span>
                        <span className="delete-quantity-link link-primary"
                            onClick={deleteCartItem} >
                            Delete
                        </span>
                    </div>
                </div>


                <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart} />
            </div>
        </div>
    );
}