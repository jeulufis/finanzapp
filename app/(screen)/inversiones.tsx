import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";
import { Texts } from "@/constants/Texts";
import { HelloWave } from "@/components/HelloWave";

export default function InversionInmobiliaria() {
  const inversionInmobiliariaData = [
    {
      title: "Para qué sirve ?",
      description:
        "La inversión inmobiliaria sirve para varias finalidades. En primer lugar, puede proporcionar una fuente de ingresos pasivos a través del arrendamiento de propiedades, lo que permite a los inversionistas obtener un flujo constante de ingresos. También puede ofrecer la oportunidad de obtener ganancias a través de la apreciación del valor de la propiedad a lo largo del tiempo, especialmente en mercados inmobiliarios en crecimiento. Además, puede servir como una forma de diversificar una cartera de inversiones y proteger contra la inflación.",
    },
    {
      title: "Es rentable ?",
      description:
        "La rentabilidad de la inversión inmobiliaria puede variar dependiendo de varios factores, como la ubicación de la propiedad, la demanda del mercado, el estado del mercado inmobiliario y la gestión adecuada de la propiedad. Sin embargo, cuando se realiza de manera inteligente y se gestionan adecuadamente, las inversiones inmobiliarias pueden ser altamente rentables y ofrecer un buen retorno de la inversión a largo plazo.",
    },
    {
      title: "Cuáles son los riesgos ?",
      description:
        "Si bien la inversión inmobiliaria puede ofrecer muchas oportunidades, también conlleva ciertos riesgos. Algunos de estos riesgos incluyen la depreciación del valor de la propiedad, la vacancia prolongada, los costos de mantenimiento y reparación, los cambios en las condiciones del mercado, los problemas legales y la dificultad para encontrar inquilinos confiables. Es importante evaluar cuidadosamente estos riesgos y tomar medidas para mitigarlos antes de realizar una inversión inmobiliaria.",
    },
    {
      title: "Cómo puedo comenzar a invertir ?",
      description:
        "Para comenzar a invertir en bienes raíces, es importante educarse sobre el mercado inmobiliario, establecer metas financieras claras, desarrollar un plan de inversión, buscar oportunidades de inversión adecuadas, realizar un análisis exhaustivo de la propiedad y considerar trabajar con profesionales inmobiliarios, como agentes, corredores o asesores financieros, para obtener orientación y asistencia.",
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
        <View>
          <Text
            style={{
              color: Colors.WHITE_SUBTITLE,
              fontSize: Texts.title,
              fontWeight: "bold",
            }}
          >
            Inversión Inmobiliaria"
            <HelloWave />
          </Text>

          <Text
            style={{
              color: Colors.TEXTO,
              fontSize: Texts.text,
              paddingVertical: 20,
              textAlign: "justify"
            }}
          >
            La inversión inmobiliaria es la adquisición de propiedades con el
            propósito de generar ingresos y obtener beneficios a través de su
            arrendamiento, reventa o desarrollo. Estas propiedades pueden
            incluir terrenos, casas, apartamentos, edificios comerciales u otros
            tipos de bienes raíces.
          </Text>
        </View>
        {inversionInmobiliariaData.map((item, index) => (
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
                color: Colors.WHITE_ORIGIN,
                fontSize: Texts.subtitle,
                textTransform: "capitalize",
                paddingBottom: 1,
                fontWeight: "600",
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
