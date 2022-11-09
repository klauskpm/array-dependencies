import { useEffect } from 'react';

import { useMyHook } from '../hooks/useMyHook';

const foo = (a: number, b: number) => {
  return a + b;
};

function ExternalFunction() {
  const { bar, baz, changeBar, changeBaz } = useMyHook();

  useEffect(() => {
    console.log('foo', foo(bar, baz));
  }, [bar, baz]);

  return (
    <div>
      <p>External function</p>
      <button onClick={() => changeBar()}>change bar</button>
      <span>bar value: {bar}</span>
      <button onClick={() => changeBaz()}>change baz</button>
      <span>baz value: {baz}</span>
    </div>
  );
}

export default ExternalFunction;
