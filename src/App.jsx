import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/Cocktails.jsx";
import About from "./components/About.jsx";

//Registering plugin
gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
    return(
        <main>
            <Navbar/>
            <Hero/>
            <Cocktails/>
            <About/>
        </main>
    )
}

export default App