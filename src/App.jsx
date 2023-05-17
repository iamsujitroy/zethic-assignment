import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import Explore from "./components/Explore/Explore";
import ScheduleCall from "./components/ScheduleCall/ScheduleCall";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Hero />
          <Brands />
          <Explore />
          <Projects/>
          <ScheduleCall />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
