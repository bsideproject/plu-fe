import { DatePicker } from '@/components';
import CreateGathering_Main from '@/components/Crew/Gathering/CreateGathering_Main';
import CreateGathering_Place from '@/components/Crew/Gathering/CreateGathering_Place';
import Dialog from '@/components/Dialog';
import TimePicker from '@/components/TimePicker';
import CustomDate from '@/utils/CustomDate/CustomDate';
import { ChangeEvent, useEffect, useState } from 'react';

const label = 'CrewCreateGathering';

const MAX_COUNT = 20;

interface Dialog {
  date: { open: boolean };
  time: { open: boolean };
}

export type DialogType = keyof Dialog;

const DIALOG: Dialog = {
  date: { open: false },
  time: { open: false },
};

export type Place = {
  lat: number;
  lon: number;
  name: string;
  address: string;
};

const CrewCreateGathering = () => {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [place, setPlace] = useState<Place>({
    lat: 123.123,
    lon: 123.123,
    name: '서울',
    address: '서울 어딘가',
  });

  const [dialog, setDialog] = useState(DIALOG);

  const [tabIndex, setTabIndex] = useState<0 | 1>(0);

  const onChangeName = (e: ChangeEvent<HTMLTextAreaElement>) => setName(e.currentTarget.value);

  const onChangeCount = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const number = Number(e.currentTarget.value.replace(/[^0-9]/g, ''));

    if (number < 1 || number > MAX_COUNT) return;

    setCount(number);
  };

  const onCountDown = () => setCount((prev) => (prev <= 1 ? prev : prev - 1));

  const onCountUp = () => setCount((prev) => (prev >= MAX_COUNT ? prev : prev + 1));

  const onChangeDate = (date: Date) => setDate(date);

  const onOpenDialog = (type: DialogType) => () => {
    setDialog((prev) => ({ ...prev, [type]: { open: true } }));
  };

  const onCloseDialog = (type: DialogType) => () => {
    setDialog((prev) => ({ ...prev, [type]: { open: false } }));
  };

  const onNext = () => setTabIndex(1);

  const onPrev = () => setTabIndex(0);

  const onChangePlace = (newPlace: Place) => setPlace(newPlace);

  useEffect(() => {
    const dObject = new CustomDate();
    const minute = dObject.minute;

    if (minute % 10) {
      const newMinute = (parseInt(String(minute / 10)) + 1) * 10;
      const needAddMinute = newMinute - minute;
      setDate(dObject.add(needAddMinute, 'minute').getDateObject);
    }
  }, []);

  return (
    <>
      {tabIndex === 0 && (
        <CreateGathering_Main
          date={date}
          label={label}
          name={name}
          count={count}
          place={place}
          onChangeName={onChangeName}
          onChangeCount={onChangeCount}
          onCountDown={onCountDown}
          onCountUp={onCountUp}
          onOpenDialog={onOpenDialog}
          onNext={onNext}
        />
      )}

      {tabIndex === 1 && <CreateGathering_Place place={place} onChangePlace={onChangePlace} onPrev={onPrev} />}

      {dialog.date.open && (
        <Dialog open={dialog.date.open} onClose={onCloseDialog('date')}>
          <DatePicker
            date={date}
            onChange={(date) => {
              window.console.log('dmdkr?');
              onChangeDate(date);
              onCloseDialog('date')();
            }}
          />
        </Dialog>
      )}

      {dialog.time.open && (
        <Dialog open={dialog.time.open} onClose={onCloseDialog('time')}>
          <TimePicker
            value={date}
            onChange={(date) => {
              onChangeDate(date);
              onCloseDialog('time')();
            }}
          />
        </Dialog>
      )}
    </>
  );
};

export default CrewCreateGathering;
