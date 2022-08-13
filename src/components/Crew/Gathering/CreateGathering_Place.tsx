import NavigationBar from '@/components/NavigationBar';
import TextField from '@/components/TextField';
import Typography from '@/components/Typography';
import { ArrowLeftIcon, GpsIcon } from '@/icons';
import { Place } from '@/pages/crew/create_gathering';
import { Flex, FlexItem, MainLayout, MB20, Padding } from '@/ui';
import { ChangeEvent } from 'react';

interface Props {
  place: Place;
  onChangePlace: (place: Place) => void;
  onPrev: () => void;
}

const DUMMY = [
  { name: '트래비커피111', address: '서울 11', lon: 123123, lat: 123123 },
  { name: '트래비커피222', address: '서울 22', lon: 123123, lat: 123123 },
  { name: '트래비커피333', address: '서울 33', lon: 123123, lat: 123123 },
];

const CreateGathering_Place = (props: Props) => {
  const { onPrev, place, onChangePlace } = props;

  const onChangeName = (e: ChangeEvent<HTMLTextAreaElement>) => onChangePlace({ ...place, name: e.target.value });

  return (
    <MainLayout inner>
      <Flex label={'label'} direction="column" justifyContent="space-between" fullHeight>
        <div>
          <MB20>
            <NavigationBar onClickStartIcon={onPrev} startIcon={<ArrowLeftIcon />} title="장소" />
          </MB20>
          <MB20>
            <TextField value={place.name} onChange={onChangeName} fullWidth label="장소" />
          </MB20>
          <MB20>
            <Flex direction="column">
              {DUMMY.map((item) => {
                return (
                  <FlexItem
                    key={item.address}
                    onClick={() => {
                      onChangePlace(item);
                      onPrev();
                    }}
                  >
                    <Padding>
                      <Flex gap={30} alignItems="center">
                        <GpsIcon color="#CCCCCC" />
                        <FlexItem>
                          <Flex gap={10} direction="column">
                            <Typography component="p">{item.name}</Typography>
                            <Typography component="p">{item.address}</Typography>
                          </Flex>
                        </FlexItem>
                      </Flex>
                    </Padding>
                  </FlexItem>
                );
              })}
            </Flex>
          </MB20>
        </div>
      </Flex>
    </MainLayout>
  );
};

export default CreateGathering_Place;
