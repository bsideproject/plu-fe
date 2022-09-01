import { ToastConfirmIcon, ToastErrorIcon } from '@/icons';
import { Flex, FlexItem } from '@/ui';
import styled from '@emotion/styled';
import Typography from './Typography';

const Container = styled(Flex)(() => ({
  boxShadow: '2px 4px 10px rgba(0, 0, 0, 0.25)',
  borderRadius: 22,
  backgroundColor: '#333',
  padding: '12px 60px',
  width: 'fit-content',
  position: 'fixed',
  bottom: 20,
  right: 20,
}));

interface Props {
  type?: 'basic' | 'confirm' | 'error';
  text?: string;
}

const Toast = (props: Props) => {
  const { type = 'basic', text = '' } = props;

  return (
    <Container justifyContent={'center'} alignItems={'center'} gap={10}>
      {type === 'confirm' && (
        <FlexItem>
          <ToastConfirmIcon />
        </FlexItem>
      )}
      {type === 'error' && (
        <FlexItem>
          <ToastErrorIcon />
        </FlexItem>
      )}
      <FlexItem style={{ marginBottom: type === 'basic' ? undefined : 3 }}>
        <Typography component="p" variant="body1" color="white">
          {text}
        </Typography>
      </FlexItem>
    </Container>
  );
};

export default Toast;
