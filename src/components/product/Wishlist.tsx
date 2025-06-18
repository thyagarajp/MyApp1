import {TouchableOpacity} from 'react-native';
import {Text} from '../ui';
import {useState} from 'react';

export default function Wishlist() {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => setSelected(!selected)}
      style={{
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#eee',
        position: 'absolute',
        top: 10,
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
      }}>
      <Text color={selected ? 'red' : 'black'}>♥︎</Text>
    </TouchableOpacity>
  );
}
