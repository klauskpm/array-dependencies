import { useEffect } from 'react';

import { useMyHook } from '../hooks/useMyHook';

function PureFunction() {
  const { bar, baz, changeBar, changeBaz } = useMyHook();

  const foo = (a: number, b: number) => {
    return a + b;
  };

  useEffect(() => {
    console.log('foo', foo(bar, baz));
    // eslint-disable-next-line
  }, [bar, baz]);

  return (
    <div>
      <p>Pure function</p>
      <button onClick={() => changeBar()}>change bar</button>
      <span>bar value: {bar}</span>
      <button onClick={() => changeBaz()}>change baz</button>
      <span>baz value: {baz}</span>
    </div>
  );
}

export default PureFunction;
