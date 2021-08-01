import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from './components/Hero'
function App() {
  // This is where the components will be nested and conditionally rendered
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}

export default App;
