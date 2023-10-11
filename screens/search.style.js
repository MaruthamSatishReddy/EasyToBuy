import {StyleSheet} from "react-native";
import { COLORS,SIZES } from "../constants";
const styles=StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SIZES.medium,
        height: 50,
      },
      searchIcon: { marginHorizontal: 10, color: COLORS.gray },
      searchWrapper: {
        backgroundColor: COLORS.secondary,
        flex: 1,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
      },
      searchInput: {
        fontFamily: "regular",
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small,
      },
      searchBtn: {
        width: 50,
        height: "100%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:SIZES.small,
        backgroundColor: COLORS.primary,
      },});

  export default styles;