import React, { useRef } from "react";

function Box() {
  const elementRef = useRef();

  function handleMeasureClick() {
    const div = elementRef.current;
    console.log("Measrements:", div.getBoundingClientRect());
  }
  return (
    <div ref={elementRef}>
      <h1>Box</h1>
      <button>Measure</button>
      <button onClick={handleMeasureClick}>Measure</button>
    </div>
  );
}

export default Box;
