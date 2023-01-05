// react-natinve import
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer(props) {
  const { style } = props;
  const owner = "Kim Hong Je";

  return (
    <View style={{ ...styles.container, ...style }}>
      <Text style={styles.text}>CopyRight © 2023</Text>
      <Text style={styles.text}> {owner}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: "10%",
    backgroundColor: "dodgerblue",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 15,
  },
});
