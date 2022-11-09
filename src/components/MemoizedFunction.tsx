import { useEffect, useCallback } from 'react';

import { useMyHook } from '../hooks/useMyHook';

function MemoizedFunction() {
  const { bar, baz, changeBar, changeBaz } = useMyHook();

  const foo = useCallback((a: number, b: number) => {
    return a + b;
  }, []);

  useEffect(() => {
    console.log('foo', foo(bar, baz));
  }, [bar, baz]);

  return (
    <div>
      <p>Memoized function</p>
      <button onClick={() => changeBar()}>change bar</button>
      <span>bar value: {bar}</span>
      <button onClick={() => changeBaz()}>change baz</button>
      <span>baz value: {baz}</span>
    </div>
  );
}

export default MemoizedFunction;
