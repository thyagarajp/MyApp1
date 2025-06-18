import {Button, Share, View} from 'react-native';
import {Text} from '../components/ui';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {useCallback, useEffect} from 'react';

export default function ProductDetail() {
  const route = useRoute();
  // instead of useEffect, useFocusEffect to run code when the screen is focused
  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      console.log('Product Detail Screen is focused');
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('Product Detail Screen is unfocused');
      };
    }, []),
  );

  useEffect(() => {
    console.log('Product Detail Route Params:', route.params);
  }, [route.params]);

  return (
    <View>
      <Text size={20}>Product Detail Screen</Text>
      <Text size={30}>Product ID: {JSON.stringify(route.params)}</Text>
      <Button
        title="Share Product"
        onPress={() =>
          Share.share({title: 'Product Selected', message: 'some item i liked'})
        }
      />
      {/* Add your product detail components here */}
    </View>
  );
}
