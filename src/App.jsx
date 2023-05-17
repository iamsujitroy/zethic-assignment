import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import Explore from "./components/Explore/Explore";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Hero />
          <Brands />
          <Explore/>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
