import {Dimensions, PixelRatio} from 'react-native';
const guidelineBaseWidth = 375; // (375) Base width for scaling
const {width, height} = Dimensions.get('window');

// dimensions scaling
export const calculateHeight = (size: number) => {
  return height * (size / 100);
};
export const calculateWidth = (size: number) => {
  return width * (size / 100);
};
// text & dimensions scaling
export const normalize = (size: number) => {
  const newSize = (width / guidelineBaseWidth) * size;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const scaleFont = (size: number) => {
  const fontScale = PixelRatio.getFontScale();
  return Math.round(size * fontScale);
};

export const scale = (size: number) => {
  const newSize = normalize(size);
  return scaleFont(newSize);
};
