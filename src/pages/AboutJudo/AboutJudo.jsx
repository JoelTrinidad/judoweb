import * as S from "./AboutJudo.styles";
import Particles from "react-tsparticles";
import particlesConfig from "../../components/config/particles";
import { loadFull } from "tsparticles";

export default function AboutJudo() {
  const particlesInit = async (main) => await loadFull(main);
  
  return (
    <S.AboutContainer>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      />
      <S.Title>El Judo</S.Title>
    </S.AboutContainer>
  );
}
