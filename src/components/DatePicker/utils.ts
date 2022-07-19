import CustomDate from '@/utils/CustomDate/CustomDate';

// --------------------------------------- calendar
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

// --------------------------------------- year
const yearRowsCount = 5;
const yearColsCount = 4;
const yearItemCount = yearRowsCount * yearColsCount;

const generatorYears = (value: Date): number[] => {
  const dObject = new CustomDate(value);
  const year = dObject.startOf('year').year;
  const temp = Math.floor((year % 1000) / yearItemCount);
  const startYear = Math.floor(year / 1000) * 1000 + yearItemCount * temp;

  const result = new Array(yearItemCount).fill(0).map((_, index) => {
    return startYear + index;
  });

  return result;
};

// --------------------------------------- month
const JAN_TO_DEC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export { zeroTo6, getDayRange, yearColsCount, yearItemCount, generatorYears, JAN_TO_DEC };
