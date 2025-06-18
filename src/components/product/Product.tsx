import {Button, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ProductType} from '../../types';
import {calculateHeight, normalize} from '../../utils/size';
import {Rating, Spacer, Text} from '../ui';
import {memo, useContext, useLayoutEffect, useState} from 'react';
import ProductPrice from './ProductPrice';
import Wishlist from './Wishlist';
import {ThemeContext} from '../../context/theme';
import {CartContext} from '../../context/cart';
import {useNavigation} from '@react-navigation/native';
type Props = {data: ProductType};
function Product({data}: Props) {
  const [image, setImage] = useState<string>(data.productImage);
  const theme = useContext(ThemeContext);
  const navigation = useNavigation<any>();
  const {cart, addToCart, incrementCount, decrementCount} = useContext(CartContext);
  // Add cart icon to headers
  useLayoutEffect(() => {
    if (typeof navigation?.setOptions === 'function') {
      navigation.setOptions({
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{marginRight: 16}}>
            <Text style={{fontSize: 22}}>🛒 {cart.length}</Text>
          </TouchableOpacity>
        ),
      });
    }
  }, [cart, navigation]);
  // const user= useContext(UserContext);
  return (
    <View style={styles.container}>
      <Wishlist />
      <Text>{theme}</Text>
      <TouchableOpacity
        style={styles.image}
        onPress={() => navigation.navigate('ProductDetail', {data})}>
        <Image
          source={{uri: image}}
          style={{width: '100%', height: '100%', borderRadius: 4}}
          onError={() => setImage('https://picsum.photos/300')}
        />
      </TouchableOpacity>
      <Spacer />
      <Text style={{textTransform: 'capitalize'}} numberOfLines={1}>
        {data.productName}
      </Text>
      <Spacer size={2} />
      <ProductPrice
        price={data.productPrice}
        salePrice={data.productSalePrice}
      />
      <Rating rating={data.rating} />
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
        {cart.find(i => i.productId === data.productId) ? (
          <>
            <TouchableOpacity
              style={{padding: 8, backgroundColor: '#eee', borderRadius: 4, marginRight: 8}}
              onPress={() => decrementCount(data.productId)}
            >
              <Text style={{fontSize: 18}}>-</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 18, marginHorizontal: 8}}>
              {cart.find(i => i.productId === data.productId)?.count}
            </Text>
            <TouchableOpacity
              style={{padding: 8, backgroundColor: '#eee', borderRadius: 4, marginLeft: 8}}
              onPress={() => incrementCount(data.productId)}
            >
              <Text style={{fontSize: 18}}>+</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Button
            title="Add to Cart"
            onPress={() => addToCart({
              productId: data.productId,
              productName: data.productName,
              productImage: data.productImage,
              productStock: data.productStock,
              productPrice: data.productPrice,
              productSalePrice: data.productSalePrice,
              rating: data.rating,
              count: 1,
            })}
          />
        )}
      </View>
    </View>
  );
}
export default memo(Product, (prevProps, nextProps) => {
  // return Boolean;
  // do not re-render if stock is same
  return prevProps.data.productStock === nextProps.data.productStock;
});

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '47%',
    height: calculateHeight(30),
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 4,
    padding: normalize(5),
    margin: normalize(5),
  },
  image: {
    width: '100%',
    height: '60%',
    padding: normalize(5),
    borderRadius: 4,
  },
});
