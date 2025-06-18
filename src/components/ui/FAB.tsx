import {View} from 'react-native';
import {Text} from '.';

export default function FabButton() {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 40,
        left: 40,
      }}></View>
  );
}
