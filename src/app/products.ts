export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const products = [
  {
    id: 1,
    name: 'School of Computing',
    price: 799,
    description: 'Photo taken by Creative Pixel',
    imageUrl: 'assets/Soc.jpg',
  },
  {
    id: 2,
    name: 'Converse',
    price: 699,
    description: 'Photo taken by F-7 Photography',
    imageUrl: 'assets/F-7.jpg',
  },
  {
    id: 3,
    name: 'University Days',
    price: 299,
    description: 'Photo taken by Holy Angel University Council',
    imageUrl: 'assets/usc.jpg',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
