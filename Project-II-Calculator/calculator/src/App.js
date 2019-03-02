import React from 'react';
import './App.css';
import NumButtons from './components/ButtonComponents/NumberButton'
import ActButtons from './components/ButtonComponents/ActionButton'
import Display from './components/DisplayComponents/CalculatorDisplay'

const App = () => {
  return (
    <div className="App">
<Display />
<div className="numpad">
<NumButtons /> 
<ActButtons /> 
</div>
    </div>
  );
};

export default App;
