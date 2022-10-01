export interface Hour {
  from: string;
  to: string;
  days: number[];
}

export interface Restaurant {
  id: number;
  name: string;
  address: string;
  image: string;
  hours: Hour[];
}
