import {FlatList, View} from 'react-native';
import Product from '../components/product/Product';
import useProducts from '../hooks/useProducts';
import Categories from './Categories';
import {Spacer} from '../components/ui';

function ProductList() {
  const {filterProducts} = useProducts();
  return (
    <View>
      <Categories />
      <Spacer size={10} />
      <FlatList
        initialNumToRender={10}
        horizontal={false}
        numColumns={2}
        keyExtractor={item => item.productId.toString()}
        data={filterProducts}
        renderItem={({item}) => <Product data={item} />}
      />
    </View>
  );
}
export default ProductList;
