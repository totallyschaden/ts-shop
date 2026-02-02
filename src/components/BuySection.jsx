import content from '../content'
import visa from '../assets/payment/visa.png'
import mastercard from '../assets/payment/mastercard.png'
import paypal from '../assets/payment/paypal.png'
import twint from '../assets/payment/twint.png'
import Gallery from './Gallery'
import './BuySection.css'
import { useCart } from '../context/CartContext'

const BuySection = () => {
    const { buySection } = content
    const { addToCart } = useCart()
    const logos = [visa, mastercard, paypal, twint]

    const handleAddToCart = () => {
        addToCart({
            id: 'basic-deck',
            title: 'Totally Schaden - Das Spiel',
            price: 24.95,
            image: '' // You could add an image path here later
        })
        alert('Zum Warenkorb hinzugefügt!')
    }

    return (
        <section id="buy" className="buy-section">
            <div className="container buy-content">
                <h2 className="buy-title">{buySection.title} <span className="text-accent">{buySection.titleAccent}</span></h2>
                <div className="price-tag">
                    <span className="currency">{buySection.price.currency}</span>
                    <span className="amount">{buySection.price.amount}</span>
                    <span className="decimal">{buySection.price.decimal}</span>
                </div>
                <p className="shipping-note">{buySection.shipping}</p>

                <button className="buy-button" onClick={handleAddToCart}>
                    {buySection.cta}
                </button>


            </div>

            <Gallery />

            <footer className="footer">
                <div className="container">
                    <div className="footer-links">
                        {buySection.footer.links.map((link, i) => (
                            <a key={i} href={link.href}>{link.text}</a>
                        ))}
                    </div>
                    <div className="footer-payments">
                        {buySection.paymentMethods.map((method, i) => (
                            <img key={i} src={logos[i]} alt={method} className="footer-payment-logo" />
                        ))}
                    </div>
                    <p className="copyright">&copy; {new Date().getFullYear()} {buySection.footer.copyright}</p>
                </div>
            </footer>
        </section>
    )
}

export default BuySection
