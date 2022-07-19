import CustomDate from '@/utils/CustomDate/CustomDate';

const zeroTo6 = [0, 1, 2, 3, 4, 5, 6];

const getDayRange = (date: Date) => {
  const result: Date[] = [];
  const dObject = new CustomDate(date);

  let start = dObject.startOf('month').startOf('week');
  const end = dObject.endOf('month').endOf('week');

  do {
    result.push(start.getDateObject);
    start = start.add(1, 'day');
  } while (start.isSameOrBefore(end));

  return result;
};

export { zeroTo6, getDayRange };
