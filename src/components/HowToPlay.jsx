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
                <p className="htp-extra-text" style={{
                    marginTop: '4rem',
                    fontSize: '1.2rem',
                    color: 'white',
                    maxWidth: '800px',
                    margin: '4rem auto 0',
                    fontFamily: "'Anton', sans-serif",
                    textTransform: 'uppercase',
                    lineHeight: '1.4',
                    textAlign: 'center'
                }}>
                    {howToPlay.extraText} <span className="text-accent">{howToPlay.extraTextAccent}</span>
                </p>
            </div>
        </section>
    )
}

export default HowToPlay
