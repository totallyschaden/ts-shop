import { useEffect, useState } from 'react'
import logo from '../assets/hero-main-logo.png'
import icon1 from '../assets/hero-icon-1.png'
import icon2 from '../assets/hero-icon-2.png'
import icon3 from '../assets/hero-icon-3.png'
import icon4 from '../assets/hero-icon-4.png'
import icon5 from '../assets/hero-icon-5.png'
import icon6 from '../assets/hero-icon-6.png'
import content from '../content'
import './Hero.css'

const Hero = () => {
    const [loaded, setLoaded] = useState(false)
    const { hero } = content

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <section className="hero">
            <div className={`hero-content ${loaded ? 'fade-in' : ''}`}>
                <div className="logo-container">
                    <div className="side-icons left-icons">
                        <img src={icon1} alt="Icon 1" className="hero-icon" />
                        <img src={icon2} alt="Icon 2" className="hero-icon" />
                        <img src={icon3} alt="Icon 3" className="hero-icon" />
                    </div>
                    <img src={logo} alt="Totally Schaden Logo" className="hero-logo" />
                    <div className="side-icons right-icons">
                        <img src={icon4} alt="Icon 4" className="hero-icon" />
                        <img src={icon5} alt="Icon 5" className="hero-icon" />
                        <img src={icon6} alt="Icon 6" className="hero-icon" />
                    </div>
                </div>


                <h1 className="hero-title">{hero.title}<br /><span className="text-accent">{hero.titleAccent}</span></h1>
                <p className="hero-subtitle">{hero.subtitle}</p>
                <button className="cta-button" onClick={() => document.getElementById('buy').scrollIntoView({ behavior: 'smooth' })}>
                    {hero.cta}
                </button>
            </div>
            <div className="hero-noise"></div>
        </section>
    )
}

export default Hero
