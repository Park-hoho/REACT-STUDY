import logo from './logo.svg';
import './App.css';
import ColorBox from "./components/ColorBox";
import {ColorProvider} from "./contexts/color"
import SelectColor from "./components/SelectColor";

function App() {
  return (
    <div>
      <ColorProvider>
        <SelectColor />
        <ColorBox />
      </ColorProvider>
    </div>
  );
}

export default App;
