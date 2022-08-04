import { getCars } from '../api/cars';
import { getWinners } from '../api/winner';

const { items: cars, count: carsCount } = await getCars(1);
const { items: winners, count: winnersCount } = await getWinners(1);
const test1 = await getCars(1);
const test2 = await getWinners(1);

console.log(test1);
console.log(test2);

export default {
  carsPage: 1,
  winnersPage: 1,
  cars,
  carsCount,
  winners,
  winnersCount,
  view: 'garage',
  sortBy: '',
  sortOrder: '',
};
