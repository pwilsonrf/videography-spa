import Header from "./components/header/Header";
import css from './styles/app.module.scss'
import Hero from "./components/hero/hero";
import Expertise from "./components/expertise/expertise"
import Works from "./components/works/Works";
import Portfolio from "./components/portfolio/Portfolio";
import People from "./components/people/People";
import Footer from "./components/footer/Footer";

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header />
    <Hero />
    <Expertise />
    <Works />
    <Portfolio />
    <People />
    <Footer />
  </div>
};

export default App;
