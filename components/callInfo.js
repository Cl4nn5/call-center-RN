import React from "react";
import { View, Text, StyleSheet, Linking, Button } from "react-native";

export default function CallInfo(props) {
  const { style, idx, phoneNumber } = props;
  const linkPhoneNumber = (phoneNum) => `tel:${phoneNum}`;

  return (
    <View style={{ ...styles.box, ...style }}>
      <Text style={{ ...styles.text }} onPress={() => Linking.openURL(linkPhoneNumber(phoneNumber))}>
        {idx}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    margin: "1%", // flex-gap
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  text: {
    width: "100%",
    height: "100%",
    lineHeight: 100,
    textAlign: "center",
    color: "gray",
    fontWeight: "bold",
  },
});
