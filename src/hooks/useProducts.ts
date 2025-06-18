import {useEffect, useMemo, useState} from 'react';
import {getProducts} from '../services/ProductService';
import {ProductType} from '../types';

function useProducts() {
  const [filter, setFilter] = useState<number>(4);
  const [search, setSearch] = useState<string>('');
  const [plist, setPlist] = useState<ProductType[]>([]);
  const getData = async () => {
    try {
      const data = await getProducts();
      setPlist(data); // use immer returned data here in case of deeply nested objects
    } catch (e) {
      console.error('Error fetching products:', e);
    }
  };
  const filteredProducts = useMemo(() => {
    let result = plist;
    if (filter !== -1) {
      result = result.filter(item => item.rating >= filter);
    }
    if (search.trim() !== '') {
      result = result.filter(item =>
        item.productName.toLowerCase().includes(search.trim().toLowerCase())
      );
    }
    return result;
  }, [plist, filter, search]);

  useEffect(() => {
    getData();
  }, []);

  return {plist, filteredProducts, setSearch, setFilter};
}
export default useProducts;
