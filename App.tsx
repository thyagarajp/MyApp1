import React, {useEffect} from 'react';

import ProductList from './src/containers/ProductList';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import ThemeSwitch from './src/components/ui/ThemeSwitch';
import {ThemeProvider} from './src/context';
import Storage from './src/utils/storage';
import AppNavigator from './src/Routes';
import {NavigationContainer} from '@react-navigation/native';
import {CartProvider} from './src/context/cart';

function App(): React.JSX.Element {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  useEffect(() => {
    const fetchTheme = async () => {
      const storedTheme = await Storage.getData('theme');
      if (storedTheme) {
        setTheme(storedTheme);
      }
    };
    fetchTheme();
  }, []);

  return (
    <NavigationContainer>
      <CartProvider>
        <ThemeProvider value={theme}>
          <AppNavigator />
        </ThemeProvider>
      </CartProvider>
    </NavigationContainer>
  );
}

export default App;
// flexDirection : row, column, row-reverse, column-reverse
