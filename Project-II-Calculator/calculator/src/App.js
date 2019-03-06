import React from 'react';
import './App.css';
import ActButtons from './components/ButtonComponents/ActionButton'
import Display from './components/DisplayComponents/CalculatorDisplay'
import NumButton from './components/ButtonComponents/NumberButton';
import Numbers from './components/ButtonComponents/Numbers';

const App = () => {
  return (
    <div className="App">
<Display />
<div className="numpad">
{/* <NumButton /> */}
<Numbers />
<ActButtons /> 
</div>
    </div>
  );
};

export default App;
