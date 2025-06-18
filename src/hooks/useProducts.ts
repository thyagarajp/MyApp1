import {useEffect, useMemo, useState} from 'react';
import {getProducts} from '../services/ProductService';
import {ProductType} from '../types';

type SortOrder = 'none' | 'asc' | 'desc';

function useProducts() {
  const [filter, setFilter] = useState<number>(4);
  const [search, setSearch] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('none');
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
    if (sortOrder === 'asc') {
      result = [...result].sort((a, b) => Number(a.productPrice) - Number(b.productPrice));
    } else if (sortOrder === 'desc') {
      result = [...result].sort((a, b) => Number(b.productPrice) - Number(a.productPrice));
    }
    return result;
  }, [plist, filter, search, sortOrder]);

  useEffect(() => {
    getData();
  }, []);

  return {plist, filteredProducts, setSearch, setFilter, sortOrder, setSortOrder};
}
export default useProducts;
