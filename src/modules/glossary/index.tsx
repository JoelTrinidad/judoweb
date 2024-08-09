import GlossaryList from './components/glossary-list';
import { Word } from './interfaces';
import glossaryBg from '../../assets/img/glossary-background.jpg';

export default function Glossary() {
  const words: Word[] = [
    { word: 'Judo', meaning: 'Camino de la suavidad' },
    { word: 'Seiryoku-Zenyo', meaning: 'Maxina eficiencia del uso de la energia' },
    { word: 'Jita-Kyoei', meaning: 'Todo es unidad' },
  ];

  return (
    <div
      className="text-white h-dvh"
      style={{
        backgroundImage: `url(${glossaryBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}>
      <div className="bg-black/30 h-full pt-16 backdrop-opacity-10">
        <section className="container mx-auto">
          <h2 className="text-3xl font-bold pt-6 pb-8">Glosario</h2>
          <GlossaryList wordList={words} />
        </section>
      </div>
    </div>
  );
}
