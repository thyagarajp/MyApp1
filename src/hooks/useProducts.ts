import {useEffect, useMemo, useState} from 'react';
import {getProducts} from '../services/ProductService';
import {ProductType} from '../types';

function useProducts() {
  const [filter, setFilter] = useState<number>(4);
  const [plist, setPlist] = useState<ProductType[]>([]);
  const getData = async () => {
    try {
      const data = await getProducts();
      setPlist(data); // use immer returned data here in case of deeply nested objects
    } catch (e) {
      console.error('Error fetching products:', e);
    }
  };
  const filterProducts = useMemo(() => {
    if (filter === -1) {
      return plist;
    }
    return plist.filter(item => item.rating >= filter);
  }, [plist, filter]);

  // mounting, updating, and unmounting
  useEffect(() => {
    getData();
  }, []);

  return {plist, filterProducts};
}
export default useProducts;
