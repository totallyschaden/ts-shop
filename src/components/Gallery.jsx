
import content from '../content'
import './Gallery.css'

const Gallery = () => {
    const { gallery } = content
    return (
        <section className="gallery">
            <div className="container">
                <h2 className="gallery-title">{gallery.title} <span className="text-accent">{gallery.titleAccent}</span></h2>
                <div className="gallery-content">
                    <div className="video-wrapper">
                        {/* Video file should be placed in public/gameplay-loop.mp4 */}
                        <video
                            className="gameplay-video"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/homeVid.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="glow-effect"></div>
                    </div>
                </div>
                <p className="gallery-reviews">{gallery.reviews}</p>
            </div>
        </section>
    )
}

export default Gallery
