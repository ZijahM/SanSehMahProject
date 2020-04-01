import React, { useState } from 'react';
import { Button } from 'react-native';

const Counter = ({ notify }) => {
  const [count, setCount] = useState(100);
  return (
    <div>
      <p>Count - {count}</p>
      <Button
        title="+"
        onPress={() => {
          setCount(count + 1);
          if (count === 95) notify();
        }}
      />
      <Button
        title="-"
        onPress={() => {
          setCount(count - 1);
          if (count === 95) notify();
        }}
      />
    </div>
  );
};

export default Counter;
