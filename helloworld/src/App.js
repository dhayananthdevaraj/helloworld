import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div className="App">
      <h1>Hey!!! Greeting</h1>
      <form data-testid="form" onSubmit={handleSubmit}>
        <label data-testid="label">
          Enter your name: 
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Say Hello</button>
      </form>
      {greeting && <h2>{greeting}</h2>}
    </div>
  );
}

export default App;
