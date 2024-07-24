import About from "./components/About";
import Contact from "./components/Contact";
import Explore from "./components/Explore";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/ui/Footer";
// import Layout from "./components/ui/Layout";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Feature />
      <About />
      {/* <Explore /> */}
      <Contact />
      <Footer />
      {/* <Layout maxWidth="max-w-[1440px]">
        <h1>1</h1>
      </Layout> */}
    </main>
  );
}

export default App;
