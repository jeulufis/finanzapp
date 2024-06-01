import { View, Text, FlatList } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Texts } from "@/constants/Texts";
import { HelloWave } from "@/components/HelloWave";

export default function FormasDeAhorrar() {
  const data = [
    {
      title: "Cuentas de Ahorro",
      description:
        "Las cuentas de ahorro son una forma segura y accesible de ahorrar dinero. Normalmente ganan intereses sobre el saldo depositado y permiten retiros cuando sea necesario.",
    },
    {
      title: "Certificados de Depósito (CDs)",
      description:
        "Los CDs son inversiones de bajo riesgo que ofrecen tasas de interés fijas durante un período específico. Requieren que el dinero permanezca depositado durante un tiempo determinado a cambio de una tasa de interés más alta que las cuentas de ahorro.",
    },
    {
      title: "Fondos Mutuos",
      description:
        "Los fondos mutuos son vehículos de inversión que combinan el dinero de varios inversores para comprar una cartera diversificada de valores, gestionada por profesionales.",
    },
    {
      title: "Acciones",
      description:
        "La compra de acciones representa una participación en la propiedad de una empresa. Los inversores pueden obtener ganancias a través del aumento del valor de las acciones y el pago de dividendos.",
    },
    {
      title: "Fondos de Emergencia",
      description:
        "Tener un fondo de emergencia es esencial para cubrir gastos inesperados como reparaciones de automóviles, facturas médicas o pérdida de empleo. Se recomienda tener suficiente para cubrir de tres a seis meses de gastos.",
    },
    {
      title: "Inversiones Inmobiliarias",
      description:
        "Invertir en bienes raíces puede generar ingresos pasivos a través del alquiler de propiedades o la apreciación del valor de la propiedad con el tiempo.",
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
        Formas de Ahorrar <HelloWave />
      </Text>
      <Text style={{ color: Colors.TEXTO, fontSize: Texts.text, paddingVertical: 20 }}>
        Hay muchas formas diferentes de ahorrar dinero, cada una con sus propias características y beneficios. Aquí hay algunas opciones populares:
      </Text>
    </View>
  );

  const renderFooter = () => (
    <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
      <Text style={{ color: Colors.TEXTO, fontSize: Texts.text, textAlign: "justify" }}>
        En resumen, elegir la forma adecuada de ahorrar depende de tus objetivos financieros, tolerancia al riesgo y horizonte temporal. Es importante diversificar tus ahorros y buscar asesoramiento financiero si es necesario para tomar decisiones informadas.
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
