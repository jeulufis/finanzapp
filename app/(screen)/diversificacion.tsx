import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";
import { Texts } from "@/constants/Texts";
import { HelloWave } from "@/components/HelloWave";

export default function Diversificacion() {
  const diversificacionData = [
    {
      title: "Para qué sirve la Diversificación?",
      description:
        "La diversificación sirve para mitigar el riesgo asociado con la inversión al distribuir el capital entre diferentes activos. Al invertir en una variedad de activos, se reduce la exposición a los riesgos específicos de cada activo y se minimiza el impacto de eventos adversos en el desempeño general de la cartera. Además, la diversificación puede ayudar a mejorar la estabilidad y consistencia de los retornos de la inversión a lo largo del tiempo.",
    },
    {
      title: "Cómo se logra la Diversificación?",
      description:
        "La diversificación se logra invirtiendo en una amplia gama de activos financieros, que pueden incluir acciones, bonos, bienes raíces, materias primas, fondos mutuos, ETFs y otros instrumentos. También implica distribuir la inversión entre diferentes sectores industriales, como tecnología, salud, finanzas, energía, etc., así como entre diferentes geografías, como mercados nacionales e internacionales. La asignación de activos y la construcción de una cartera diversificada deben basarse en los objetivos financieros, el horizonte temporal y el nivel de tolerancia al riesgo del inversor.",
    },
    {
      title: "Cuáles son los beneficios de la Diversificación?",
      description:
        "Algunos de los principales beneficios de la diversificación incluyen la reducción del riesgo de la cartera, la mejora del potencial de retorno ajustado al riesgo, la protección contra la volatilidad del mercado, la minimización del impacto de eventos específicos del mercado y la mejora de la estabilidad y consistencia de los retornos de la inversión a lo largo del tiempo.",
    },
    {
      title: "Existen riesgos asociados con la Diversificación?",
      description:
        "Si bien la diversificación puede ayudar a reducir el riesgo general de la cartera, no elimina por completo el riesgo de pérdida. Existen riesgos asociados con la diversificación, como el riesgo de mercado, el riesgo de liquidez, el riesgo de crédito, el riesgo de tipo de cambio y el riesgo de inflación. Además, una diversificación excesiva puede diluir los rendimientos potenciales de la cartera y limitar la capacidad de capturar oportunidades de inversión específicas.",
    },
  ];

  return (
    <ScrollView>
      <View
        style={{
          paddingTop: 50,
          paddingHorizontal: 20,
          backgroundColor: Colors.BLACK,
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
            letterSpacing: -0.3,
          }}
        >
          Diversificación de Inversiones <HelloWave />
        </Text>
        <Text
          style={{
            color: Colors.TEXTO,
            fontSize: Texts.text,
            textAlign: "justify",
          }}
        >
          La diversificación de inversiones es una estrategia financiera que
          consiste en distribuir el capital entre diferentes tipos de activos
          financieros con el objetivo de reducir el riesgo y maximizar el
          retorno de la inversión. Esta estrategia implica invertir en una
          variedad de clases de activos, sectores industriales, geografías y
          tipos de instrumentos financieros.
        </Text>
        {diversificacionData.map((item, index) => (
          <View
            key={index}
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
                color: Colors.WHITE_SUBTITLE,
                fontSize: Texts.subtitle,
                fontWeight: "bold",
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                color: Colors.WHITE,
                fontSize: Texts.text,
                textAlign: "justify",
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
