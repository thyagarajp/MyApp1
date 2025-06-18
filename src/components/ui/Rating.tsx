import {View} from 'react-native';
import Text from './Text';

export default function Rating({
  rating,
  size = 14,
}: {
  rating: number;
  size?: number;
}) {
  const stars = Array.from({length: 5}, (_, index) => {
    const starRating = index + 1;
    return (
      <Text
        key={index}
        size={size}
        color={starRating <= rating ? 'gold' : 'gray'}>
        ★
      </Text>
    );
  });

  return (
    <View
      style={{
        flexDirection: 'row',
        display: 'flex',
        flex: 1,
        borderColor: 'red',
      }}>
      {stars}
    </View>
  );
}
