import { Button, Typography } from '@/components';
import { Location, MAX_LOCATION } from '@/pages/crew/create';
import { Flex, MainLayout, MB20, Padding } from '@/ui';
import CommomHeader from './CommonHeader';
import LocatinoChip from './LocationChip';
import LocationTree from './LocationTree';

interface Props {
  location: Location[];
  onChangeLocation: (location: Location[]) => void;
  onClick: () => void;
}

const CreateCrew_Location = (props: Props) => {
  const { location, onChangeLocation, onClick } = props;

  return (
    <Flex label="CreateCrew" direction="column" justifyContent="space-between" fullHeight>
      <CommomHeader />
      <MB20>
        <MainLayout inner>
          <Flex label="CreateCrew-CrewInputContainer" direction="column" gap={14}>
            <Typography component="p" variant="subheadline1" weight="semibold">
              주요 활동 지역
            </Typography>
            <Typography component="p" variant="subheadline1" weight="semibold" color="gray">
              (3개 지역 선택 가능)
            </Typography>
          </Flex>
        </MainLayout>
      </MB20>

      <Padding noLRPadding>
        <Flex direction="column" gap={14}>
          <LocationTree
            location={location}
            onClick={({ city, district }) => {
              const index = location.findIndex((el) => el.city === city && el.district === district);
              if (index !== -1) {
                const newLocation = location.filter((_, _index) => index !== _index);
                onChangeLocation(newLocation);
              } else {
                if (location.length === MAX_LOCATION) {
                  return;
                } else {
                  onChangeLocation([...location, { city, district }]);
                }
              }
            }}
          />
        </Flex>
      </Padding>
      <div>
        <MB20>
          <MainLayout inner>
            <Flex gap={10}>
              {!location.length && (
                <div style={{ visibility: 'hidden' }}>
                  <LocatinoChip />
                </div>
              )}
              {location.map(({ city, district }) => {
                const text = `${city} ${district}`;
                return (
                  <LocatinoChip
                    key={text}
                    text={text}
                    onRemove={() => {
                      const newLocation = location.filter(
                        (item) => !(item.city === city && item.district === district)
                      );
                      onChangeLocation(newLocation);
                    }}
                  />
                );
              })}
            </Flex>
          </MainLayout>
        </MB20>
        <MainLayout inner style={{ paddingBottom: 16 }}>
          <Button fullWidth onClick={onClick}>
            확인
          </Button>
        </MainLayout>
      </div>
    </Flex>
  );
};

export default CreateCrew_Location;
