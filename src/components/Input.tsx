import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

type InputProps = {
  data: { text: string; done: boolean }[];
  setData: React.Dispatch<
    React.SetStateAction<
      {
        text: string;
        done: boolean;
      }[]
    >
  >;
};

const Form = styled.form`
  display: flex;
`;

const WriteArea = styled.input`
  width: 240px;
  height: 32px;
  outline: none;
  background-color: #ededed;
  border: none;
  border-bottom: 1px solid black;
  padding-left: 8px;
`;

const Button = styled.button`
  width: 70px;
  border: none;
  background-color: green;
  color: white;
`;

const Input = ({ data, setData }: InputProps) => {
  const [text, setText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) {
      return;
    }

    setData((prev) => prev.concat({ text, done: true }));
    setText('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <WriteArea onChange={handleChange} value={text} />
      <Button type="submit">등록</Button>
    </Form>
  );
};

export default Input;
