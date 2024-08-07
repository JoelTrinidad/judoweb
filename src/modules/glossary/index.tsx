import GlossaryList from './components/glossary-list';
import { Word } from './interfaces';

export default function Glossary() {
  const words: Word[] = [
    { word: 'Judo', meaning: 'Camino de la suavidad' },
    { word: 'Seiryoku-Zenyo', meaning: 'Maxina eficiencia del uso de la energia' },
    { word: 'Jita-Kyoei', meaning: 'Todo es unidad' },
  ];

  return (
    <div>
      <h2>Glosario</h2>
      <GlossaryList wordList={words} />
    </div>
  );
}
