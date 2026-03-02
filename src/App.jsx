import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import HowItWorks from "./components/HowItWorks";
import AppFeatures from "./components/AppFeatures";
import PressReleases from "./components/PressReleases";
import Waitlist from "./components/Waitlist";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <AppFeatures />
      <PressReleases />
      <Waitlist />
      <FAQ />
      <Footer />
    </main>
  );
};

export default App;
