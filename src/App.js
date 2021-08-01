import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Background from './components/Background'
function App() {
  // This is where the components will be nested and conditionally rendered
  return (
    <>
      <Header />
      <Background />
      <Footer />
    </>
  );
}

export default App;
