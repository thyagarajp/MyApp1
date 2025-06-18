import {Button, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ProductType} from '../../types';
import {calculateHeight, normalize} from '../../utils/size';
import {Rating, Spacer, Text} from '../ui';
import {memo, useContext, useState} from 'react';
import ProductPrice from './ProductPrice';
import Wishlist from './Wishlist';
import {ThemeContext} from '../../context';
import {useNavigation} from '@react-navigation/native';
type Props = {data: ProductType};
function Product({data}: Props) {
  const [image, setImage] = useState<string>(data.productImage);
  const theme = useContext(ThemeContext);
  const {navigate} = useNavigation();
  // const user= useContext(UserContext);
  return (
    <View style={styles.container}>
      <Wishlist />
      <Text>{theme}</Text>
      <TouchableOpacity
        style={styles.image}
        onPress={() => navigate('ProductDetail', {data})}>
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
      <Button title="Add to Cart" />
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
