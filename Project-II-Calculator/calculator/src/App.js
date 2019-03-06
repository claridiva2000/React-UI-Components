import React from 'react';
import './App.css';
import ActButtons from './components/ButtonComponents/ActionButton'
import Display from './components/DisplayComponents/CalculatorDisplay'
import NumButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className="App">
<Display />
<div className="numpad">
<NumButton />
<ActButtons /> 
</div>
    </div>
  );
};

export default App;
