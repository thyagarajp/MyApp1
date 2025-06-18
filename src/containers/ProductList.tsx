import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Product from "../components/product/Product";
import useProducts from "../hooks/useProducts";
import Categories from "./Categories";
import { Spacer } from "../components/ui";

function ProductList({ search, filter }: { search: string; filter: number }) {
  const { filteredProducts, setSearch, setFilter, sortOrder, setSortOrder } =
    useProducts();
  // Update search term when prop changes
  React.useEffect(() => {
    setSearch(search);
  }, [search, setSearch]);
  React.useEffect(() => {
    setFilter(filter);
  }, [filter, setFilter]);

  return (
    <View>
      <Categories />
      <Spacer size={10} />
      <Picker
        selectedValue={sortOrder}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          backgroundColor: "#fff",
          borderRadius: 8,
          elevation: 5, // for Android shadow
          shadowColor: "#000", // for iOS shadow
          shadowOpacity: 0.2,
          shadowRadius: 4,
          shadowOffset: { width: 0, height: 2 },
          zIndex: 9999,
        }}
        onValueChange={(value) => setSortOrder(value)}
      >
        <Picker.Item label="Sort by Price" value="none" />
        <Picker.Item label="Low to High" value="asc" />
        <Picker.Item label="High to Low" value="desc" />
      </Picker>
      <FlatList
        initialNumToRender={10}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => item.productId.toString()}
        data={filteredProducts}
        renderItem={({ item }) => <Product data={item} />}
      />
    </View>
  );
}
export default ProductList;
