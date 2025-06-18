import {useState} from 'react';
import {Switch} from 'react-native';
import Storage from '../../utils/storage';

type Props = {changeTheme: (theme: 'light' | 'dark') => void};
export default function ThemeSwitch({changeTheme}: Props) {
  const [toggle, setToggle] = useState(false);
  return (
    <Switch
      value={toggle}
      onChange={() => {
        changeTheme(toggle ? 'light' : 'dark');
        Storage.storeData('theme', toggle ? 'light' : 'dark');
        setToggle(!toggle);
      }}
    />
  );
}
