import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './pages/Homepage/HomePage';

function App() {
  return (
    <div className="App">
    <Navigation></Navigation>
    <HomePage></HomePage>
    </div>
  );
}

export default App;
