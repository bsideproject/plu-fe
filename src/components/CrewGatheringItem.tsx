import { GpsIcon, PersonIcon } from '@/icons';
import { Flex, FlexItem, MB20, Padding } from '@/ui';
import CustomDate from '@/utils/CustomDate/CustomDate';
import styled from '@emotion/styled';
import Typography from './Typography';

const ImageItem = styled('div')<{ image: string }>(({ image }) => ({
  width: '30vw',
  height: '100%',
  backgroundImage: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: 8,
}));

// TODO:
// Props로 정보 받아서 뿌려주어야 함
const CrewGatheringItem = () => {
  return (
    <MB20>
      <Flex direction="column">
        <FlexItem>
          <Padding>
            <Typography>{new CustomDate().format('YY.MM.DD (CALD)')}</Typography>
          </Padding>
        </FlexItem>

        <Padding>
          <Flex gap={10}>
            <FlexItem>
              <ImageItem image="" />
            </FlexItem>
            <FlexItem>
              <Flex direction="column" gap={15}>
                <FlexItem>
                  <Flex alignItems={'center'} gap={10}>
                    <GpsIcon />
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
            </FlexItem>
          </Flex>
        </Padding>
      </Flex>
    </MB20>
  );
};

export default CrewGatheringItem;
