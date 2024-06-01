import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Colors } from "@/constants/Colors";
import { Texts } from "@/constants/Texts";
import { HelloWave } from "@/components/HelloWave";

export default function CuentaDeAhorro() {
  const cuentaDeAhorroData = [
    
    {
      title: "Para qué sirve una Cuenta de Ahorro?",
      description:
        "Las cuentas de ahorro sirven para varias finalidades. En primer lugar, proporcionan un lugar seguro para guardar dinero y acumular fondos para futuros gastos o emergencias. También pueden ayudar a alcanzar objetivos financieros a corto plazo, como la compra de un artículo costoso o unas vacaciones. Además, pueden ser utilizadas como una herramienta de gestión financiera para separar fondos para diferentes propósitos, como el ahorro para la educación, el pago de deudas o la inversión.",
    },
    {
      title: "Son realmente útiles las Cuentas de Ahorro?",
      description:
        "Sí, las cuentas de ahorro son realmente útiles por varias razones. En primer lugar, ofrecen seguridad al mantener los fondos en una institución financiera regulada y protegida por esquemas de seguro de depósitos. Además, proporcionan liquidez, lo que significa que el dinero puede retirarse fácilmente cuando sea necesario sin incurrir en penalizaciones significativas. También pueden generar intereses sobre los fondos depositados, lo que ayuda a hacer crecer el dinero con el tiempo, aunque las tasas de interés suelen ser más bajas que en otros productos de inversión. Por último, las cuentas de ahorro pueden ayudar a fomentar hábitos financieros saludables al promover el ahorro regular y la planificación financiera a largo plazo.",
    },
    {
      title: "Cuáles son las ventajas de tener una Cuenta de Ahorro?",
      description:
        "Algunas de las principales ventajas de tener una cuenta de ahorro incluyen la accesibilidad, la seguridad, la liquidez, la rentabilidad y la posibilidad de establecer metas financieras. Las cuentas de ahorro ofrecen acceso fácil y rápido a los fondos depositados, proporcionan un entorno seguro para guardar dinero, permiten retirar fondos en cualquier momento sin incurrir en penalizaciones significativas, ofrecen la oportunidad de ganar intereses sobre los fondos depositados y pueden utilizarse para establecer y alcanzar metas financieras específicas.",
    },
    {
      title: "Qué aspectos considerar al abrir una Cuenta de Ahorro?",
      description:
        "Al abrir una cuenta de ahorro, es importante considerar varios aspectos, como las tasas de interés ofrecidas, las tarifas asociadas, los requisitos de saldo mínimo, la accesibilidad a los fondos, la seguridad de la institución financiera, las opciones de gestión de la cuenta y la facilidad de uso de los servicios en línea o móviles. También es útil comparar las ofertas de diferentes instituciones financieras para encontrar la cuenta de ahorro que mejor se adapte a tus necesidades y objetivos financieros.",
    },
    {
      title: "Cómo puedo maximizar los beneficios de mi Cuenta de Ahorro?",
      description:
        "Para maximizar los beneficios de una cuenta de ahorro, es importante establecer metas financieras claras, automatizar los depósitos periódicos, mantener un saldo mínimo para evitar tarifas adicionales, comparar y negociar las tasas de interés con la institución financiera, revisar regularmente el rendimiento de la cuenta y considerar otras opciones de inversión a medida que crece el saldo de la cuenta.",
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
          Cuenta de Ahorro <HelloWave />
        </Text>

        <Text
          style={{
            color: Colors.TEXTO,
            fontSize: Texts.text,
            paddingVertical: 20,
          }}
        >
          Una cuenta de ahorro es un producto financiero ofrecido por bancos y
          otras instituciones financieras que permite a los individuos depositar
          fondos y ganar intereses sobre esos fondos. Generalmente, estas
          cuentas están diseñadas para el ahorro a corto o mediano plazo y
          ofrecen liquidez, seguridad y cierta rentabilidad.
        </Text>
      </View>
        
        {cuentaDeAhorroData.map((item, index) => (
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
                fontSize: Texts.title,
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
