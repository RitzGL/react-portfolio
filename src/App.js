import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  // This is where the components will be nested and conditionally rendered
  return (
    <>
      <Header />
      {/* Based on a set of conditions
        different components will be rendered in 
        between these two components.

        Given that Navigation is nested,
        I should define some state in here
        in order to pass it down: Header > Navigation,
        attach onClick even handlers on each of those
        <li>, setting the state to something else,
        it will then be checked here, and different
        components will be rendered based on that.
      
      */}
      <Footer />
    </>
  );
}

export default App;
