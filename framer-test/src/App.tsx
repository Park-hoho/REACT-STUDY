import React, {useState} from "react";
import {motion, AnimateSharedLayout, AnimatePresence,} from "framer-motion";
import "./App.css";
import Item from "./list";
/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */
export const MyComponent = () => (
  <motion.div
    className="box"
    drag
    dragConstraints={{
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}
    layout
    initial={{ height: 0 }}
    animate={{ height: 100 }}
    exit={{ height: 0 }}
  />
)


export default function App() {
  const items = [0, 1, 2, 3];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>{isOpen && <MyComponent />}</AnimatePresence>
      <button onClick={() => {setIsOpen(!isOpen)}}>ss</button>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        {items.map(item => (
          <Item key={item} />
        ))}
      </motion.ul>
    </>
  );
}




