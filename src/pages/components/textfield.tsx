import TextField from '@/components/TextField';
import { ChangeEvent, useState } from 'react';

const TextFieldComponent = () => {
  const [value, setValue] = useState('김유저');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <>
      <TextField width={220} value={value} onChange={onChange} label="Title" disabled />
      <TextField value={value} onChange={onChange} label="Title" />
      <TextField value={value} onChange={onChange} label="Title" />
      <TextField value={value} onChange={onChange} label="Title" />
      <TextField value={value} onChange={onChange} label="Title" error="error입니다" />
    </>
  );
};

export default TextFieldComponent;
