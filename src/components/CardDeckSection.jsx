import { useState } from 'react'
import backCard from '../assets/cards/backTS-1.png'
import card1 from '../assets/cards/card-1.png'
import card2 from '../assets/cards/card-2.png'
import card3 from '../assets/cards/card-3.png'
import content from '../content'
import './CardDeckSection.css'

const CardDeckSection = ({ embedded = false }) => {
    const { cardDeck } = content
    const cards = [backCard, card1, card2, card3]
    const [currentCardIndex, setCurrentCardIndex] = useState(0)
    const [isFlipping, setIsFlipping] = useState(false)

    const handleCardClick = () => {
        if (isFlipping) return

        setIsFlipping(true)

        // Wait for half the animation duration to change content
        setTimeout(() => {
            setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length)
        }, 150)

        // Reset flipping state after animation completes
        setTimeout(() => {
            setIsFlipping(false)
        }, 300)
    }

    const deckContent = (
        <div className="card-container" onClick={handleCardClick} style={embedded ? { marginTop: 0 } : {}}>
            <div className={`card-wrapper ${isFlipping ? 'flipping' : ''}`}>
                <img
                    src={cards[currentCardIndex]}
                    alt="Playing Card"
                    className="playing-card"
                />
            </div>
        </div>
    )

    if (embedded) {
        return deckContent
    }

    return (
        <section className="card-deck-section">
            <div className="container">
                <h2 className="section-title">
                    {cardDeck.title} <span className="text-accent">{cardDeck.titleAccent}</span>
                </h2>
                {deckContent}
            </div>
        </section>
    )
}

export default CardDeckSection
