import IconButton from '@/components/IconButton';
import Typography from '@/components/Typography';
import RemoveIcon from '@/icons/RemoveIcon';
import { Flex, FlexItem } from '@/ui';
import styled from '@emotion/styled';

const Container = styled(FlexItem)(() => ({
  borderRadius: 8,
  border: '1px solid #19C885',
  padding: 6,
}));

interface Props {
  text: string;
  onRemove: () => void;
}

const LocatinoChip = (props: Props) => {
  const { text, onRemove } = props;

  return (
    <Container>
      <Flex alignItems={'center'} justifyContent="space-between">
        <Typography color="#19C885">{text}</Typography>
        <IconButton onClick={onRemove}>
          <RemoveIcon />
        </IconButton>
      </Flex>
    </Container>
  );
};

export default LocatinoChip;
