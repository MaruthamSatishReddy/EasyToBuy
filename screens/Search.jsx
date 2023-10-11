import { View, Text, StyleSheet,TouchableOpacity, TextInput  } from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context';
import { Feather,Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import {useNavigation} from "@react-navigation/native"
import styles from "./search.style";
const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchBtn}>
          
          <Ionicons name="camera-outline" size={SIZES.large} color={COLORS.white} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => {}}
            placeholder="What Are You Looking For?"
          />
        </View>
        <View>
        <TouchableOpacity>
        <Feather name="search" size={SIZES.xLarge} styles={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Search;
