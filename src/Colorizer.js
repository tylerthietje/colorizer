import React, { useState } from 'react';

const Colorizer = () => {
  const [color, setColor] = useState('#155799');

  const getRandomColor = () => {
    const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return random.toUpperCase();
  };

  const changeColor = () => {
    const randomColor = getRandomColor();
    setColor(randomColor);
  };

  return (
    <div className="colorizer">
      <div className="canvas" style={{ backgroundColor: color }}>
        { color }
      </div>

      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Colorizer;
