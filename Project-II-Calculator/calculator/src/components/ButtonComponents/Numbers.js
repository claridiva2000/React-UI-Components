import React from "react";
import NewButtons from "./NewButtons";
import "./Button.css";

const nums = [
  { digit: 1 },
  { digit: 2 },
  { digit: 3 },
  { digit: 4 },
  { digit: 5 },
  { digit: 6 },
  { digit: 7 },
  { digit: 8 },
  { digit: 9 }
];

function Numbers() {
  return(
    <div className="digits">
    {nums.map(num=>(
      <NewButtons num={num} key={num.digit} />
    ))}
    </div>
  );
}

export default Numbers;