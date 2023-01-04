import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";

export function Home() {
  const navigation = useNavigation();

  const carDataOne = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "ao dia",
      price: 120,
    },
    thumbnail: "https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png",
  };
  const carDataTwo = {
    brand: "Porsche",
    name: "Panamera",
    rent: {
      period: "ao dia",
      price: 340,
    },
    thumbnail:
      "https://www.pngkit.com/png/full/237-2375888_porsche-panamera-s.png",
  };

  function handleCarDetails() {
    navigation.navigate("CarDetails");
  }

  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Header>
        <HeaderContent>
          <Logo height={RFValue(12)} width={RFValue(108)} />
          <TotalCars>Total 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car data={carDataOne} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
}
