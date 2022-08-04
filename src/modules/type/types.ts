export type CarWithoutId = {
  name: string;
  color: string;
};

export type Car = {
  name: string;
  color: string;
  id: number;
};

export type Cars = {
  items: Car[];
  count: string | null;
};

export type Winner = {
  id: number;
  time: number;
  wins: number;
};
