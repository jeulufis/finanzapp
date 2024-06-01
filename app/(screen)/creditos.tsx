import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";
import { Texts } from "@/constants/Texts";
import { HelloWave } from "@/components/HelloWave";

export default function Creditos() {
  const creditosData = [
    {
      title: "Tasas de Interés Bajas",
      description:
        "Los créditos buenos suelen ofrecer tasas de interés más bajas en comparación con otros tipos de créditos disponibles en el mercado.",
    },
    {
      title: "Condiciones Flexibles de Pago",
      description:
        "Estos créditos suelen tener condiciones de pago flexibles, lo que significa que puedes ajustar los plazos y las cuotas de acuerdo con tus necesidades financieras.",
    },
    {
      title: "Proceso de Aprobación Rápido",
      description:
        "Los créditos buenos generalmente tienen un proceso de aprobación más rápido, lo que te permite obtener los fondos que necesitas de manera oportuna.",
    },
    {
      title: "Montos de Préstamo Razonables",
      description:
        "Puedes acceder a montos de préstamo razonables que se ajusten a tus necesidades financieras específicas, sin comprometer tu capacidad de pago.",
    },
    {
      title: "Transparencia en los Términos y Condiciones",
      description:
        "Los prestamistas de créditos buenos suelen ser transparentes en cuanto a los términos y condiciones del préstamo, evitando sorpresas desagradables.",
    },
    {
      title: "Soporte al Cliente de Calidad",
      description:
        "Las instituciones financieras que ofrecen créditos buenos suelen brindar un excelente servicio de atención al cliente, lo que te permite obtener ayuda cuando la necesitas.",
    },
  ];

  const porQueBuenosData = [
    {
      title: "Acceso a Financiamiento",
      description:
        "Los créditos buenos te brindan acceso a financiamiento que puede ser crucial para la realización de proyectos importantes o para cubrir necesidades financieras urgentes.",
    },
    {
      title: "Facilitan la Planificación Financiera",
      description:
        "Con tasas de interés bajas y condiciones flexibles, los créditos buenos te permiten planificar tus pagos de manera más efectiva y evitar situaciones de endeudamiento excesivo.",
    },
    {
      title: "Fomentan el Crecimiento Económico",
      description:
        "Al proporcionar financiamiento a individuos y empresas, los créditos buenos contribuyen al crecimiento económico al estimular la inversión y la actividad empresarial.",
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
         Creditos <HelloWave />
        </Text>
        {creditosData.map((item, index) => (
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
          Por qué son buenos los créditos ?
        </Text>
        {porQueBuenosData.map((item, index) => (
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
                textAlign: "justify"
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