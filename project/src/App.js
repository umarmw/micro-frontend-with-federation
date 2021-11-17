import React, {useEffect} from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");

  useEffect(() => {
    setSearchTerm(localStorage.getItem("searchTerm"))
  }, [searchTerm]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Project App
        </p>


        <div>
        {searchTerm && <p>You have previously searched for <b>{searchTerm}!</b></p>}
        </div>

      </header>
    </div>
  );
}

export default App;
