import {FlatList, Image, View} from 'react-native';
import {Text} from '../components/ui';
import {normalize} from '../utils/size';

export default function Categories() {
  const data = [
    {
      text: 'Cat 1',
    },
    {
      text: 'Cat 2',
    },
    {
      text: 'Cat 3',
    },
    {
      text: 'Cat 4',
    },
    {
      text: 'Cat 5',
    },
    {
      text: 'Cat 6',
    },
    {
      text: 'Cat 7',
    },
  ];
  const catItem = ({item}: any) => (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        height: normalize(100),
      }}>
      <Image
        source={{uri: 'https://picsum.photos/100'}}
        style={{
          width: normalize(50),
          height: normalize(50),
          margin: normalize(10),
          borderRadius: normalize(25),
        }}
      />
      <Text color="gray">{item.text}</Text>
    </View>
  );
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={item => item.text}
      showsHorizontalScrollIndicator={false}
      renderItem={catItem}
    />
  );
}
