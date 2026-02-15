import content from '../content'
import './Gallery.css'

const Gallery = () => {
    return (
        <section className="gallery-section">
            <h2 className="gallery-title">{content.gallery.title} <span className="text-accent">{content.gallery.titleAccent}</span></h2>
            <div className="gallery-video-wrapper">
                {/* Video file should be placed in public/gameplay-loop.mp4 */}
                <video
                    className="gallery-gameplay-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/homeVid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="gallery-glow-effect"></div>
            </div>
        </section>
    )
}

export default Gallery
