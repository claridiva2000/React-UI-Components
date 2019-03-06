import React from 'react';
import './Button.css';
 


const NumButton = () => {
  return (
    <div className="NumButton">
<div className="clear btnheight">
clear
</div> 
<div className="row1 ">
<div className="button btnheight">7</div><div className="button btnheight">8</div><div className="button btnheight">9</div>
</div>
<div className="row2">
<div className="button btnheight">4</div><div className="button btnheight">5</div><div className="button btnheight">6</div>
</div>
<div className="row3 ">
<div className="button btnheight">1</div><div className="button btnheight">2</div><div className="button btnheight">3</div>
</div>
<div className="row4 btnheight ">
0
</div>

    </div>
  );
};


export default NumButton;