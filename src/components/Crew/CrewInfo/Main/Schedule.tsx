import Button from '@/components/Button';
import Chip from '@/components/Chip';
import Typography from '@/components/Typography';
import { GpsIcon, PersonIcon } from '@/icons';
import { Flex, FlexItem } from '@/ui';
import CustomDate from '@/utils/CustomDate/CustomDate';
import { shouldForwardProp } from '@/utils/emotion';
import styled from '@emotion/styled';

const Container = styled(Flex, {
  shouldForwardProp: shouldForwardProp(['noBorder']),
})<{ noBorder: boolean }>(({ noBorder }) => {
  return {
    borderBottom: !noBorder ? '1px solid #efefef' : undefined,
    paddingBottom: 20,
  };
});

interface Props {
  date: Date;
  totalCount: number;
  currentCount: number;
  onClick: () => void;
  noBorder?: boolean;
}

const Schedule = (props: Props) => {
  const { date, totalCount, currentCount, noBorder = false, onClick } = props;

  return (
    <Container direction="column" gap={20} noBorder={noBorder}>
      <FlexItem>
        <Chip text="모집중" />
      </FlexItem>
      <FlexItem>
        <Flex alignItems={'center'} justifyContent="space-between">
          <Typography weight="semibold" variant="subheadline1">
            {new CustomDate(date).format('YY.MM.DD A hh:mm')}
          </Typography>
          <Button width={60} onClick={onClick}>
            신청
          </Button>
        </Flex>
      </FlexItem>
      <FlexItem>
        <Flex gap={10} alignItems="center">
          <GpsIcon />
          <Typography>서울숨 야간 플로깅</Typography>
        </Flex>
      </FlexItem>
      <FlexItem>
        <Flex gap={10} alignItems="center">
          <PersonIcon />
          <Typography>확정인원 {`${currentCount}/${totalCount}`}</Typography>
        </Flex>
      </FlexItem>
    </Container>
  );
};

export default Schedule;
