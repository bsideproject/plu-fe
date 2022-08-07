import { ArrowRightIcon } from '@/icons';
import { Flex, Padding } from '@/ui';
import CustomDate from '@/utils/CustomDate/CustomDate';
import styled from '@emotion/styled';
import IconButton from '../IconButton';
import Typography from '../Typography';
import { DatePickerHeaderProps } from './types';

const Button = styled(IconButton)(() => ({
  transform: 'rotateY(180deg)',
}));

const DatePickerHeader = (props: DatePickerHeaderProps) => {
  const { date } = props;

  return (
    <Padding>
      <Flex margin="0 auto" alignItems={'center'} justifyContent="space-between" width={200}>
        <Button>
          <ArrowRightIcon />
        </Button>
        <Typography>{new CustomDate(date).format(`YYYY년 MM월`)}</Typography>
        <IconButton>
          <ArrowRightIcon />
        </IconButton>
      </Flex>
    </Padding>
  );
};

export default DatePickerHeader;
