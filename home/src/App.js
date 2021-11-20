import React from 'react';
import './App.css';

function App() {

  const searchRef = React.useRef();
  const [searchTerm, setSearchTerm] = React.useState("");


  function getSearchTerm() {
    setSearchTerm(searchRef.current.value);

    const customEvent = new CustomEvent('message', { detail: searchRef.current.value});
    window.dispatchEvent(customEvent)
    
    // localStorage.setItem("searchTerm", searchRef.current.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Home App
        </p>

        <div className="search">
          <input type="text" name="search" className="search-input" ref={searchRef}/>
          <button onClick={getSearchTerm}>Search</button>
        </div>

        <div>
        {searchTerm && <p>You have searched for <b>{searchTerm}!</b></p>}
        </div>

      </header>
    </div>
  );
}

export default App;
