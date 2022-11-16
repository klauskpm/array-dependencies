import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import Example from './components/PureFunction';
// import Example from './components/InternalFunction';
// import Example from './components/ExternalFunction';
// import Example from './components/MemoizedFunction';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Example />
    </div>
  );
}

export default App;
