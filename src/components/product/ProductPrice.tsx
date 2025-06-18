import {Text} from '../ui';

export default function ProductPrice({
  price,
  salePrice,
}: {
  price: string | number;
  salePrice: string | number;
}) {
  return (
    <Text>
      {price}{' '}
      <Text size={10} style={{textDecorationLine: 'line-through'}} color="gray">
        {salePrice}
      </Text>
    </Text>
  );
}
