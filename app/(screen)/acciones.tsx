import { View, Text, FlatList } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Texts } from "@/constants/Texts";
import { HelloWave } from "@/components/HelloWave";

export default function Acciones() {
  const data = [
    {
      title: "Propiedad Parcial",
      description:
        "Las acciones representan una propiedad parcial en una empresa. Al comprar acciones, te conviertes en copropietario de esa empresa y tienes derecho a una parte de sus activos y ganancias.",
    },
    {
      title: "Potencial de Crecimiento",
      description:
        "Invertir en acciones ofrece la posibilidad de obtener altos rendimientos a largo plazo. El valor de las acciones puede aumentar con el tiempo, lo que permite a los inversores beneficiarse del crecimiento de la empresa.",
    },
    {
      title: "Dividendos",
      description:
        "Muchas empresas pagan dividendos a sus accionistas, que son una parte de las ganancias de la empresa distribuidas periódicamente. Los dividendos pueden proporcionar un flujo constante de ingresos.",
    },
    {
      title: "Liquidez",
      description:
        "Las acciones son generalmente muy líquidas, lo que significa que puedes comprarlas y venderlas fácilmente en el mercado de valores en cualquier momento que el mercado esté abierto.",
    },
    {
      title: "Diversificación",
      description:
        "Invertir en una variedad de acciones de diferentes sectores y geografías puede ayudar a diversificar tu portafolio, reduciendo el riesgo general de tus inversiones.",
    },
    {
      title: "Riesgo",
      description:
        "Aunque las acciones pueden ofrecer altos rendimientos, también conllevan un alto nivel de riesgo. Los precios de las acciones pueden ser volátiles y pueden caer significativamente en poco tiempo.",
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
        Inversiones en Acciones <HelloWave />
      </Text>

      <Text
        style={{
          color: Colors.TEXTO,
          fontSize: Texts.text,
          paddingVertical: 20,
          textAlign: "justify"
        }}
      >
        Las acciones son una de las formas más comunes de inversión y
        representan una participación en la propiedad de una empresa. A
        continuación, se presentan algunos aspectos clave sobre las inversiones
        en acciones.
      </Text>
    </View>
  );

  const renderFooter = () => (
    <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
      <Text style={{ color: Colors.TEXTO, fontSize: Texts.text }}>
        En resumen, invertir en acciones puede ser una forma efectiva de
        aumentar tu riqueza a largo plazo, pero es importante estar consciente
        de los riesgos y estar preparado para la volatilidad del mercado.
        Diversificar tu portafolio y hacer una investigación exhaustiva son
        pasos clave para el éxito en las inversiones en acciones.
      </Text>
    </View>
  );

  const renderItem = ({ item }: any) => (
    <View
      style={{
        paddingHorizontal: 20,
        marginHorizontal: 60,
        paddingBottom: 20,
        borderWidth: 1,
        borderColor: "#333",
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 15,
      }}
    >
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
      <Text
        style={{
          color: Colors.TEXTO,
          fontSize: Texts.text,
          textAlign: "justify",
        }}
      >
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
