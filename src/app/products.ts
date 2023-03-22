export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Picture 1',
    price: 799,
    description: 'A large phone with one of the best screens',
    image: 'https://picsum.photos/id/28/4928/3264',
  },
  {
    id: 2,
    name: 'Picture 2',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Picture 3',
    price: 299,
    description: '',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
