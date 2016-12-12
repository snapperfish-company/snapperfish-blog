import * as moment from 'moment';

moment.locale('en-GB');

export function formatted(date: string): string {
  return moment(date).format('LL');
}
