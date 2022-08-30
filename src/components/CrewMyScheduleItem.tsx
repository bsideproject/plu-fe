import { GpsIcon, PersonIcon } from '@/icons';
import { Flex, FlexItem } from '@/ui';
import styled from '@emotion/styled';
import Chip from './Chip';
import Typography from './Typography';

const ImageItem = styled('div')<{ image: string }>(({ image }) => ({
  width: '100%',
  height: 0,
  paddingBottom: '60%',
  backgroundImage: `url(${image})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: 8,
}));

// TODO:
// Props로 정보 받아서 뿌려주어야 함
const CrewMyScheduleItem = () => {
  return (
    <FlexItem
      style={{
        padding: 16,
        minWidth: 'fit-content',
        background: '#fff',
        boxShadow: '0px 3px 10px rgba(0,0,0,0.15)',
        borderRadius: 10,
      }}
    >
      <Flex direction="column">
        <FlexItem style={{ marginBottom: 20 }}>
          <Flex justifyContent={'space-between'}>
            <FlexItem>
              <Typography>22.08.04 (목) 오후 7:00</Typography>
            </FlexItem>
            <FlexItem>
              <Chip color="red" text="D-3" />
              {/* <Typography>D-3</Typography> */}
            </FlexItem>
          </Flex>
        </FlexItem>

        <FlexItem>
          <Flex gap={10}>
            <FlexItem>
              <ImageItem style={{ width: 100 }} image={''} />
            </FlexItem>
            <FlexItem>
              <Flex fullHeight justifyContent={'space-between'} direction="column">
                <FlexItem>
                  <Typography color={'#999'} variant="caption">
                    크루명
                  </Typography>
                </FlexItem>
                <FlexItem>
                  <Typography>플로깅하고 치킨먹고</Typography>
                </FlexItem>
                <FlexItem>
                  <Flex gap={5}>
                    <Flex gap={3} alignItems="center">
                      <GpsIcon />
                      <Typography color="#666666" variant="caption">
                        잠실한강공원
                      </Typography>
                    </Flex>
                    <Flex gap={3} alignItems="center">
                      <PersonIcon />
                      <Typography color="#666666" variant="caption">
                        확정인원 10/10
                      </Typography>
                    </Flex>
                  </Flex>
                </FlexItem>
              </Flex>
            </FlexItem>
          </Flex>
        </FlexItem>
      </Flex>
    </FlexItem>
  );
};

export default CrewMyScheduleItem;
