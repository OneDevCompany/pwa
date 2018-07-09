import { drop, prop, reduce, sortBy, take } from 'ramda';

export type People = typeof people;

const people = [
  {
    id: '5b3a86b1882c9d5189a6b5dc',
    age: 21,
    name: 'Lela Meyers',
    email: 'lela@email.com',
    occupation: 'Architect',
  },
  {
    id: '5b3a86b143db94f87bb78242',
    age: 36,
    name: 'Ashlee Carlson',
    email: 'ashlee@email.com',
    occupation: 'Civil Engineer',
  },
  {
    id: '5b3a86b17832be06419bc5f2',
    age: 24,
    name: 'Mcmillan Wiley',
    email: 'mcmillan@email.com',
    occupation: 'Lawyer',
  },
  {
    id: '5b3a86b1171d83b128fad479',
    age: 36,
    name: 'Welch Sanders',
    email: 'welch@email.com',
    occupation: 'Civil Engineer',
  },
  {
    id: '5b3a86b1a15ee20ceea441ae',
    age: 38,
    name: 'Sylvia Terrell',
    email: 'sylvia@email.com',
    occupation: 'UX Designer',
  },
  {
    id: '5b3a86b1ab55399a1df97af9',
    age: 32,
    name: 'Brooke Cook',
    email: 'brooke@email.com',
    occupation: 'Tennis Player',
  },
  {
    id: '5b3a86b198be4899c66a4d6f',
    age: 28,
    name: 'Lola Brennan',
    email: 'lola@email.com',
    occupation: 'Motion Graphics Desinger',
  },
  {
    id: '5b3a86b1728c18cce5cd6c54',
    age: 26,
    name: 'Church Talley',
    email: 'church@email.com',
    occupation: 'Soccer Player',
  },
  {
    id: '5b3a86b132220dc18fe77bec',
    age: 26,
    name: 'Sykes Vincent',
    email: 'sykes@email.com',
    occupation: 'Office Assistant',
  },
  {
    id: '5b3a86b11db40306a1be5a50',
    age: 37,
    name: 'Ruby Glass',
    email: 'ruby@email.com',
    occupation: 'Trainee',
  },
  {
    id: '5b3a86b122411ba704787895',
    age: 25,
    name: 'Brandie Hart',
    email: 'brandie@email.com',
    occupation: 'Trainee',
  },
  {
    id: '5b3a86b196911430ca579618',
    age: 25,
    name: 'Marylou Bernard',
    email: 'marylou@email.com',
    occupation: 'CEO',
  },
  {
    id: '5b3a86b1f4b5f17b58305e42',
    age: 32,
    name: 'Frederick Guthrie',
    email: 'frederick@email.com',
    occupation: 'Quality Analyst',
  },
  {
    id: '5b3a86b1f57302d184a10074',
    age: 30,
    name: 'Freda Bryant',
    email: 'freda@email.com',
    occupation: 'System Analyst',
  },
  {
    id: '5b3a86b10e28fbe354e2aba6',
    age: 36,
    name: 'Neal Blair',
    email: 'neal@email.com',
    occupation: 'Web Developer',
  },
  {
    id: '5b3a86b16b6d20baef0c9ac2',
    age: 26,
    name: 'Hutchinson Carrillo',
    email: 'hutchinson@email.com',
    occupation: 'Software Engineer',
  },
  {
    id: '5b3a86b153613f6a80c34e7a',
    age: 20,
    name: 'Pacheco Fitzpatrick',
    email: 'pacheco@email.com',
    occupation: 'Javascript Developer',
  },
  {
    id: '5b3a86b17001bd327fc225bd',
    age: 36,
    name: 'Arnold Paul',
    email: 'arnold@email.com',
    occupation: 'Database Administrator',
  },
  {
    id: '5b3a86b1b9845c420640e929',
    age: 25,
    name: 'Antonia Noel',
    email: 'antonia@email.com',
    occupation: 'Business Manager',
  },
  {
    id: '5b3a86b1ab94d05267b86b75',
    age: 32,
    name: 'Cooley Neal',
    email: 'cooley@email.com',
    occupation: 'Astronomer',
  },
  {
    id: '5b3a86b14950841e3366a82c',
    age: 31,
    name: 'Dickerson Garcia',
    email: 'dickerson@email.com',
    occupation: 'Math Teacher',
  },
  {
    id: '5b3a86b1a8116a5d9ae4c049',
    age: 25,
    name: 'Pierce Ortiz',
    email: 'pierce@email.com',
    occupation: 'English Teacher',
  },
  {
    id: '5b3a86b1cdfcbdea41b1a272',
    age: 35,
    name: 'Lawanda Owens',
    email: 'lawanda@email.com',
    occupation: 'Javascript Developer',
  },
  {
    id: '5b3a86b133af8b16faa5a2d8',
    age: 22,
    name: 'Elena Marsh',
    email: 'elena@email.com',
    occupation: 'Lawyer',
  },
  {
    id: '5b3a86b17d1bd1817b8dd438',
    age: 29,
    name: 'Bradford Mccormick',
    email: 'bradford@email.com',
    occupation: 'Trainee',
  },
];

type Options = {
  take?: number;
  skip?: number;
  sortBy?: string;
  ascending?: 1 | -1;
};

export const getPeople = (options: Options = {}) => {
  let data = !!options.sortBy
    ? sortBy(prop(options.sortBy), people) as any
    : people;

  data = (!!options.sortBy && options.ascending === -1)
    ? reduce((accu, curr) => [curr, ...accu], [], data)
    : data;

  data = !!options.skip
    ? drop(options.skip, data)
    : data;

  data = !!options.take
    ? take(options.take, data)
    : data;

  return new Promise(resolve =>
    setTimeout(() => resolve(data), 1000),
  ) as Promise<People>;
};
