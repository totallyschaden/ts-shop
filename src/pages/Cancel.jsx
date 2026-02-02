import { Link } from 'react-router-dom'
import '../pages/CartPage.css' // Reuse styles

const Cancel = () => {
    return (
        <div className="cart-page container" style={{ textAlign: 'center', paddingTop: '150px' }}>
            <h1 style={{ color: '#888', fontSize: '4rem', marginBottom: '1rem' }}>ABGEBROCHEN</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Hast du Angst bekommen?</p>
            <Link to="/cart" className="checkout-btn" style={{ textDecoration: 'none', display: 'inline-block', maxWidth: '300px' }}>
                ZURÜCK ZUM WARENKORB
            </Link>
        </div>
    )
}

export default Cancel
