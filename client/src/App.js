import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const  [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(username, password)
  }
  return (
    <div>
      {/* create user */}
      <div id="signup">
        <form  onSubmit={handleFormSubmit}>
          <input type="text" placeholder='Username'  onChange={(e)=> {setUsername(e.target.value)}}/>
          <input type="text" placeholder='Password' onChange={(e)=> {setPassword(e.target.value)}} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
