import CustomDate from '@/utils/CustomDate/CustomDate';

// --------------------------------------- calendar
const DAYS = {
  SUN: 0,
  MON: 1,
  TUE: 2,
  WEN: 3,
  THU: 4,
  FRI: 5,
  SAT: 6,
} as const;

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

const MONTHS = {
  Jan: 1 - 1,
  Feb: 2 - 1,
  Mar: 3 - 1,
  Apr: 4 - 1,
  May: 5 - 1,
  Jun: 6 - 1,
  Jul: 7 - 1,
  Aug: 8 - 1,
  Sep: 9 - 1,
  Oct: 10 - 1,
  Nov: 11 - 1,
  Dec: 12 - 1,
} as const;

export { DAYS, getDayRange, yearColsCount, yearItemCount, generatorYears, MONTHS };
