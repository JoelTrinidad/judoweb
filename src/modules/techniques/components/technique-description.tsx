import Accordion from '../../core/components/accordion';
import { ContentBlock, TechniqueWithContent } from '../interfaces';

interface Props {
  technique: TechniqueWithContent;
}

function getYoutubeEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes('youtu.be')) {
      return `https://www.youtube.com/embed${parsed.pathname}`;
    }

    const videoId = parsed.searchParams.get('v');

    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  } catch {
    return url;
  }
}

function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case 'paragraph':
      return <p className="mt-1.5 mb-2">{block.text}</p>;

    case 'heading': {
      const HeadingTag = block.level === 2 ? 'h2' : 'h3';

      return <HeadingTag className="font-semibold mt-3 mb-2">{block.text}</HeadingTag>;
    }

    case 'list': {
      const ListTag = block.ordered ? 'ol' : 'ul';

      return (
        <ListTag className={block.ordered ? 'list-decimal pl-5' : 'list-disc pl-5'}>
          {block.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ListTag>
      );
    }

    case 'image':
      return (
        <figure className="my-3">
          <img src={block.src} alt={block.alt} className="w-full rounded-lg" />
          {block.caption && (
            <figcaption className="text-sm text-gray-400 mt-1 italic">{block.caption}</figcaption>
          )}
        </figure>
      );

    case 'image_group':
      return (
        <figure className="my-3">
          <div className="flex gap-2">
            {block.images.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} className="flex-1 rounded-lg" />
            ))}
          </div>
          {block.caption && (
            <figcaption className="text-sm text-gray-400 mt-1 italic">{block.caption}</figcaption>
          )}
        </figure>
      );

    case 'video':
      return (
        <div className="my-3 aspect-video">
          <iframe
            src={getYoutubeEmbedUrl(block.url)}
            title={block.label ?? 'Video'}
            className="w-full h-full rounded-lg"
            allowFullScreen
          />
        </div>
      );

    default:
      return null;
  }
}

export default function TechniqueDescription({ technique }: Props) {
  const items = (technique.content?.sections ?? []).map((section) => ({
    key: section.key,
    title: section.title || section.key,
    content: (
      <div>
        {section.blocks.map((block, index) => (
          <BlockRenderer key={index} block={block} />
        ))}
      </div>
    ),
  }));

  return (
    <>
      <h3 className="text-2xl font-semibold mb-3 mt-1">{technique.name}</h3>
      <Accordion type="single" items={items} />
    </>
  );
}
