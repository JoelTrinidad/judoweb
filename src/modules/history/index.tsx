import historyBg from '../../assets/img/kodokan.jpg';
import jigoroKano from '../../assets/img/Jigoro_Kano.jpg';
import jigoroKanoUkiGoshi from '../../assets/img/Jigoro-Kano-uki-goshi.jpg';

export default function History() {
  return (
    <div
      className="text-white h-dvh"
      style={{
        backgroundImage: `url(${historyBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}>
      <div className="bg-black/40 h-full pt-16 grid items-center">
        <section className="bg-gray-800/75 container h-[95%] mx-auto rounded-lg overflow-hidden pb-8 backdrop-opacity-10">
          <div className="bg-gray-800 rounded-t-lg px-6 py-6">
            <h2 className="text-3xl font-bold">Historia</h2>
          </div>
          <div className="text-lg h-[calc(90%)] px-6 pt-4 overflow-auto">
            <p className="mt-1 mb-3">
              De forma simple podemos definir al judo como un arte marcial, asi como también un
              deporte olímpico, de origen Japonés el cual se centra principalmente en proyecciones,
              palancas e inmovilizaciones.
            </p>
            <p className="mt-1 mb-3">
              Ahora, si intentamos ir un poco más allá, para su creador, el padre del judo, Kano
              Jigoro Shihan también conocido simplemente como Jigoro Kano, el judo es un arte
              marcial, una forma de educación física, intelectual y moral, un estilo de vida y la
              definición que más me gusta dicha por él es que el judo es la forma de usar la energía
              del cuerpo y el espíritu de la manera más eficaz.
            </p>
            <figure className="flex flex-col items-center my-6">
              <img className="w-80 max-w-full" src={jigoroKano} alt="Jigoro Kano" />
              <figcaption>Fig1. - Jigoro Kano.</figcaption>
            </figure>
            <p className="mt-1 mb-3">
              Para hablar de la historia del judo es necesario retroceder hasta la niñez de Jigoro
              Kano. En ese entonces Jigoro Kano estudiaba con personas que eran más grandes que él
              en tamaño y edad, los cuales repetidamente lo intimidaron y se reían de él, esto
              condujo a que Jigoro buscará una manera de fortalecer su cuerpo para poder defenderse,
              decidiendo aprender jujutsu, cuyo principio era "Derrotar la fuerza a través de la
              flexibilidad".
            </p>
            <p className="mt-1 mb-3">
              Tras varios maestros y años practicando jujutsu, Jigoro Kano llego a la conclusión de
              que al final la lucha en jujutsu se centraba en un cuerpo poderoso y no en la
              dimensión espiritual y educativa de las personas, por lo que inicio una búsqueda de un
              principio subyacente en el jujutsu. Después de un estudio exhaustivo, creó un nuevo
              principio: hacer el uso más eficiente de la energía mental y física. Con este
              principio en mente, depuró todos los métodos de ataque y defensa que había aprendido,
              conservando sólo aquellos que estaban de acuerdo con el principio, las que no estaban
              de acuerdo con él las sustituyó por técnicas en las que el principio se aplicaba
              correctamente e impuso que ambos luchadores se deben sostener el uno al otro. Dando
              como resultado el conjunto de técnicas a las que se reconoce como judo.
            </p>
            <figure className="text-center flex flex-col items-center my-6">
              <img className="max-w-full" src={jigoroKanoUkiGoshi} alt="Jigoro Kano" />
              <figcaption>Fig2. - Jigoro Kano demostrando la técnica Uki Goshi.</figcaption>
            </figure>
            <p className="mt-1 mb-3">
              El mismo Jigoro Kano dijo que el propósito del judo es fortalecer el cuerpo
              practicando el ataque y la defensa, completar la personalidad entrenando la mente y
              finalmente dedicarse a la sociedad.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
