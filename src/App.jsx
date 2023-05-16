import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Hero />
          <Brands />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
