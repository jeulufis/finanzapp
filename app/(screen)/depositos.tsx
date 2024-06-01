import { View, Text, FlatList } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { Texts } from "@/constants/Texts";
import { ScrollView } from "react-native";
import { HelloWave } from "@/components/HelloWave";

export default function depositos() {
  const data = [
    {
      title: "Plazo Fijo",
      description:
        "El dinero se deposita por un tiempo específico, que puede variar desde unos pocos meses hasta varios años. Durante este período, el dinero no puede retirarse sin incurrir en penalizaciones.",
    },
    {
      title: "Interés Fijo",
      description:
        "El interés que se pagará al final del período es fijado en el momento de la apertura del depósito. Esto proporciona certeza sobre el rendimiento del ahorro.",
    },
    {
      title: "Riesgo Bajo",
      description:
        "Son considerados una inversión de bajo riesgo porque el capital invertido está garantizado y el rendimiento es predecible.",
    },
    {
      title: "Liquidez Reducida",
      description:
        "El dinero no está disponible hasta el final del plazo, a menos que se acepten penalizaciones por retiro anticipado, que pueden incluir la pérdida de parte o la totalidad de los intereses acumulados.",
    },
    {
      title: "Rentabilidad",
      description:
        "Los depósitos a plazo suelen ofrecer una tasa de interés más alta que las cuentas de ahorro tradicionales debido a la falta de liquidez y el compromiso de tiempo.",
    },
    {
      title: "Seguridad",
      description:
        "En muchos países, los depósitos a plazo están protegidos por esquemas de seguro de depósitos que garantizan el reembolso del capital hasta un cierto límite en caso de quiebra del banco.",
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
            textTransform: "uppercase",
            letterSpacing: -0.3,
          }}
        >
          Depositos a plazo <HelloWave />
        </Text>
        <Text style={{ color: Colors.TEXTO, fontSize: Texts.text, textAlign: "justify"  }}>
          Los depósitos a plazo, también conocidos como depósitos a término, son
          productos financieros ofrecidos por bancos y otras instituciones
          financieras.
        </Text>

        <Text style={{ color: Colors.TEXTO, fontSize: Texts.text,textAlign: "justify" }}>
          Se caracterizan por ser una forma de ahorro en la que el cliente
          deposita una suma de dinero en la entidad financiera durante un
          período de tiempo determinado, a cambio de recibir un interés fijo al
          final del plazo acordado.
        </Text>
        <Text style={{ color: Colors.TEXTO, fontSize: Texts.text,textAlign: "justify" }}>
          Aquí hay algunos aspectos clave de los depósitos a plazo:
        </Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={{ paddingHorizontal: 20,
              marginHorizontal: 60,
              paddingBottom: 20,
              borderWidth: 1,
              borderColor: "#333",
              borderRadius: 10,
              marginVertical: 10,
              paddingVertical: 15, }}>
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
              <Text style={{ color: Colors.TEXTO, fontSize: Texts.text, textAlign: "justify" }}>
                {item.description}
              </Text>
            </View>
          )}
        />

        <Text style={{ color: Colors.TEXTO, fontSize: Texts.text }}>
          En resumen, los depósitos a plazo son una opción de ahorro para
          aquellos que desean obtener un rendimiento fijo y están dispuestos a
          comprometer su dinero por un período específico sin necesidad de
          acceder a él durante ese tiempo.{" "}
        </Text>
      </View>
    </ScrollView>
  );
}
