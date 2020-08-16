import { useState } from 'react';

interface IHooks {
  input: { title: string; body: string };
  handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
  handleClearInput(): void;
}

const useInputChange = () => {
  const [input, setInput] = useState<{ title: string; body: string }>({
    title: '',
    body: '',
  });

  const handleInputChange = ({
    currentTarget: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setInput({
      ...input,
      [name]: value,
    });

  const handleClearInput = () => {
    setInput({ title: '', body: '' });
  };

  return [input, handleInputChange, handleClearInput] as Array<any>;
};
export default useInputChange;
