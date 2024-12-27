import 'reflect-metadata';
import '@persistence/registration';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { CounterViewModel } from './Counter.ViewModel';
import { useService } from '@utils/useService';
import { Text } from '@ui/components/Text';
import { Flex } from '@ui/components/Flex';
import { Button } from '@ui/components/Button';

/**
 * Счетчик
 */
export const Counter = observer(() => {
  const { count, increment, decrement } = useService(CounterViewModel);

  return (
    <Flex gap={24} alignItems="center" style={{ marginTop: 24 }}>
      <Button onClick={increment}>Increment</Button>
      <Text>{count}</Text>
      <Button onClick={decrement}>Decrement</Button>
    </Flex>
  );
});
