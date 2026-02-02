import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import logo from '../assets/logo-transparent.png'
import content from '../content'
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const { cartCount } = useCart()
    const { navbar } = content

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link
                    to="/"
                    className="logo-wrapper"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{ cursor: 'pointer', textDecoration: 'none' }}
                >
                    <img src={logo} alt="Totally Schaden Logo" className="nav-logo" />
                </Link>
                <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <Link to="/cart" className="cart-link" style={{ position: 'relative', display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        {cartCount > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '-8px',
                                background: 'var(--accent-color)',
                                color: 'white',
                                fontSize: '0.75rem',
                                width: '18px',
                                height: '18px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold'
                            }}>
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    <button onClick={() => document.getElementById('buy') ? document.getElementById('buy').scrollIntoView({ behavior: 'smooth' }) : window.location.href = '/#buy'} className="nav-cta">
                        {navbar.cta}
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
