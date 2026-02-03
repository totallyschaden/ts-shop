import { Link } from 'react-router-dom'
import content from '../content'
import '../pages/CartPage.css' // Reuse styles

const Cancel = () => {
    const { checkout } = content

    return (
        <div className="cart-page container" style={{ textAlign: 'center', paddingTop: '150px' }}>
            <h1 style={{ color: '#888', fontSize: '4rem', marginBottom: '1rem' }}>{checkout.cancel.title}</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>{checkout.cancel.message}</p>
            <Link to="/cart" className="checkout-btn" style={{ textDecoration: 'none', display: 'inline-block', maxWidth: '300px' }}>
                {checkout.cancel.cta}
            </Link>
        </div>
    )
}

export default Cancel
