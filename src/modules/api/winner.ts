import { Winner } from '../type/types';
import { getCarByID } from './cars';
import { LINK } from './link';

export const getWinners = async (page: number, limit = 10, sort?: 'id' | 'wins' | 'time', order?: 'ASC' | 'DESC') => {
  const response = await fetch(`${LINK}/winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);

  const items = await response.json();

  return {
    items: await Promise.all(
      items.map(async (winner: Winner) => ({
        ...winner,
        car: await getCarByID(winner.id),
      }))
    ),
    count: response.headers.get('X-Total-Count'),
  };
};

export const getWinner = async (id: number) => (await fetch(`${LINK}/winners/${id}`)).json();

export const getWinnerStatus = async (id: number): Promise<number> => (await fetch(`${LINK}/winners/${id}`)).status;

export const createWinner = async (body: Winner) =>
  (
    await fetch(`${LINK}/winners`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const deleteWinner = async (id: number) => (await fetch(`${LINK}/winners/${id}`, { method: 'DELETE' })).json();

export const updateWinner = async (id: number, body: Winner) =>
  (
    await fetch(`${LINK}/winners/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const saveWinner = async ({ id, time }: { id: number; time: number }) => {
  const winnerStatus = await getWinnerStatus(id);

  if (winnerStatus === 404) {
    await createWinner({
      id,
      wins: 1,
      time,
    });
  } else {
    const winner = await getWinner(id);
    await updateWinner(id, {
      id,
      wins: winner.wins + 1,
      time: time < winner.time ? time : winner.time,
    });
  }
};
