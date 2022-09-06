import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import * as S from "./Navbar.styles";
import imageLogo from "../../assets/img/logo.png";

export default function Navbar() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false)
  
  return (
    <S.NavbarContainer>
      <S.ContainerLogo onClick={() => navigate("/")}>
        <S.ImageLogo src={imageLogo} alt="Logo" />
        <h1>Judo Digital</h1>
      </S.ContainerLogo>
      <S.ContainerBarsMenu onClick={() => setShowMenu(!showMenu)}>
        <FontAwesomeIcon icon={faBars} />
      </S.ContainerBarsMenu>
      <S.ContainerItems showMenu={showMenu}>
        <p onClick={() => navigate("/about-judo")}>About</p>
      </S.ContainerItems>
    </S.NavbarContainer>
  );
}
