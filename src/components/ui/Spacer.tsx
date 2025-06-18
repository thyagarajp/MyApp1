import {View} from 'react-native';
import {normalize} from '../../utils/size';

export default function Spacer({size}: {size?: number}) {
  const sizeValue = size ? normalize(size) : normalize(8);
  return <View style={{height: sizeValue, width: sizeValue}}></View>;
}
