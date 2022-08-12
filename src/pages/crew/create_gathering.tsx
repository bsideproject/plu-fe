import { Button, DatePicker, Gathering, NavigationBar, Typography } from '@/components';
import Dialog from '@/components/Dialog';
import TextField from '@/components/TextField';
import TimePicker from '@/components/TimePicker';
import { ArrowLeftIcon, MinusIcon, PlusIcon } from '@/icons';
import { Flex, MB20, Padding } from '@/ui';
import CustomDate from '@/utils/CustomDate/CustomDate';
import { shouldForwardProp } from '@/utils/emotion';
import styled from '@emotion/styled';
import { ChangeEvent, useEffect, useState } from 'react';

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

interface Dialog {
  date: { open: boolean };
  time: { open: boolean };
  place: { open: boolean };
}

type DialogType = keyof Dialog;

const DIALOG: Dialog = {
  date: { open: false },
  time: { open: false },
  place: { open: false },
};

const CrewCreateGathering = () => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const [dialog, setDialog] = useState(DIALOG);

  const dObject = new CustomDate(date);

  const onChangeName = (e: ChangeEvent<HTMLTextAreaElement>) => setName(e.currentTarget.value);

  const onChangeCount = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const number = Number(e.currentTarget.value.replace(/[^0-9]/g, ''));

    if (number < 1 || number > MAX_COUNT) return;

    setCount(number);
  };

  const onCountDown = () => setCount((prev) => (prev <= 1 ? prev : prev - 1));

  const onCountUp = () => setCount((prev) => (prev >= MAX_COUNT ? prev : prev + 1));

  const onChangeDate = (date: Date) => setDate(date);

  const onOpenDialog = (type: DialogType) => () => {
    setDialog((prev) => ({ ...prev, [type]: { open: true } }));
  };

  const onCloseDialog = (type: DialogType) => () => {
    setDialog((prev) => ({ ...prev, [type]: { open: false } }));
  };

  useEffect(() => {
    const dObject = new CustomDate();
    const minute = dObject.minute;

    if (minute % 10) {
      const newMinute = (parseInt(String(minute / 10)) + 1) * 10;
      const needAddMinute = newMinute - minute;
      setDate(dObject.add(needAddMinute, 'minute').getDateObject);
    }
  }, []);

  return (
    <>
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
            <Gathering label="시간" text={dObject.format('A HH:mm')} onClick={onOpenDialog('time')} />
            <Gathering label="날짜" text={dObject.format('YYYY년 MM월 DD일')} onClick={onOpenDialog('date')} />
            <Gathering
              label="장소"
              bb={false}
              text="???"
              onClick={() => {
                window.console.log('#Dialog open');
              }}
            />
          </Padding>
        </div>

        <Button fullWidth disabled={false}>
          확인
        </Button>
      </Flex>

      {dialog.date.open && (
        <Dialog open={dialog.date.open} onClose={onCloseDialog('date')}>
          <DatePicker
            date={date}
            onChange={(date) => {
              onChangeDate(date);
              onCloseDialog('date');
            }}
          />
        </Dialog>
      )}

      {dialog.time.open && (
        <Dialog open={dialog.time.open} onClose={onCloseDialog('time')}>
          <TimePicker
            value={date}
            onChange={(date) => {
              onChangeDate(date);
              onCloseDialog('time');
            }}
          />
        </Dialog>
      )}
    </>
  );
};

export default CrewCreateGathering;
