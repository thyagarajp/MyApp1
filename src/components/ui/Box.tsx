import {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

export default function Box({children}: PropsWithChildren) {
  return <View style={styles.box}>{children}</View>;
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#3dc6f5',
    borderRadius: 10,
    padding: 10,
  },
});
