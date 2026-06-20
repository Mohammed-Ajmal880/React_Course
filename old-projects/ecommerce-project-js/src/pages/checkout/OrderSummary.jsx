import { DeliveryOptions } from './DeliveryOptions';
import { CartItemDetails } from './CartItemDetails';


export function OrderSummary({ cart, deliveryOptions, loadCart }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                return (
                    <CartItemDetails cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
                    );
                }
            )
        }
        </div>
    )
            
}

