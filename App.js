import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import { useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [heightArr, setHeightArr] = useState([15, 80, 5]);

  return (
    <View style={styles.container}>
      <Header style={{ height: `${heightArr[0]}%` }} />
      <Main style={{ height: `${heightArr[1]}%` }} />
      <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />
      <Footer style={{ height: `${heightArr[2]}%` }} />
    </View>
  );
};

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  );
};

export default function App() {
  console.log(NavigationContainer);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
