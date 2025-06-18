import React, {useState, useRef} from 'react';
import {TextInput, View} from 'react-native';
import ProductList from '../containers/ProductList';
import {normalize} from '../utils/size';

export default function Products() {
  const [search, setSearch] = useState('');
  const inputRef = useRef<TextInput>(null);

  const handleKeyPress = (e: any) => {
    if (e.nativeEvent.key === 'Tab') {
      inputRef.current?.blur();
    }
  };

  return (
    <View style={{flex: 1}}>
      <TextInput
        ref={inputRef}
        placeholder="Search Products"
        value={search}
        onChangeText={setSearch}
        onKeyPress={handleKeyPress}
        style={{
          borderRadius: 4,
          borderWidth: 1,
          borderColor: 'gray',
          fontSize: normalize(14),
          padding: normalize(20),
        }}
      />
      <ProductList search={search} />
    </View>
  );
}
