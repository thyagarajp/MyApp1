import {View} from 'react-native';
import ThemeSwitch from '../components/ui/ThemeSwitch';
import {Text} from '../components/ui';

export default function Settings() {
  return (
    <View>
      <Text size={20}>Settings Screen</Text>
      <Text size={30}>This is the settings screen.</Text>
      <ThemeSwitch changeTheme={t => console.log(t)} />
    </View>
  );
}
