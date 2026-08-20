import GlossaryList from './components/glossary-list';
import glossaryBg from '../../assets/img/glossary-background.jpg';
import useWords from './hooks/useWords';

export default function Glossary() {
  const { words, error } = useWords();

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
          {error && (
            <p className="text-red-400 pb-4" role="alert">
              No se pudo cargar el glosario. Intenta de nuevo más tarde.
            </p>
          )}
          <GlossaryList wordList={words} />
        </section>
      </div>
    </div>
  );
}
