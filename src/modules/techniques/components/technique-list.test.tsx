import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, it, expect, describe } from 'vitest';
import TechniqueList from './technique-list';

describe('Technique list', () => {
  afterEach(cleanup);

  it('should render all the items', () => {
    const techniques = [
      {
        id: '1',
        name: 'Seoi-nage',
        description: [
          {
            tag: 'p',
            content: `Tori y uke se sostienen mutuamente en una posición natural derecha. Tori jala a
                      Uke hacia adelante mientras da un ligero paso hacia atrás para desequilibrar a
                      Uke. Tori coloca su pie derecho enfrente del pie derecho de uke y empieza a
                      levantar a Uke con ambas manos.`,
          },
          {
            tag: 'p',
            content: `Tori dobla ambas rodillas, gira sobre su pie derecho mientras baja la cadera y
                      coloca su pie izquierdo delante del pie izquierdo de Uke. Tori y Uke ahora estan
                      en la misma dirección. Tori dobla su codo derecho y lo coloca en la axila
                      derecha de Uke, después jala hacia abajo el brazo derecho de Uke y lo mantiene
                      contra el cuerpo de Tori, mientras mantiene un contacto estrecho con el pecho de
                      Uke.`,
          },
          {
            tag: 'p',
            content: `Tori levanta a Uke con ambas manos e inclina su cuerpo hacia adelante, mientras
              endereza ambas rodillas lanza a Uke sobre su hombro derecho. Con el brazo
              derecho de Tori actuando como eje, el cuerpo de Uke girará y caerá.`,
          },
        ],
      },
      {
        id: '2',
        name: 'Ippon-seoi-nage',
        description: [],
      },
      {
        id: '3',
        name: 'Seoi-otoshi Version 1',
        description: [],
      },
    ];

    const selected = {
      id: '3',
      name: 'Seoi-otoshi Version 1',
      description: [],
    };

    render(
      <TechniqueList
        techniques={techniques}
        selected={selected}
        handleOnclick={() => {
          console.log('hola');
        }}
      />
    );

    const technique = screen.getByText('Seoi-nage');

    expect(technique).toBeInTheDocument();
  });
});
