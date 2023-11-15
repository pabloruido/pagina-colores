import React, { useState } from 'react';
import AddColor from './AddColor'; 

function ColorList() {
  const nombresColoresCSS = [
    'aliceblue',
    'antiquewhite',
    'aqua',
    'aquamarine',
    'azure',
    'beige',
    'bisque',
    'black',
    'blanchedalmond',
    'blue',
    'blueviolet',
    'brown',
    'burlywood',
    'cadetblue',
    'chartreuse',
    'chocolate',
    'coral',
    'cornflowerblue',
    'cornsilk',
    'crimson',
    'cyan',
    'darkblue',
    'darkcyan',
    'darkgoldenrod',
    'darkgray',
    'darkgreen',
    'darkgrey',
    'darkkhaki',
    'darkmagenta',
    'darkolivegreen',
    'darkorange',
    'darkorchid',
    'darkred',
    'darksalmon',
    'darkseagreen',
    'darkslateblue',
    'darkslategray',
    'darkslategrey',
    'darkturquoise',
    'darkviolet',
    'deeppink',
    'deepskyblue',
    'dimgray',
    'dimgrey',
    'dodgerblue',
    'firebrick',
    'floralwhite',
    'forestgreen',
    'fuchsia',
    'gainsboro',
    'pink',
  ];

  const ListColors = [
    'red',
    'blue',
    'orange',
    'green',
    'violet',
    'yellow',
    'brown',
    'skyblue',
  ];
  const [colors, setColors] = useState(ListColors);
  const [actualColor, setActualColor] = useState('white');


  return (
    <div className="fondo" style={{ background: actualColor }}>
      <div>
        <AddColor
          colors={colors}
          setColors={setColors}
          nombresColoresCSS={nombresColoresCSS}
          setActualColor={setActualColor}
        />

        <div className="botones">
          {colors.map((color, index) => (
            <div
              style={{ background: color }}
              key={color + index}
              className={color}
              onClick={() => setActualColor(color)}
            >
              {color}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorList;






