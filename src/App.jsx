import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import Explore from "./components/Explore/Explore";
import ScheduleCall from "./components/ScheduleCall/ScheduleCall";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Hero />
          <Brands />
          <Explore />
          <ScheduleCall />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
