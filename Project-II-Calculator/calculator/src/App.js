import React from 'react';
import './App.css';
import SideButtons from "./components/ButtonComponents/SideButtons"
import ActButtons from './components/ButtonComponents/ActionButton'
import Display from './components/DisplayComponents/CalculatorDisplay'

import Numbers from './components/ButtonComponents/Numbers';

const App = () => {
  return (
    <div className="App">
<Display display="3.14"/>

<div className="allButtons">
<div className="numpad">
<ActButtons action="Clear"/>
<Numbers />
<ActButtons action="0"/>
</div>
<SideButtons />
  </div>
</div>
  );
};

export default App;
