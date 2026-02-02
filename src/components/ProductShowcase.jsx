import { useEffect, useRef, useState } from 'react'
import box from '../assets/box.png'
import featureCard from '../assets/features/feature-cards.png'
import featureTime from '../assets/features/feature-time.png'
import featurePlayer from '../assets/features/feature-players.png'
import CardDeckSection from './CardDeckSection'
import content from '../content'
import './ProductShowcase.css'

const ProductShowcase = () => {
    const boxRef = useRef(null)
    const { productShowcase } = content
    const featureImages = [featureCard, featureTime, featurePlayer]
    const [isDeckActive, setIsDeckActive] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const element = boxRef.current
            if (element && !isDeckActive) {
                const rect = element.getBoundingClientRect()
                const rotateVal = Math.min((rect.top - window.innerHeight / 2) * 0.05, 20)
                element.style.transform = `perspective(1000px) rotateY(${rotateVal}deg) rotateX(5deg)`
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isDeckActive])

    const handleBoxClick = () => {
        setIsDeckActive(true)
    }

    return (
        <section className="showcase">
            <div className="container showcase-grid">
                <div className="showcase-text">
                    <h2 className="section-title">{productShowcase.title} <span className="text-accent">{productShowcase.titleAccent}</span></h2>
                    <ul className="feature-list">
                        {productShowcase.features.map((feature, i) => (
                            <li key={i}>
                                <img src={featureImages[i]} alt="" className="feature-icon" />
                                {feature.text}
                            </li>
                        ))}
                    </ul>
                    <p className="description">
                        {productShowcase.description.join(' ')}
                    </p>
                </div>
                <div className="showcase-image">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                        <p className="instruction-text">
                            {productShowcase.instruction} <span className="text-accent">{productShowcase.instructionAccent}</span>
                        </p>
                        {isDeckActive ? (
                            <div className="fade-in">
                                <CardDeckSection embedded={true} />
                            </div>
                        ) : (
                            <div className="interactive-box-wrapper" onClick={handleBoxClick} style={{ cursor: 'pointer' }}>
                                <div className="box-container-relative">
                                    <img ref={boxRef} src={box} alt="Totally Schaden Box" className="box-3d" />
                                    <div className="click-hint">
                                        <span className="hint-text">{productShowcase.clickHint}</span>
                                        <div className="hint-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductShowcase
