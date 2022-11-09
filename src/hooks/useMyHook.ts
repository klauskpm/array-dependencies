import { useState } from 'react';

const getRandomValue = (limit = 80) => {
  return Math.round(Math.random() * limit);
};

export const useMyHook = () => {
  const [bar, setBar] = useState(1);
  const [baz, setBaz] = useState(2);

  const changeBar = () => setBar(getRandomValue());
  const changeBaz = () => setBaz(getRandomValue());

  return {
    bar,
    baz,

    changeBar,
    changeBaz,
  };
};