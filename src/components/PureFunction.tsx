import { useState, useEffect } from 'react';

function PureFunction() {
  const [bar, setBar] = useState(0);
  const [baz, setBaz] = useState(0);

  const foo = (a: number, b: number) => {
    return a + b;
  };

  useEffect(() => {
    console.log('foo', foo(bar, baz));
  }, [bar, baz]);

  return null;
}

export default PureFunction;
