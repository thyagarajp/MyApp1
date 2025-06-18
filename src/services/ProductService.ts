import {ProductType} from '../types';

export const getProducts = () => {
  // bit.ly/2Ee7HOL
  const url =
    'https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json';
  return fetch(url).then(res => res.json() as Promise<ProductType[]>);
};
