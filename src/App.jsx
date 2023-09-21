import Header from "./components/header/Header";
import css from './styles/app.module.scss'
import Hero from "./components/hero/hero";
import Expertise from "./components/expertise/expertise"
import Works from "./components/works/Works";

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
    <Header />
    <Hero />
    <Expertise />
    <Works />
  </div>
};

export default App;
