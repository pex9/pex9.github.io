// HomeRoute.jsx
import About from './Sections/About';
import Footer from './Sections/Footer';
import Hero from './Sections/Hero';
import Portfolio from './Sections/Portfolio';
import Resume from './Sections/Resume';
import Header from './Sections/Header';
import Education from './Sections/Education';
import Technology from './Sections/Technology';

function HomeRoute() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Education/>
            <Resume />
            <Portfolio />
            <Technology />
            <Footer />
        </>
    );
}

export default HomeRoute;