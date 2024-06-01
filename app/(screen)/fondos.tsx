import { View, Text, FlatList } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Texts } from "@/constants/Texts";
import { HelloWave } from "@/components/HelloWave";

export default function FondosMutuos() {
  const data = [
    {
      title: "Diversificación",
      description:
        "Los fondos mutuos permiten a los inversores diversificar su portafolio, invirtiendo en una variedad de activos como acciones, bonos y otros valores, reduciendo así el riesgo.",
    },
    {
      title: "Accesibilidad",
      description:
        "Con una inversión mínima relativamente baja, los fondos mutuos ofrecen acceso a un portafolio diversificado que de otro modo sería difícil de alcanzar para los inversores individuales.",
    },
    {
      title: "Gestión Profesional",
      description:
        "Los fondos mutuos son gestionados por profesionales que toman decisiones de inversión basadas en un análisis exhaustivo del mercado, lo que puede ser beneficioso para los inversores que no tienen el tiempo o la experiencia para gestionar sus propias inversiones.",
    },
    {
      title: "Liquidez",
      description:
        "La mayoría de los fondos mutuos permiten a los inversores comprar y vender sus participaciones en cualquier día hábil, proporcionando un alto grado de liquidez en comparación con otras inversiones.",
    },
    {
      title: "Variedad de Fondos",
      description:
        "Existen diferentes tipos de fondos mutuos disponibles, incluyendo fondos de acciones, fondos de bonos, fondos del mercado monetario y fondos mixtos, permitiendo a los inversores elegir según sus objetivos y tolerancia al riesgo.",
    },
    {
      title: "Costo",
      description:
        "Aunque los fondos mutuos ofrecen muchas ventajas, también pueden tener costos asociados, como comisiones de gestión y otros gastos, que deben ser considerados al momento de invertir.",
    },
  ];

  const renderHeader = () => (
    <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
      <Text
        style={{
          color: Colors.WHITE_SUBTITLE,
          fontSize: Texts.title,
          fontWeight: "bold",
        }}
      >
        Fondos Mutuos <HelloWave />
      </Text>
      <View style={{marginVertical: 20}}>
      <Text style={{ color: Colors.TEXTO, fontSize: Texts.text, textAlign: "justify" }}>
        Los fondos mutuos son vehículos de inversión que agrupan dinero de muchos inversores para comprar una cartera diversificada de valores. Son una forma popular de inversión debido a sus múltiples beneficios.
      </Text>
      <Text style={{ color: Colors.TEXTO, fontSize: Texts.text }}>
        Aquí hay algunos aspectos clave de los fondos mutuos:
      </Text>
      </View>
    </View>
  );

  const renderFooter = () => (
    <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
      <Text style={{ color: Colors.TEXTO, fontSize: Texts.text }}>
        En resumen, los fondos mutuos son una opción de inversión atractiva para aquellos que buscan diversificación, gestión profesional y liquidez. Sin embargo, es importante considerar los costos asociados y elegir fondos que se alineen con los objetivos y la tolerancia al riesgo del inversor.
      </Text>
    </View>
  );

  const renderItem = ({ item }:any) => (
    <View style={{ paddingHorizontal: 20,
      marginHorizontal: 60,
      paddingBottom: 20,
      borderWidth: 1,
      borderColor: "#333",
      borderRadius: 10,
      marginVertical: 10,
      paddingVertical: 15,}}>
      <Text
        style={{
          color: Colors.WHITE_ORIGIN,
          fontSize: Texts.subtitle,
          textTransform: "capitalize",
          paddingBottom: 1,
          fontWeight: "600",
        }}
      >
        {item.title}:
      </Text>
      <Text style={{ color: Colors.TEXTO, fontSize: Texts.text, textAlign: 'justify' }}>
        {item.description}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{
        backgroundColor: "#000",
        paddingBottom: 20,
      }}
    />
  );
}
