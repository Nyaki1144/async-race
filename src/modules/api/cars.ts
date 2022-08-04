import { Car, Cars, CarWithoutId } from '../type/types';
import { LINK } from './link';

export const getCars = async (page: number, limit = 7): Promise<Cars> => {
  const response = await fetch(`${LINK}/garage?_page=${page}&_limit=${limit}`);

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};

export const getCarByID = async (id: number): Promise<Car> => {
  const response = await fetch(`${LINK}/garage/${id}`);
  return await response.json();
};

export const createCar = async (car: CarWithoutId) =>
  (
    await fetch(`${LINK}/garage/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    })
  ).json();

export const deleteCar = async (id: number) =>
  (
    await fetch(`${LINK}/garage/${id}`, {
      method: 'DELETE',
    })
  ).json();

export const updateCar = async (id: number, body: CarWithoutId) =>
  (
    await fetch(`${LINK}/garage/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const manageEngine = async (id: number, manage: 'started' | 'stopped') =>
  (await fetch(`${LINK}/engine?id=${id}&status=${manage}`)).json();

export const driveStatus = async (id: number) => {
  const res = await fetch(`${LINK}/engine?id=${id}&status=drive`).catch();
  return res.status !== 200 ? { success: false } : { ...(await res.json()) };
};
