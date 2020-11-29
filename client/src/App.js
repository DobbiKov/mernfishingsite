import logo from './logo.svg';
import './App.css';
import { useRoutes } from './routes';
import { Header } from './components/header/index';

function App() {
  const routes = useRoutes();
  return (
    <div className="App">
      <Header className="header"/>
      {routes}
    </div>
  );
}

export default App;
