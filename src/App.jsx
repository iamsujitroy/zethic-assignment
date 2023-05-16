import { BrowserRouter } from 'react-router-dom';
import Layout from './layouts/layout';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout/>
      </div>
    </BrowserRouter>
  );
}

export default App;
