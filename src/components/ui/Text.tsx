import {Text, TextProps, useColorScheme} from 'react-native';
import {scale} from '../../utils/size';
type Props = {size?: number; color?: string} & TextProps;

function UiText({size, color, style, children, ...rest}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const fontSize = size || 14;
  const textStyle = {
    color: color ? color : isDarkMode ? 'white' : 'black',
    fontSize: scale(fontSize),
  };
  return (
    <Text style={[style, textStyle]} {...rest}>
      {children}
    </Text>
  );
}
export default UiText;
