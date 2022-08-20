import NavigationBar from '@/components/NavigationBar';
import TextField from '@/components/TextField';
import Typography from '@/components/Typography';
import { ArrowLeftIcon, GpsIcon } from '@/icons';
import { Place } from '@/pages/crew/create_gathering';
import { Flex, FlexItem, MB20, Padding } from '@/ui';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

interface Props {
  place: Place;
  onChangePlace: (place: Place) => void;
  onPrev: () => void;
}

const CreateGathering_Place = (props: Props) => {
  const { onPrev, place, onChangePlace } = props;
  const kakaoMapRef = useRef<HTMLDivElement>(null);
  const kakakoPlaceRef = useRef<any>(null);
  const [placeList, setPlaceList] = useState<Place[]>([]);

  const onChangeName = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChangePlace({ ...place, name: e.target.value });
    searchKeyword(e.target.value);
  };

  useEffect(() => {
    if (window.kakao && kakaoMapRef.current) {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new window.kakao.maps.Map(kakaoMapRef.current, options);
      const ps = new window.kakao.maps.services.Places();

      kakakoPlaceRef.current = ps;

      searchKeyword(place.name);
    }
  }, []);

  const searchKeyword = (keyword: string) => {
    if (kakakoPlaceRef.current) {
      kakakoPlaceRef.current.keywordSearch(keyword, placesSearchCB);
    }
  };

  function placesSearchCB(data, status, pagination) {
    if (status === window.kakao.maps.services.Status.OK) {
      setPlaceList([
        ...data.map((v) => ({
          lat: v.x,
          lon: v.y,
          name: v.place_name,
          address: v.road_address_name,
        })),
      ]);
    }
  }

  return (
    <Flex label={'label'} direction="column" justifyContent="space-between" fullHeight>
      <div ref={kakaoMapRef} style={{ display: 'none' }} />
      <div>
        <MB20>
          <NavigationBar onClickStartIcon={onPrev} startIcon={<ArrowLeftIcon />} title="장소" />
        </MB20>
        <MB20>
          <TextField value={place.name} onChange={onChangeName} fullWidth label="장소" />
        </MB20>
        <MB20>
          <Flex direction="column">
            {placeList.map((place) => {
              return (
                <FlexItem
                  key={`${place.name}${place.address}`}
                  onClick={() => {
                    onChangePlace(place);
                    onPrev();
                  }}
                >
                  <Padding>
                    <Flex gap={30} alignItems="center">
                      <GpsIcon color="#CCCCCC" />
                      <FlexItem>
                        <Flex gap={10} direction="column">
                          <Typography component="p">{place.name}</Typography>
                          <Typography component="p">{place.address}</Typography>
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
  );
};

export default CreateGathering_Place;
