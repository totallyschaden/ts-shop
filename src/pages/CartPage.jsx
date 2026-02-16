import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import content from '../content'
import './CartPage.css'

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart()

    const handleCheckout = async () => {
        try {
            const response = await fetch('/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cart }),
            });

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                alert('Fehler beim Starten des Checkouts.');
            }
        } catch (error) {
            console.error('Checkout error:', error);
            alert('Verbindung zum Server fehlgeschlagen. Läuft der Server?');
        }
    }

    if (cart.length === 0) {
        return (
            <div className="cart-page container">
                <h1>{content.checkout.empty.title}</h1>
                <p>{content.checkout.empty.message}</p>
                <Link to="/" className="continue-shopping">{content.checkout.empty.cta}</Link>
            </div>
        )
    }

    return (
        <div className="cart-page container">
            <h1 className="cart-title">DEIN WARENKORB</h1>

            <div className="cart-items">
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <div className="item-info">
                            <h3>{item.title}</h3>
                            <p className="item-price">CHF {item.price}</p>
                        </div>
                        <div className="item-controls">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>🗑️</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <div className="total-row">
                    <span>GESAMT:</span>
                    <span className="total-amount">CHF {cartTotal.toFixed(2)}</span>
                </div>
                <button className="checkout-btn" onClick={handleCheckout}>
                    ZUR KASSE
                </button>
                <Link to="/" className="continue-shopping">WEITER EINKAUFEN</Link>
            </div>
        </div>
    )
}

export default CartPage
