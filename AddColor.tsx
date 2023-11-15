import React, { useState } from 'react';

function AddColor({ colors, setColors, nombresColoresCSS, setActualColor }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevoColor = event.target.color.value;
    if (!colors.includes(nuevoColor) && nombresColoresCSS.includes(nuevoColor)) {
      setColors([...colors, nuevoColor]);
    }
  };

  return (
    <div className="boton">
      <form onSubmit={handleSubmit} id="form">
        <input type="text" name="color" placeholder="escriba un color" />
        <input type="submit" value="Agregar" />
      </form>
    </div>
  );
}

export default AddColor;
