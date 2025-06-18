import {TextInput, View} from 'react-native';
import ProductList from '../containers/ProductList';
import {normalize} from '../utils/size';

export default function Products() {
  return (
    <View style={{flex: 1}}>
      <TextInput
        placeholder="Search Products"
        secureTextEntry
        style={{
          borderRadius: 4,
          borderWidth: 1,
          borderColor: 'gray',
          fontSize: normalize(14),
          padding: normalize(20),
        }}
      />
      <ProductList />
    </View>
  );
}
