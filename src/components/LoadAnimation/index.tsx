import React from "react";
import { Container } from "./styles";

import loadingCar from "../../assets/loading_car.json";

import LottieView from "lottie-react-native";

export function LoadAnimation() {
  return (
    <Container>
      <LottieView
        source={loadingCar}
        autoPlay
        style={{ height: 200 }}
        resizeMode="contain"
        loop={true}
      />
    </Container>
  );
}
