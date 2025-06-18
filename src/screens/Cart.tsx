import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CartContext, CartItem } from "../context/cart";

const CartScreen = () => {
  const { cart, incrementCount, decrementCount } = useContext(CartContext);

  const getTotal = () =>
    cart.reduce((sum, item) => sum + Number(item.productPrice) * item.count, 0);

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartRow}>
      <Text style={{ textTransform: "capitalize" }} numberOfLines={1}>
        {item.productName} - ${item.productPrice}
      </Text>
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => decrementCount(item.productId)}
        >
          <Text style={styles.actionText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.countText}>{item.count}</Text>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => incrementCount(item.productId)}
        >
          <Text style={styles.actionText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.productId.toString()}
        renderItem={renderCartItem}
        ListEmptyComponent={<Text>Your cart is empty.</Text>}
      />
      <Text style={styles.total}>Total: ${getTotal()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", marginVertical: 10 },
  cartRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  actionsRow: { flexDirection: "row", alignItems: "center" },
  actionBtn: {
    padding: 8,
    backgroundColor: "#eee",
    borderRadius: 4,
    marginHorizontal: 4,
  },
  actionText: { fontSize: 18 },
  countText: { fontSize: 18, marginHorizontal: 8 },
  total: { fontSize: 18, fontWeight: "bold", marginTop: 20 },
});

export default CartScreen;
