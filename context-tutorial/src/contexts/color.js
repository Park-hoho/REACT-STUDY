import {createContext, useState} from "react";

const ColorContext = createContext({
  // colors: ['red', 'yellow', 'orange', 'green', 'blue', 'indigo', 'violet'],
  // state: {
  //   color: 'black',
  //   subcolor: 'red'
  // },
  // actions: {
  //   setColor: () => {},
  //   setSubcolor: () => {}
  // }
});

const ColorProvider = ({children}) => {
  const [colors, setColors] = useState(['red', 'yellow', 'orange', 'green', 'blue', 'indigo', 'violet']);
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  const value = {
    colors: colors,
    state: { color, subcolor },
    action: {
      setColor: (i) => {
        console.log(222);
        console.log(23);
        console.log(43);
        setColor(i);
      },
      setSubcolor
    }
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const ColorConsumer = ColorContext.Consumer;
export {ColorProvider, ColorConsumer};

export default ColorContext;
