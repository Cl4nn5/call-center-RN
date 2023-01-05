// react-natinve import
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header(props) {
  const { style } = props;
  return (
    <View style={{ ...styles.container, ...style }}>
      {/* add onclick event  */}
      <Text style={styles.text} onPress={() => alert("Header")}>
        Header Logo Section
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: "15%",
    padding: 15,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
  text: {
    color: "#fff",
    fontSize: 23,
    textAlign: "center",
  },
});
