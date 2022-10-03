import {useState, useContext} from 'react';
import { ThemeContext } from '../../App';
import { Label, Input, Span, Div, Image } from './ColorSwitcher.styles';
import lightIcon from "../../assets/sun-svgrepo-com.svg";
import darkIcon from "../../assets/moon-svgrepo-com.svg";
const ColorSwitcher: React.FC = () => {

const [isToggled, setIsToggled] = useState(false);
const {toggle, setToggle} = useContext(ThemeContext);

  const onToggle = () => {
    setIsToggled(!isToggled);
    setToggle(toggle === 'light'? 'dark' : 'light');
  };

  return (
    <Label className="toggle-switch">
      <Input type="checkbox" checked={isToggled} onChange={onToggle} />
      <Div className="switch">
        <Div className="switch-front">
          <Image src={lightIcon} alt="sun-image" />
        </Div>
        <Div className="switch-back">
          <Image src={darkIcon} alt="sun-image" />
        </Div>
      </Div>
    </Label>
  );
};

export default ColorSwitcher;