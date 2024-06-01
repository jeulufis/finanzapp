import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";
import { Texts } from "@/constants/Texts";
import { HelloWave } from "@/components/HelloWave";

export default function RiesgosCrediticios() {
  const riesgosCrediticiosData = [
    {
      title:
        "Cuáles son los Factores que Contribuyen a los Riesgos Crediticios?",
      description:
        "Los riesgos crediticios pueden ser influenciados por varios factores, incluyendo la calidad crediticia del prestatario, la capacidad de pago, la solidez financiera, la estabilidad económica, las condiciones del mercado, los cambios en las tasas de interés, los eventos adversos imprevistos y la efectividad de las políticas de gestión de riesgos.",
    },
    {
      title: "Cómo se Evalúan y Mitigan los Riesgos Crediticios?",
      description:
        "Los riesgos crediticios se evalúan mediante el análisis de la capacidad crediticia del prestatario, la calidad de los activos subyacentes, la estructura de garantías, el historial de crédito, la solvencia financiera y otros factores relevantes. Para mitigar estos riesgos, las instituciones financieras suelen implementar políticas y procedimientos de gestión de riesgos, establecer reservas para pérdidas crediticias, diversificar la cartera de créditos, establecer límites de exposición crediticia y utilizar herramientas de monitoreo y seguimiento de riesgos.",
    },
    {
      title: "Cuáles son las Consecuencias de los Riesgos Crediticios?",
      description:
        "Las consecuencias de los riesgos crediticios pueden ser significativas y pueden incluir pérdidas financieras, deterioro de la calidad de los activos, disminución de la rentabilidad, aumento de los costos de financiamiento, deterioro de la reputación de la institución financiera, disminución de la confianza del mercado y posibles implicaciones regulatorias.",
    },
    {
      title: "Cómo se pueden Mitigar los Riesgos Crediticios a Nivel Personal?",
      description:
        "A nivel personal, se pueden mitigar los riesgos crediticios manteniendo una buena salud financiera, administrando responsablemente el crédito, manteniendo un historial de crédito positivo, evitando el endeudamiento excesivo, diversificando las fuentes de ingresos, ahorrando para emergencias y planificando cuidadosamente las finanzas personales.",
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
          }}
        >
          Riesgos Crediticios
          <HelloWave />
        </Text>

        <Text
          style={{
            color: Colors.TEXTO,
            fontSize: Texts.text,
            paddingVertical: 20,
            textAlign: "justify",
          }}
        >
          Los riesgos crediticios son el riesgo de que un prestatario incumpla
          con sus obligaciones de pago, ya sea por no pagar el capital prestado,
          los intereses asociados u otros cargos relacionados. Estos riesgos
          pueden surgir en diversas formas de crédito, como préstamos, bonos,
          hipotecas, tarjetas de crédito y otras formas de financiamiento.
        </Text>

        {riesgosCrediticiosData.map((item, index) => (
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
