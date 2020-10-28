import React, {useState} from 'react';
import Tweet from './Tweet';

function App() {
  const [users, setUser] = useState([
    {name: 'Sean', message: 'Hello'},
    {name: 'Yo', message: 'Hello'},
  ]);

  return (
    <div>
      {users.map(user => (
        <Tweet name = {user.name} tweet = {user.message}/>
      ))}
    </div>
  );
}

export default App;
