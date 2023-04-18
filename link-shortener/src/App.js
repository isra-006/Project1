import './App.css';
import LinkShortener from './components/LinkShortener';
import LinkResult from './components/LinkResult';
import { useState } from 'react';
import BackgroundAnimate from './components/BackgroundAnimate';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <LinkShortener setInputValue={setInputValue}/>
      <LinkResult inputValue= {inputValue} />
      <BackgroundAnimate />
    </div>
  );
}

export default App;
