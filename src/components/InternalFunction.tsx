import { useEffect } from 'react';

import { useMyHook } from '../hooks/useMyHook';

function InternalFunction() {
  const { bar, baz, changeBar, changeBaz } = useMyHook();

  useEffect(() => {
    const foo = (a: number, b: number) => {
      return a + b;
    };
    console.log('foo', foo(bar, baz));
  }, [bar, baz]);

  return (
    <div>
      <p>Internal function</p>
      <button onClick={() => changeBar()}>change bar</button>
      <span>bar value: {bar}</span>
      <button onClick={() => changeBaz()}>change baz</button>
      <span>baz value: {baz}</span>
    </div>
  );
}

export default InternalFunction;
