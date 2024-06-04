import { View, Text, Pressable } from "react-native";

import React from "react";
import { Colors } from "@/constants/Colors";
import { FlatList } from "react-native";
import { Texts } from "@/constants/Texts";
import { Link } from "expo-router";

import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ContainerPost() {
  const data = [
    {
      link: "/depositos",
      key: "Depósitos a Plazo",
      description:
        "Instrumentos financieros en los que se deposita una cantidad de dinero a una tasa de interés fija por un período determinado.",
    },
    {
      link: "/fondos",
      key: "Fondos Mutuos",
      description:
        "Vehículos de inversión que agrupan el dinero de muchos inversores para comprar una cartera diversificada de valores.",
    },
    {
      link: "/acciones",
      key: "Acciones",
      description:
        "Títulos que representan una fracción del capital social de una empresa y otorgan derechos económicos y de participación.",
    },
    {
      link: "/ahorro",
      key: "Ahorro",
      description:
        "Dinero reservado de los ingresos para uso futuro, que no se gasta inmediatamente.",
    },
    {
      link: "/activos",
      key: "Activos",
      description:
        "Activos son recursos con valor económico que posee una entidad, mientras que pasivos son obligaciones financieras que debe pagar.",
    },{
      link: "/pasivos",
      key: "Pasivos ",
      description:
        "Son recursos con valor económico que posee una entidad, mientras que pasivos son obligaciones financieras que debe pagar.",
    },
    {
      link: "/creditos",
      key: "Creditos",
      description:
        "Préstamos otorgados a individuos o empresas con la promesa de devolver el dinero en el futuro, generalmente con intereses.",
    },
    {
      link: "/cuentas",
      key: "Cuenta de Ahorro",
      description:
        "Cuentas bancarias que generan intereses sobre el saldo depositado, generalmente utilizadas para ahorrar dinero a corto plazo.",
    },
    {
      link: "/inversiones",
      key: "Inversiones Inmobiliarias",
      description:
        "Compra, propiedad, gestión, alquiler y/o venta de bienes inmuebles con fines de obtener una ganancia.",
    },
    {
      link: "/diversificacion",
      key: "Diversificación",
      description:
        "Estrategia de inversión que consiste en distribuir el capital en una variedad de activos para reducir el riesgo.",
    },
    {
      link: "/riesgos",
      key: "Riesgo Crediticio",
      description:
        "Posibilidad de que un prestatario no cumpla con sus obligaciones de pago, afectando al prestamista.",
    },{
      link: "/fondos",
      key: "Fondos de Pension",
      description:
        "Posibilidad de que un prestatario no cumpla con sus obligaciones de pago, afectando al prestamista.",
    },{
      link: "/criptomonedas",
      key: "Criptomonedas",
      description:
        "Posibilidad de que un prestatario no cumpla con sus obligaciones de pago, afectando al prestamista.",
    },{
      link: "/exchanges",
      key: "Exchanges",
      description:
        "Posibilidad de que un prestatario no cumpla con sus obligaciones de pago, afectando al prestamista.",
    },{
      link: "/bolsa",
      key: "Bolsa de Valores",
      description:
        "Posibilidad de que un prestatario no cumpla con sus obligaciones de pago, afectando al prestamista.",
    },{
      link: "/crowdfunding",
      key: "Crowdfunding",
      description:
        "Posibilidad de que un prestatario no cumpla con sus obligaciones de pago, afectando al prestamista.",
    },{
      link: "/pagar",
      key: "Pagar Deuda",
      description:
        "Posibilidad de que un prestatario no cumpla con sus obligaciones de pago, afectando al prestamista.",
    },
  ];

  return (
    <View style={{ paddingTop: 20 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Link href={item.link} asChild>
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: "#333",
                borderRadius: 10,
                marginVertical: 6,
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ width: 340 }}>
                  <View
                    style={{
                      display: "flex",
                      height: 30,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "600",
                        letterSpacing: -0.1,
                        color: Colors.WHITE_SUBTITLE,
                        fontSize: Texts.subtitle,
                        textTransform: "uppercase",
                      }}
                    >
                      {item.key}
                    </Text>
                  </View>
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
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <EvilIcons name="chevron-right" size={60} color="white" />
                </View>
              </View>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}
