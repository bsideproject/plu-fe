import dayjs from 'dayjs';
import { ManipulateType, OpUnitType } from 'dayjs/esm';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(isSameOrBefore);
dayjs.extend(weekOfYear);

class CustomDate {
  private readonly _date = new Date();

  constructor(date?: Date) {
    if (date) {
      this._date = date;
    }
  }

  private get dayjsObject() {
    return dayjs(this._date);
  }

  public get getDateObject() {
    return this._date;
  }

  public get year() {
    return this.dayjsObject.year();
  }

  public get month() {
    return this.dayjsObject.month();
  }

  public get date() {
    return this.dayjsObject.date();
  }

  public get hour() {
    return this.dayjsObject.hour();
  }

  public get minute() {
    return this.dayjsObject.minute();
  }

  public get second() {
    return this.dayjsObject.second();
  }

  public get week() {
    return this.dayjsObject.week();
  }

  public get day() {
    return this.dayjsObject.day();
  }

  public setYear(year: number) {
    return new CustomDate(this.dayjsObject.set('year', year).toDate());
  }

  public setMonth(month: number) {
    return new CustomDate(this.dayjsObject.set('month', month).toDate());
  }

  public setDay(day: number) {
    return new CustomDate(this.dayjsObject.set('day', day).toDate());
  }

  public setDate(date: number) {
    return new CustomDate(this.dayjsObject.set('date', date).toDate());
  }

  public setHour(hour: number) {
    return new CustomDate(this.dayjsObject.set('hour', hour).toDate());
  }

  public setMinute(minute: number) {
    return new CustomDate(this.dayjsObject.set('minute', minute).toDate());
  }

  public setSecond(second: number) {
    return new CustomDate(this.dayjsObject.set('second', second).toDate());
  }

  public startOf(unit: OpUnitType) {
    return new CustomDate(this.dayjsObject.startOf(unit).toDate());
  }

  public endOf(unit: OpUnitType) {
    return new CustomDate(this.dayjsObject.endOf(unit).toDate());
  }

  public add(value: number, unit?: ManipulateType) {
    return new CustomDate(this.dayjsObject.add(value, unit).toDate());
  }

  public subtract(value: number, unit?: ManipulateType) {
    return new CustomDate(this.dayjsObject.subtract(value, unit).toDate());
  }

  public isSameOrBefore(compare: CustomDate, unit?: OpUnitType) {
    return this.dayjsObject.isSameOrBefore(compare.getDateObject, unit);
  }

  public format(_format: string) {
    return this.dayjsObject.format(_format);
  }
}

export default CustomDate;
