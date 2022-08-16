import { PersonIcon } from '@/icons';
import { Flex, FlexItem, MB20, Padding } from '@/ui';
import styled from '@emotion/styled';
import Typography from './Typography';

const ImageItem = styled('div')<{ image: string }>(({ image }) => ({
  width: '100%',
  height: '30vh',
  backgroundImage: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: 8,
}));

// TODO:
// Props로 정보 받아서 뿌려주어야 함
const CrewMainItem = () => {
  return (
    <MB20>
      <Flex direction="column">
        <FlexItem>
          <Padding>
            <ImageItem image="" />
          </Padding>
        </FlexItem>
        <Padding>
          <Flex direction="column" gap={10}>
            <FlexItem>
              <Flex alignItems={'center'} gap={10}>
                <Typography>서울숨 야간 플로깅</Typography>
              </Flex>
            </FlexItem>
            <FlexItem>
              <Flex alignItems={'center'} gap={10}>
                <PersonIcon />
                <Typography>9/9</Typography>
                <Typography>서울</Typography>
              </Flex>
            </FlexItem>
          </Flex>
        </Padding>
      </Flex>
    </MB20>
  );
};

export default CrewMainItem;
