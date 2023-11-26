export interface Item {
  id: number;
  name: string;
  description: string;
};

const allReports: Item[] = [
  { id: 1, name: 'Report 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, name: 'Report 2', description: 'Donec sit amet varius metus, vel congue ligula.' },
  { id: 3, name: 'Report 3', description: 'Donec placerat commodo nunc ut bibendum.' },
  { id: 4, name: 'Report 4', description: 'Sed fermentum efficitur nunc.' },
];

export { allReports };
