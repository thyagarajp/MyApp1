import React, { useState } from "react";
import { FlatList, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Product from "../components/product/Product";
import useProducts from "../hooks/useProducts";
import Categories from "./Categories";
import { Spacer } from "../components/ui";

const styles = {
  content: {
    paddingTop: 60,
  },
  categories: {
    marginBottom: 6,
    marginLeft: 8,
    marginRight: 8,
  },
};

function ProductList({ search, filter }: { search: string; filter: number }) {
  const { filteredProducts, setSearch, setFilter, sortOrder, setSortOrder } =
    useProducts();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(sortOrder);
  const [items, setItems] = useState([
    { label: "Sort by Price", value: "none" },
    { label: "Low to High", value: "asc" },
    { label: "High to Low", value: "desc" },
  ]);

  // Update search term when prop changes
  React.useEffect(() => {
    setSearch(search);
  }, [search, setSearch]);
  React.useEffect(() => {
    setFilter(filter);
  }, [filter, setFilter]);
  React.useEffect(() => {
    setSortOrder(value);
  }, [value, setSortOrder]);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.content}>
        <Categories style={styles.categories} />
        <Spacer size={10} />
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          containerStyle={{
            marginLeft: 16,
            marginBottom: 10,
            zIndex: 1000,
            width: "60%",
            alignSelf: "flex-start",
          }}
          style={{
            borderRadius: 8,
            borderColor: "#1976d2",
            backgroundColor: "#f5faff",
            minHeight: 44,
            paddingHorizontal: 12,
            width: "100%",
          }}
          dropDownContainerStyle={{
            borderRadius: 8,
            borderColor: "#1976d2",
            backgroundColor: "#fff",
            zIndex: 1000,
            width: "100%",
            alignSelf: "flex-start",
          }}
          textStyle={{
            fontSize: 16,
            color: "#1976d2",
            fontWeight: "500",
          }}
          labelStyle={{
            color: "#1976d2",
          }}
          selectedItemLabelStyle={{
            fontWeight: "bold",
            color: "#fff",
          }}
          selectedItemContainerStyle={{
            backgroundColor: "#1976d2",
          }}
          listItemContainerStyle={{
            borderBottomColor: "#e3e3e3",
            borderBottomWidth: 1,
          }}
          placeholder="Sort by Price"
        />
        <FlatList
          initialNumToRender={10}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => item.productId.toString()}
          data={filteredProducts}
          renderItem={({ item }) => <Product data={item} />}
        />
      </View>
    </View>
  );
}
export default ProductList;
