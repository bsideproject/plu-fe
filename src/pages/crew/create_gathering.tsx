import { Button, Gathering, NavigationBar, Typography } from '@/components';
import TextField from '@/components/TextField';
import { ArrowLeftIcon, MinusIcon, PlusIcon } from '@/icons';
import { Flex, MB20, Padding } from '@/ui';
import { shouldForwardProp } from '@/utils/emotion';
import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';

const label = 'CrewCreateGathering';

const MAX_COUNT = 20;

const IconButton = styled('div', {
  shouldForwardProp: shouldForwardProp(['left', 'right']),
})<{ left?: number; right?: number }>(({ left, right }) => ({
  position: 'absolute',
  top: `${(60 - 24) / 2}px`,
  zIndex: 9999,
  left: left,
  right: right,
}));

const CrewCreateGathering = () => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  const onChangeName = (e: ChangeEvent<HTMLTextAreaElement>) => setName(e.currentTarget.value);

  const onChangeCount = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const number = Number(e.currentTarget.value.replace(/[^0-9]/g, ''));

    if (number < 1 || number > MAX_COUNT) return;

    setCount(number);
  };

  const onCountDown = () => setCount((prev) => (prev <= 1 ? prev : prev - 1));

  const onCountUp = () => setCount((prev) => (prev >= MAX_COUNT ? prev : prev + 1));

  return (
    <Flex label={label} direction="column" justifyContent="space-between" fullHeight>
      <div>
        <MB20>
          <NavigationBar startIcon={<ArrowLeftIcon />} title="모임개설" />
        </MB20>
        <MB20>
          <Padding>
            <Flex direction="column" gap={14}>
              <Typography component="p" variant="subheadline1" weight="semibold">
                모임소개
              </Typography>
              <TextField value={name} onChange={onChangeName} label="모임이름" />
            </Flex>
          </Padding>
        </MB20>
        <MB20>
          <Padding>
            <div style={{ position: 'relative' }}>
              <IconButton left={10} onClick={onCountDown}>
                <MinusIcon />
              </IconButton>
              <TextField value={count} onChange={onChangeCount} textAlign="center" fullWidth />
              <IconButton right={10} onClick={onCountUp}>
                <PlusIcon />
              </IconButton>
            </div>
          </Padding>
        </MB20>
        <Padding>
          <Typography component="p" variant="subheadline1" weight="semibold">
            모임정보
          </Typography>
        </Padding>
        <Padding>
          <Gathering label1="시간" />
          <Gathering label1="날짜" />
          <Gathering label1="장소" bb={false} />
        </Padding>
      </div>

      <Button fullWidth disabled={false}>
        확인
      </Button>
    </Flex>
  );
};

export default CrewCreateGathering;
