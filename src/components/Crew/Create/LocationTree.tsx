import Typography from '@/components/Typography';
import { Location } from '@/pages/crew/create';
import { Flex, FlexItem } from '@/ui';
import styled from '@emotion/styled';
import { useState } from 'react';

type City = '서울' | '경기' | '인천' | '강원' | '충남' | '충북' | '전남' | '전북' | '경남' | '경북';

type LocationData = {
  [key in City]: string[];
};

const LOCATION_DATA: LocationData = {
  서울: [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '강남구1',
    '강동구1',
    '강북구1',
    '강서구1',
    '관악구1',
    '강남구2',
    '강동구2',
    '강북구2',
    '강서구2',
    '관악구2',
  ],
  경기: [
    '강남구',
    '강동asdf구',
    '강북구',
    '강서구',
    '관악asdf구',
    '강남구1',
    '강동구1',
    '강북asdf구1',
    '강서구1',
    '관악구1',
    '강남asdf구2',
    '강동구2',
    '강북구2',
    '강서구2',
    '관악구2',
  ],
  인천: [
    '강남구',
    '강asdf동구',
    '강북구',
    '강서구',
    '관악구',
    '강asdf남구1',
    '강동구1',
    '강북구1',
    '강서구1',
    '관asdf악구1',
    '강남구2',
    '강동구2',
    '강북구2',
    '강서구2',
    '관악구2',
  ],
  강원: [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '강남구1',
    '강동구1',
    '강북구1',
    '강서구1',
    '관악구1',
    '강남구2',
    '강동구2',
    '강북구2',
    '강서구2',
    '관악구2',
  ],
  충남: [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '강남구1',
    '강동구1',
    '강북구1',
    '강서구1',
    '관악구1',
    '강남구2',
    '강동구2',
    '강북구2',
    '강서구2',
    '관악구2',
  ],
  충북: [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '강남구1',
    '강동구1',
    '강북구1',
    '강서구1',
    '관악구1',
    '강남구2',
    '강동구2',
    '강북구2',
    '강서구2',
    '관악구2',
  ],
  전남: [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '강남구1',
    '강동구1',
    '강북구1',
    '강서구1',
    '관악구1',
    '강남구2',
    '강동구2',
    '강북구2',
    '강서구2',
    '관악구2',
  ],
  전북: [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '강남구1',
    '강동구1',
    '강북구1',
    '강서구1',
    '관악구1',
    '강남구2',
    '강동구2',
    '강북구2',
    '강서구2',
    '관악구2',
  ],
  경남: [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '강남구1',
    '강동구1',
    '강북구1',
    '강서구1',
    '관악구1',
    '강남구2',
    '강동구2',
    '강북구2',
    '강서구2',
    '관악구2',
  ],
  경북: [
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '강남구1',
    '강동구1',
    '강북구1',
    '강서구1',
    '관악구1',
    '강남구2',
    '강동구2',
    '강북구2',
    '강서구2',
    '관악구2',
  ],
};

const Container = styled(Flex)(() => ({
  borderTop: '1px solid #F5F5F5',
}));

const CityItem = styled(FlexItem)<{ selected?: boolean }>(({ selected = false }) => ({
  backgroundColor: selected ? '#fff' : '#F5F5F5',
  padding: 16,
}));

const DistrictItem = styled(FlexItem)<{ selected?: boolean }>(({ selected = false }) => ({
  color: selected ? '#19C885' : '#999',
  backgroundColor: '#fff',
  padding: 16,
}));

interface Props {
  location: Location[];
  onClick: (location: Location) => void;
}

const LocationTree = (props: Props) => {
  const { location, onClick } = props;

  const fullLocation = location.map(({ city, district }) => `${city}-${district}`);

  const [city, setCity] = useState<City>('서울');

  return (
    <Container>
      <FlexItem>
        {Object.keys(LOCATION_DATA).map((__city) => {
          const _city = __city as City;

          return (
            <CityItem selected={city === _city} onClick={() => setCity(_city)} key={_city}>
              <Flex>
                <FlexItem width={100}>
                  <Typography color="#999" textAlign="center" component="p">
                    {_city}
                  </Typography>
                </FlexItem>
              </Flex>
            </CityItem>
          );
        })}
      </FlexItem>
      <FlexItem grow={1}>
        <DistrictItem>
          <Typography component="p">{city} 전체</Typography>
        </DistrictItem>
        {LOCATION_DATA[city].map((district) => {
          return (
            <DistrictItem
              selected={fullLocation.includes(`${city}-${district}`)}
              onClick={() => {
                onClick({
                  city,
                  district,
                });
              }}
              key={district}
            >
              <Typography component="p">{district}</Typography>
            </DistrictItem>
          );
        })}
      </FlexItem>
    </Container>
  );
};

export default LocationTree;
