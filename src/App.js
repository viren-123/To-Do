import logo from './logo.svg';
import './App.css';
import Random from './component/random';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         ABHI
        </p>

      </header>
      <Random/>

    </div>
  );
}

export default App;
