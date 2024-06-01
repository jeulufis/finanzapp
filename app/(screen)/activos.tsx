import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";
import { Texts } from "@/constants/Texts";
import { HelloWave } from "@/components/HelloWave";

export default function depositos() {
  const activosData = [
    {
      title: "Activo Circulante",
      description:
        "Incluye los activos que pueden convertirse rápidamente en efectivo o que se espera que se consuman en un corto plazo, generalmente dentro de un año. Ejemplos incluyen efectivo, cuentas por cobrar y existencias.",
    },
    {
      title: "Activo Fijo",
      description:
        "Se refiere a los activos tangibles e intangibles que se utilizan en la operación del negocio y se espera que proporcionen beneficios económicos durante varios períodos contables. Ejemplos incluyen propiedades, planta y equipo, así como activos intangibles como patentes y marcas registradas.",
    },
    {
      title: "Otros Activos",
      description:
        "Incluye activos que no se clasifican fácilmente en las categorías anteriores, como inversiones a largo plazo, activos diferidos y otros activos no corrientes.",
    },
  ];

  const pasivosData = [
    {
      title: "Pasivo Circulante",
      description:
        "Incluye las obligaciones que se espera que se liquiden en un corto plazo, generalmente dentro de un año. Ejemplos incluyen cuentas por pagar, préstamos a corto plazo y pasivos acumulados.",
    },
    {
      title: "Pasivo No Circulante",
      description:
        "Se refiere a las obligaciones a largo plazo, es decir, aquellas que se espera que se liquiden después de un año. Ejemplos incluyen préstamos a largo plazo, bonos y pensiones.",
    },
    {
      title: "Patrimonio Neto",
      description:
        "Representa los fondos propios de la empresa, es decir, los recursos que pertenecen a los propietarios. Incluye el capital social, las utilidades retenidas y otros componentes de patrimonio neto.",
    },
  ];

  return (
    <ScrollView>
      <View
        style={{
          paddingTop: 50,
          paddingHorizontal: 20,
          backgroundColor: "#000",
          height: "100%",
          display: "flex",
          gap: 17,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE_SUBTITLE,
            fontSize: Texts.title,
            fontWeight: "bold",
          }}
        >
          Activos <HelloWave />
        </Text>
        {activosData.map((item, index) => (
          <View key={index} style={{ paddingHorizontal: 20,
            marginHorizontal: 60,
            paddingBottom: 20,
            borderWidth: 1,
            borderColor: "#333",
            borderRadius: 10,
            marginVertical: 10,
            paddingVertical: 15, }}>
            <Text
              style={{
                color: Colors.WHITE_SUBTITLE,
                fontSize: Texts.text,
                fontWeight: "bold",
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                color: Colors.WHITE,
                fontSize: Texts.text,
              }}
            >
              {item.description}
            </Text>
          </View>
        ))}

        <Text
          style={{
            color: Colors.WHITE_SUBTITLE,
            fontSize: Texts.title,
            fontWeight: "bold",
          }}
        >
          Pasivos <HelloWave />
        </Text>
        {pasivosData.map((item, index) => (
          <View key={index} style={{ paddingHorizontal: 20,
            marginHorizontal: 60,
            paddingBottom: 20,
            borderWidth: 1,
            borderColor: "#333",
            borderRadius: 10,
            marginVertical: 10,
            paddingVertical: 15, }}>
            <Text
              style={{
                color: Colors.WHITE_SUBTITLE,
                fontSize: Texts.text,
                fontWeight: "bold",
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                color: Colors.WHITE,
                fontSize: Texts.text,
                textAlign:'justify'
              }}
            >
              {item.description}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
