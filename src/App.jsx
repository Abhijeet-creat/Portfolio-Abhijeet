import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import RecentWorks from "./components/RecentWorks";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#f2efe8] text-[#171717]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <RecentWorks />
        <Services />
      </main>

      <Footer />
    </div>
  );
}

export default App;