import { Observable } from 'windowed-observable';
import React, {useEffect} from 'react';
import './App.css';

const observable = new Observable('messages');

function App() {
  const [searchTerm, setSearchTerm] = React.useState([]);

  const handleNewMessage = (newMessage) => {
    console.log("newMessage", newMessage);
    setSearchTerm((currentMessages) => currentMessages.concat(newMessage));
  };

  useEffect(() => {  
    observable.subscribe(handleNewMessage);

    return () => {
      observable.unsubscribe(handleNewMessage)
    }
  }, [handleNewMessage]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Project App
        </p>


        <div>
        {searchTerm && <p>You have previously searched for <b>{JSON.stringify(searchTerm)}!</b></p>}
        </div>

      </header>
    </div>
  );
}

export default App;
