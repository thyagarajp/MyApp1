import {FlatList, View} from 'react-native';
import Product from '../components/product/Product';
import useProducts from '../hooks/useProducts';
import Categories from './Categories';
import {Spacer} from '../components/ui';
import React from 'react';

function ProductList({search}: {search: string}) {
  const {filteredProducts, setSearch} = useProducts();
  // Update search term when prop changes
  React.useEffect(() => {
    setSearch(search);
  }, [search, setSearch]);
  return (
    <View>
      <Categories />
      <Spacer size={10} />
      <FlatList
        initialNumToRender={10}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => item.productId.toString()}
        data={filteredProducts}
        renderItem={({item}) => <Product data={item} />}
      />
    </View>
  );
}
export default ProductList;
