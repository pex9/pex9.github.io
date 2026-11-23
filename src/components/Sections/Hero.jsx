// /Sections/Hero.jsx
import TextAnimation from '../elements/TextAnimation';
function Hero() {
    return (
        <section id="hero">
            <p className="hero-kicker">Software Engineer</p>
            <h1>Davide<br />Pellegrino</h1>
            <p className="hero-role">
                <strong>M.Sc in Computer Engineering</strong> 
            </p>
            <div className="hero-animation">
                <TextAnimation />
            </div>
        </section>
    );
}

export default Hero;