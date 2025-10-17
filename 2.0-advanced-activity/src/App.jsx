import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  // Composition root that stitches the page sections together.
  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  );
}

export default App;
