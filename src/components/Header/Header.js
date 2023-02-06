import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "./Header.scss";

const Header = () => {
  const currentPath = useLocation();
  const navigate = useNavigate();
  const finalCurrentPath = currentPath.pathname.replace('/','');
  const [activeItem, setActiveItem] = useState(finalCurrentPath);

  



  const handleItem = (e, { name }) => {
    setActiveItem(name);
    navigate(name) 
 };

  return (
    <div className="header-menu">
      <Menu secondary>
        <Menu.Item
          name="inicio"
          active={activeItem === "inicio"}
          onClick={handleItem}
        />
        <Menu.Item
          name="series"
          active={activeItem === "series"}
          onClick={handleItem}
        />
        <Menu.Item
          name="comics"
          active={activeItem === "comics"}
          onClick={handleItem}
        />
      </Menu>
    </div>
  );
};

export default Header;
