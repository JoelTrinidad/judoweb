import { ChangeEvent, useState } from 'react';

interface Props {
  label?: string;
  options: {
    key: string;
    value: string;
    label: string;
  }[];
  handleOnOptionChange: (value: string) => void;
}

export default function SelectInput({ label = '', options, handleOnOptionChange }: Props) {
  const [selectedItem, setSelectedItem] = useState<string>('no');

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(e.target.value);
    handleOnOptionChange(e.target.value !== 'no' ? e.target.value.toLowerCase() : '');
  };

  return (
    <label className="text-white text-sm font-medium flex items-center">
      {label && (
        <span className="bg-gray-900 px-3 h-full flex items-center border border-gray-500 rounded rounded-s-lg rounded-e-none">
          {label}
        </span>
      )}
      <select
        value={selectedItem}
        onChange={(e) => handleOnChange(e)}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm ${label ? 'rounded rounded-s-none rounded-e-lg' : 'rounded-lg'} focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
        <option value="no">seleccione una opción</option>
        {options.length > 0 &&
          options.map((option) => {
            return (
              <option key={option.key} value={option.value} className="p-3">
                {option.label}
              </option>
            );
          })}
      </select>
    </label>
  );
}
