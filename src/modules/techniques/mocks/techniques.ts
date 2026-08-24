import { TechniqueWithContent } from '../interfaces';

export const techniques: TechniqueWithContent[] = [
  {
    id: '1',
    name: 'Seoi-nage',
    content: {
      sections: [
        {
          key: 'kuzushi',
          title: 'Kuzushi',
          blocks: [
            {
              type: 'paragraph',
              text: `Tori y uke se sostienen mutuamente en una posición natural derecha. Tori jala a
                    Uke hacia adelante mientras da un ligero paso hacia atrás para desequilibrar a
                    Uke. Tori coloca su pie derecho enfrente del pie derecho de uke y empieza a
                    levantar a Uke con ambas manos.`,
            },
            {
              type: 'image',
              src: '/uploads/techniques/seoi-nage-kuzushi.jpg',
              alt: 'Kuzushi de Seoi-nage',
              caption: 'Desequilibrio inicial hacia adelante',
            },
            {
              type: 'paragraph',
              text: `Tori dobla ambas rodillas, gira sobre su pie derecho mientras baja la cadera y
                    coloca su pie izquierdo delante del pie izquierdo de Uke. Tori y Uke ahora estan
                    en la misma dirección.`,
            },
          ],
        },
        {
          key: 'tsukuri',
          title: 'Tsukuri',
          blocks: [
            {
              type: 'paragraph',
              text: `Tori dobla su codo derecho y lo coloca en la axila derecha de Uke, después jala
                    hacia abajo el brazo derecho de Uke y lo mantiene contra el cuerpo de Tori,
                    mientras mantiene un contacto estrecho con el pecho de Uke.`,
            },
            {
              type: 'image_group',
              images: [
                {
                  src: '/uploads/techniques/seoi-nage-tsukuri-1.jpg',
                  alt: 'Entrada de Tori, paso 1',
                },
                {
                  src: '/uploads/techniques/seoi-nage-tsukuri-2.jpg',
                  alt: 'Entrada de Tori, paso 2',
                },
              ],
              caption: 'Entrada de Tori bajo el centro de gravedad de Uke',
            },
          ],
        },
        {
          key: 'kake',
          title: 'Kake',
          blocks: [
            {
              type: 'paragraph',
              text: `Tori levanta a Uke con ambas manos e inclina su cuerpo hacia adelante, mientras
                    endereza ambas rodillas lanza a Uke sobre su hombro derecho. Con el brazo
                    derecho de Tori actuando como eje, el cuerpo de Uke girará y caerá.`,
            },
            {
              type: 'video',
              url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
              label: 'Demostración de Seoi-nage',
            },
          ],
        },
      ],
    },
  },
  {
    id: '2',
    name: 'Ippon-seoi-nage',
    content: {
      sections: [
        {
          key: 'general',
          title: '',
          blocks: [
            {
              type: 'paragraph',
              text: `Tori y uke se sostienen mutuamente en una posición natural derecha. Tori jala a
                    Uke hacia adelante mientras da un ligero paso hacia atrás para desequilibrar a
                    Uke. Tori coloca su pie derecho enfrente del pie derecho de uke y empieza a
                    levantar a Uke con ambas manos.`,
            },
            {
              type: 'paragraph',
              text: `Tori dobla ambas rodillas, gira sobre su pie derecho mientras baja la cadera y
                    coloca su pie izquierdo delante del pie izquierdo de Uke. A la vez que Tori esta
                    girando, desliza su brazo derecho bajo la axila derecha de Uke, bloquea el brazo
                    de Uke contra su cuerpo, luego jala hacia abajo el brazo derecho de Uke y lo
                    mantiene contra el cuerpo de Tori, mientras mantiene un contacto estrecho con el
                    pecho de Uke.`,
            },
            {
              type: 'paragraph',
              text: `Tori levanta a Uke con ambas manos e inclina su cuerpo hacia adelante, mientras
                    endereza ambas rodillas lanza a Uke sobre su hombro derecho.`,
            },
          ],
        },
      ],
    },
  },
];
