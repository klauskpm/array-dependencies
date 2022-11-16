import { useState } from 'react';

const getRandomValue = (limit = 80) => {
  return Math.round(Math.random() * limit);
};

export const useMyHook = () => {
  const [bar, setBar] = useState(1);
  const [baz, setBaz] = useState(2);
  const [buz, setBuz] = useState(3);

  const changeBar = () => setBar(getRandomValue());
  const changeBaz = () => setBaz(getRandomValue());
  const changeBuz = () => setBuz(getRandomValue());

  return {
    bar,
    baz,
    buz,

    changeBar,
    changeBaz,
    changeBuz,
  };
};
