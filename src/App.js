import Dashboard from './components/containers/Dashboard/Dashboard';
import './App.css';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Dashboard /> */}
      <Outlet />
    </div>
  );
}

export default App;
