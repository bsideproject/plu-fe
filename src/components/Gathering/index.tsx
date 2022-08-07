import { ArrowRightIcon } from '@/icons';
import { Flex } from '@/ui';
import styled from '@emotion/styled';
import IconButton from '../IconButton';
import Typography from '../Typography';

const Container = styled('div')<{ bb: boolean }>(({ bb }) => ({
  borderBottom: bb ? '1px solid #F1F1F1' : undefined,
  padding: '8px 0',
}));

interface Props {
  label1: string;
  label2?: string;
  bb?: boolean;
}

const Gathering = (props: Props) => {
  const { label1, label2 = '선택', bb = true } = props;

  return (
    <Container bb={bb}>
      <Flex fullWidth justifyContent={'space-between'}>
        <Flex alignItems={'center'} gap={10}>
          <Typography variant="subheadline1" weight="semibold">
            {label1}
          </Typography>
          <Typography color="#999" variant="body1">
            {label2}
          </Typography>
        </Flex>
        <IconButton>
          <ArrowRightIcon />
        </IconButton>
      </Flex>
    </Container>
  );
};

export default Gathering;
