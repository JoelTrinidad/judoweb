import type { ReactNode } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface AccordionItem {
  key: string;
  title: ReactNode;
  content: ReactNode;
}

interface Props {
  items: AccordionItem[];
  type: 'single' | 'multiple';
}

export default function Accordion({ items, type }: Props) {
  const rootProps =
    type === 'single'
      ? ({ type: 'single', collapsible: true } as const)
      : ({ type: 'multiple' } as const);

  return (
    <RadixAccordion.Root {...rootProps} className="flex flex-col gap-2">
      {items.map((item) => (
        <RadixAccordion.Item
          key={item.key}
          value={item.key}
          className="bg-gray-800 border border-gray-600 rounded-lg shadow">
          <RadixAccordion.Header>
            <RadixAccordion.Trigger className="group w-full p-4 flex justify-between items-center gap-4 cursor-pointer">
              <span className="transition-all duration-100 group-data-[state=open]:text-yellow-400">
                {item.title}
              </span>
              <ChevronDownIcon
                width={20}
                className="text-white stroke-2 transition-transform duration-300 group-data-[state=open]:-rotate-180"
              />
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content className="px-4 pb-4 bg-gray-700 rounded-b-lg">
            {item.content}
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
}
