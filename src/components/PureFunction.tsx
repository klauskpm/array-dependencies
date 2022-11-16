import { useEffect } from 'react';

import { useMyHook } from '../hooks/useMyHook';

function PureFunction() {
  const { bar, baz, buz, changeBar, changeBaz, changeBuz } = useMyHook();

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
      <div>
        <button onClick={() => changeBar()}>change bar</button>
        <span>bar value: {bar}</span>
      </div>
      <div>
        <button onClick={() => changeBaz()}>change baz</button>
        <span>baz value: {baz}</span>
      </div>
      <div>
        <button onClick={() => changeBuz()}>change buz</button>
        <span>buz value: {buz}</span>
      </div>
    </div>
  );
}

export default PureFunction;
