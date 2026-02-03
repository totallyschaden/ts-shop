import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useEffect } from 'react'
import content from '../content'
import '../pages/CartPage.css' // Reuse styles

const Success = () => {
    const { clearCart } = useCart()
    const { checkout } = content

    useEffect(() => {
        clearCart()
    }, [])

    return (
        <div className="cart-page container" style={{ textAlign: 'center', paddingTop: '150px' }}>
            <h1 style={{ color: 'var(--accent-color)', fontSize: '4rem', marginBottom: '1rem' }}>{checkout.success.title}</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>{checkout.success.message}</p>
            <Link to="/" className="checkout-btn" style={{ textDecoration: 'none', display: 'inline-block', maxWidth: '300px' }}>
                {checkout.success.cta}
            </Link>
        </div>
    )
}

export default Success
