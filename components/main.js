// react-natinve import
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CallInfo from "./callInfo";

const CallInfoList = (props) => {
  const { style } = props;
  const size = 4;
  const list = ["01011112222", "01022223333", "01033334444", "01044445555"];

  return (
    <View style={{ ...styles.boxWrap, ...style }}>
      {list.map((phoneNumber, index) => {
        return <CallInfo style={styles.box} idx={index} key={index} phoneNumber={phoneNumber} />;
      })}
    </View>
  );
};

export default function Main(props) {
  const { style } = props;

  return (
    <View style={{ ...styles.container, ...style }}>
      <CallInfoList />
    </View>
  );
}

// styles 2x2 grid
const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: "75%",

    backgroundColor: "yellow",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxWrap: {
    width: "100%",
    height: "50%",
    padding: "5%",
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "flex-end",
  },
  box: {
    width: "45%",
    height: "45%",
    borderWidth: 1,
    borderColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 23,
    textAlign: "center",
    color: "black",
  },
});
