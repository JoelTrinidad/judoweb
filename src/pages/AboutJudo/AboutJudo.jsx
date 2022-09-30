import * as S from "./AboutJudo.styles";
import Particles from "react-tsparticles";
import particlesConfig from "../../components/config/particles";
import estatuaJigoro from "../../assets/img/jigoro-kano-statue.png"
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
      <S.TitleContainer>
        <S.Title>El Judo</S.Title>
      </S.TitleContainer>
      <S.Container>
        <S.IntroImage src={estatuaJigoro} alt="Estatua de Jigoro Kano" />
        <S.IntroText>
          <p>
            El nombre de Judo prviene de los terminos japoneces “Ju” que
            significa “suave” y “Do” que significa ”camino”, pudiendose
            interpretar como “El camino de la suavidad”.
          </p>
          <p>
            El Judo fue creado por el Dr. Jigoro Kano a finales del siglo XIX,
            tomando como base los metodos de autodefensa de los samurais
            cobinandolos con el estilo y las técnicas del Jiu Jitsu de ese
            entonces.
          </p>
        </S.IntroText>
      </S.Container>
    </S.AboutContainer>
  );
}
