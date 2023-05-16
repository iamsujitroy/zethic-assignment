import { BrowserRouter } from 'react-router-dom';
import Layout from './layouts/layout';
import Hero from './components/Hero/Hero';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Hero/>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
