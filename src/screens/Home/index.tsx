import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, HeaderContent, TotalCars } from "./styles";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

export function Home() {
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
    </Container>
  );
}
