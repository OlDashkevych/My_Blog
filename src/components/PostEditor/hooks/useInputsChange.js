import { useState } from 'react';

const useInputChange = () => {
  const [input, setInput] = useState({ title: '', body: '' });

  const handleInputChange = ({ currentTarget: { name, value } }) =>
    setInput({
      ...input,
      [name]: value,
    });

  const handleClearInput = () => {
    setInput({ title: '', body: '' });
  };

  return [input, handleInputChange, handleClearInput];
};
export default useInputChange;
