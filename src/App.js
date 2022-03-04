import logo from './logo.svg';
import react from 'react';
import './App.css';
const api = {
  key: "b002e52ade95bcd77704fc0dc70380a8",
  base: "http://api.openweathermap.org/data/2.5/",
}
 

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box"> 
            <input type="text" className="search-bar" placeholder="search..."/>
        </div>
      </main>
    </div>
  );
}

export default App;
