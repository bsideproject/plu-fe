import { ArrowRightIcon } from '@/icons';
import { Flex } from '@/ui';
import styled from '@emotion/styled';
import IconButton from './IconButton';
import Typography from './Typography';

const Container = styled('div')<{ bb: boolean }>(({ bb }) => ({
  borderBottom: bb ? '1px solid #F1F1F1' : undefined,
  padding: '8px 0',
}));

interface Props {
  label: string;
  text: string;
  bb?: boolean;
  onClick?: () => void;
}

const Gathering = (props: Props) => {
  const { label, text, bb = true, onClick = () => {} } = props;

  return (
    <Container bb={bb}>
      <Flex fullWidth justifyContent={'space-between'}>
        <Flex alignItems={'center'} gap={10}>
          <Typography variant="subheadline1" weight="semibold">
            {label}
          </Typography>
          <Typography color="#999" variant="body1">
            {text ? text : '선택'}
          </Typography>
        </Flex>
        <IconButton onClick={onClick}>
          <ArrowRightIcon />
        </IconButton>
      </Flex>
    </Container>
  );
};

export default Gathering;
