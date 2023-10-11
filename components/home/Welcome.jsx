import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants";
import { Ionicons } from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons/Feather";
const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>
          Find The Most
        </Text>
        <Text style={styles.welcomeText(COLORS.primary)}>
          Luxurious Furniture
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={SIZES.xLarge} styles={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value="Hello"
            onPressIn={() => {}}
            placeholder="What Are You Looking For?"
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons name="camera-outline" size={SIZES.large} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
