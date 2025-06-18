import React, { useState, useRef } from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native";
import ProductList from "../containers/ProductList";
import { normalize } from "../utils/size";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const RATINGS = [5, 4, 3, 2, 1];

export default function Products() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(-1);
  const inputRef = useRef<TextInput>(null);

  const handleKeyPress = (e: any) => {
    if (e.nativeEvent.key === "Tab") {
      inputRef.current?.blur();
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        ref={inputRef}
        placeholder="Search Products"
        value={search}
        onChangeText={setSearch}
        onKeyPress={handleKeyPress}
        style={{
          borderRadius: 4,
          borderWidth: 1,
          borderColor: "gray",
          fontSize: normalize(14),
          padding: normalize(20),
        }}
      />
      {/* Floating Action Button for Rating Filter */}
      <View
        style={{
          position: "absolute",
          bottom: 30,
          right: 30,
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        {RATINGS.map((rating) => (
          <TouchableOpacity
            key={rating}
            style={{
              backgroundColor: filter === rating ? "#1976d2" : "#fff",
              borderRadius: 28,
              marginBottom: 10,
              padding: 12,
              elevation: 4,
              flexDirection: "row",
              alignItems: "center",
              zIndex: 999,
            }}
            onPress={() => setFilter(rating)}
          >
            <MaterialIcons
              name="star"
              size={20}
              color={filter === rating ? "#fff" : "#1976d2"}
            />
            <Text
              style={{
                color: filter === rating ? "#fff" : "#1976d2",
                marginLeft: 6,
              }}
            >
              {rating}+
            </Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={{
            backgroundColor: filter === -1 ? "#1976d2" : "#fff",
            borderRadius: 28,
            padding: 12,
            elevation: 4,
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => setFilter(-1)}
        >
          <MaterialIcons
            name="clear"
            size={20}
            color={filter === -1 ? "#fff" : "#1976d2"}
          />
          <Text
            style={{ color: filter === -1 ? "#fff" : "#1976d2", marginLeft: 6 }}
          >
            All
          </Text>
        </TouchableOpacity>
      </View>
      <ProductList search={search} filter={filter} />
    </View>
  );
}
