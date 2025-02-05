import './App.css';
import FirstComponent from './components/FirstComponent/FirstComponent';
import Counter from './components/Counter/Counter'

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>

      <Counter />

      <FirstComponent userName={"Ivan"}/>
      <FirstComponent userName ="Alex"/>
      <FirstComponent userName="Oleg"/>
    </div>
  );
}

export default App;
