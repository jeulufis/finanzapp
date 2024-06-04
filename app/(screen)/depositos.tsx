import React from "react";
import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";
import { Texts } from "@/constants/Texts";
import { HelloWave } from "@/components/HelloWave";

const data = [
  {
    title: "Plazo Fijo",
    description: "El dinero se deposita por un tiempo específico, que puede variar desde unos pocos meses hasta varios años. Durante este período, el dinero no puede retirarse sin incurrir en penalizaciones.",
  },
  {
    title: "Interés Fijo",
    description: "El interés que se pagará al final del período es fijado en el momento de la apertura del depósito. Esto proporciona certeza sobre el rendimiento del ahorro.",
  },
  {
    title: "Riesgo Bajo",
    description: "Son considerados una inversión de bajo riesgo porque el capital invertido está garantizado y el rendimiento es predecible.",
  },
  {
    title: "Liquidez Reducida",
    description: "El dinero no está disponible hasta el final del plazo, a menos que se acepten penalizaciones por retiro anticipado, que pueden incluir la pérdida de parte o la totalidad de los intereses acumulados.",
  },
  {
    title: "Rentabilidad",
    description: "Los depósitos a plazo suelen ofrecer una tasa de interés más alta que las cuentas de ahorro tradicionales debido a la falta de liquidez y el compromiso de tiempo.",
  },
  {
    title: "Seguridad",
    description: "En muchos países, los depósitos a plazo están protegidos por esquemas de seguro de depósitos que garantizan el reembolso del capital hasta un cierto límite en caso de quiebra del banco.",
  },
];

const DepositoItem = ({ title, description }:any) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemTitle}>{title}</Text>
    <Text style={styles.itemDescription}>{description}</Text>
  </View>
);

export default function Depositos() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>
          Depósitos a Plazo <HelloWave />
        </Text>
        <Text style={styles.paragraph}>
          Los depósitos a plazo, son productos financieros ofrecidos por bancos y otras instituciones financieras.
        </Text>
        <Text style={styles.paragraph}>
          Se caracterizan por ser una forma de ahorro en la que el cliente deposita una suma de dinero en la entidad financiera durante un período de tiempo determinado, a cambio de recibir un interés fijo al final del plazo acordado.
        </Text>
        <Text style={styles.paragraph}>
          Aquí te dejare algunos aspectos clave de los depósitos a plazo:
        </Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <DepositoItem title={item.title} description={item.description} />}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={styles.paragraph}>
          En resumen, los depósitos a plazo son una opción de ahorro para aquellos que desean obtener un rendimiento fijo y están dispuestos a comprometer su dinero por un período específico sin necesidad de acceder a él durante ese tiempo.
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
    height: "100%",
  },
  header: {
    color: Colors.WHITE_SUBTITLE,
    fontSize: 23,
    paddingBottom: 5,
    fontWeight: "bold",
    letterSpacing: -0.4,
  },
  paragraph: {
    color: Colors.TEXTO,
    fontSize: Texts.text,
    textAlign: "justify",
    marginBottom: 10,
  },
  itemContainer: {
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 10,
  },
  itemTitle: {
    color: Colors.WHITE_ORIGIN,
    fontSize: Texts.subtitle,
    textTransform: "capitalize",
    paddingBottom: 1,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  itemDescription: {
    color: Colors.TEXTO,
    fontSize: Texts.text,
    textAlign: "justify",
  },
});
