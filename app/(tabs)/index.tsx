import { StyleSheet, ScrollView, Text, View, Image } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { Colors } from "@/constants/Colors";
import { Texts } from "@/constants/Texts";

import ContainerPost from "@/components/ContainerPost";
import { StatusBar } from "expo-status-bar";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="black" translucent={true} />
      <View style={{ width: "100%", alignContent: "center" }}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text
            style={{
              color: "#EDEDED",
              fontSize: Texts.title,
              fontWeight: "bold",
              paddingVertical: 14,
              paddingTop: 15,
              letterSpacing: -0.2,
            }}
          >
            Finanzapp Chile
          </Text>
          <HelloWave />
        </View>
        <Text
          style={{ color: "#888888", fontSize: Texts.text, marginTop: -15 }}
        >
          Formate Financieramente !
        </Text>
      </View>
      <ContainerPost />

      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          borderStyle: "dotted",
          borderColor: "#ddd",
          gap: 10,
          borderWidth: 0.3,
          padding: 10,
          borderRadius: 30,
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <FontAwesome name="github" size={20} color="white" />
        <Text style={{ color: Colors.WHITE, fontSize: Texts.text }}>
          Quieres contribuir ?
        </Text>
      </View>

      <View
        style={{
          marginBottom: 120,
          borderColor: "#ddd",
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontSize: Texts.text,
            textAlign: "center",
            paddingTop: 10,
          }}
        >
          Desarrollador por Juan E. Salazar
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#000",
    paddingBottom: 50,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
