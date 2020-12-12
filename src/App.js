import logo from './logo.svg';
import './App.css';
import FormContact from './contact/FormContact'
import Header from './Header'
function App() {
  return (
    <div className="App">
 <Header />
      <header className="App-header">
       
        <img src={logo} className="App-logo" alt="logo" />
        <FormContact />
        <h3 className="m-5">
         FUND NEPAL &copy; 2021
        </h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
