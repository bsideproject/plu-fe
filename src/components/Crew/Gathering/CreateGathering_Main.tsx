import Button from '@/components/Button';
import Gathering from '@/components/Gathering';
import NavigationBar from '@/components/NavigationBar';
import TextField from '@/components/TextField';
import Typography from '@/components/Typography';
import { ArrowLeftIcon, MinusIcon, PlusIcon } from '@/icons';
import { DialogType, Place } from '@/pages/crew/create_gathering';
import { Flex, MB20, Padding } from '@/ui';
import CustomDate from '@/utils/CustomDate/CustomDate';
import { shouldForwardProp } from '@/utils/emotion';
import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

// TODO: ArrowLeftIcon 클릭 시 이전 페이지 이동
// TODO: 확인 버튼 disabled (필수 값 확인)

const IconButton = styled('div', {
  shouldForwardProp: shouldForwardProp(['left', 'right']),
})<{ left?: number; right?: number }>(({ left, right }) => ({
  position: 'absolute',
  top: `${(60 - 24) / 2}px`,
  zIndex: 9999,
  left: left,
  right: right,
}));

interface Props {
  date: Date;
  label: string;
  name: string;
  count: number;
  place: Place;
  onChangeName: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeCount: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onCountDown: () => void;
  onCountUp: () => void;
  onOpenDialog: (type: DialogType) => () => void;
  onNext: () => void;
}

const CreateGathering_Main = (props: Props) => {
  const { date, label, name, place, onChangeName, onCountDown, count, onChangeCount, onCountUp, onOpenDialog, onNext } =
    props;
  const dObject = new CustomDate(date);

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
          <Gathering label="시간" text={dObject.format('A HH:mm')} onClick={onOpenDialog('time')} />
          <Gathering label="날짜" text={dObject.format('YYYY년 MM월 DD일')} onClick={onOpenDialog('date')} />
          <Gathering label="장소" bb={false} text={place.name} onClick={onNext} />
        </Padding>
      </div>

      <Button fullWidth disabled={false}>
        확인
      </Button>
    </Flex>
  );
};

export default CreateGathering_Main;
