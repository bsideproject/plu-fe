import { ArrowDownIcon, ArrowUpIcon } from '@/icons';
import { Flex, FlexItem, MB20, Padding } from '@/ui';
import CustomDate from '@/utils/CustomDate/CustomDate';
import { useState } from 'react';
import Button from './Button';
import IconButton from './IconButton';
import Typography from './Typography';

interface Props {
  value: Date;
  onChange: (value: Date) => void;
}

const TimePicker = (props: Props) => {
  const { value, onChange } = props;

  const [date, setDate] = useState(value);

  const dObject = new CustomDate(date);

  const meridiem = dObject.format('A');
  const hour = dObject.hour % 12;
  const minute = dObject.minute;

  const onChangeMeridiem = () => {
    if (meridiem === 'AM') {
      const newDate = dObject.add(12, 'hour').getDateObject;
      setDate(newDate);
    } else if (meridiem === 'PM') {
      const newDate = dObject.add(-12, 'hour').getDateObject;
      setDate(newDate);
    }
  };

  const onChangeHour = (hour: number) => () => {
    const newDate = dObject.add(hour, 'hour').getDateObject;
    setDate(newDate);
  };

  const onChangeMinute = (minute: number) => () => {
    const newDate = dObject.add(minute, 'minute').getDateObject;
    setDate(newDate);
  };

  const onSave = () => {
    const hour = dObject.hour;
    const minute = dObject.minute;
    const newDate = new CustomDate(value).setHour(hour).setMinute(minute).getDateObject;

    onChange(newDate);
  };

  return (
    <div>
      <Padding>
        <MB20>
          <Flex>
            <FlexItem width={'33.333%'} grow={1}>
              <Flex alignItems={'center'} direction="column">
                <IconButton onClick={onChangeMeridiem}>
                  <ArrowUpIcon />
                </IconButton>
                <Padding>
                  <Typography component="p">{meridiem}</Typography>
                </Padding>
                <IconButton onClick={onChangeMeridiem}>
                  <ArrowDownIcon />
                </IconButton>
              </Flex>
            </FlexItem>
            <FlexItem width={'33.333%'} grow={1}>
              <Flex alignItems={'center'} direction="column">
                <IconButton onClick={onChangeHour(1)}>
                  <ArrowUpIcon />
                </IconButton>
                <Padding>
                  <Typography component="p">{String(hour).padStart(2, '0')}</Typography>
                </Padding>
                <IconButton onClick={onChangeHour(-1)}>
                  <ArrowDownIcon />
                </IconButton>
              </Flex>
            </FlexItem>
            <FlexItem width={'33.333%'} grow={1}>
              <Flex alignItems={'center'} direction="column">
                <IconButton onClick={onChangeMinute(10)}>
                  <ArrowUpIcon />
                </IconButton>
                <Padding>
                  <Typography component="p">{String(minute).padStart(2, '0')}</Typography>
                </Padding>
                <IconButton onClick={onChangeMinute(-10)}>
                  <ArrowDownIcon />
                </IconButton>
              </Flex>
            </FlexItem>
          </Flex>
        </MB20>
        <Button fullWidth onClick={onSave}>
          확인
        </Button>
      </Padding>
    </div>
  );
};

export default TimePicker;
