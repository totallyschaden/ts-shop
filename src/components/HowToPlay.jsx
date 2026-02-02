import content from '../content'
import './HowToPlay.css'

const HowToPlay = () => {
    const { howToPlay } = content

    return (
        <section className="how-to-play">
            <div className="container">
                <h2 className="htp-title">{howToPlay.title} <span className="text-accent">{howToPlay.titleAccent}</span></h2>
                <p className="htp-subtitle">{howToPlay.subtitle}</p>

                <div className="steps-grid">
                    {howToPlay.steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowToPlay
